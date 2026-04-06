import { EventCode } from "../../constants";
import { FactusClient } from "../../index";
import type { EmitEventInput } from "../../types";
import {
    readSandboxEnv,
    shouldRunSandboxTests,
    uniqueRef,
} from "../helpers/sandbox-env";
import {
    createInvalid,
    printResults,
    run,
    runAllowConflict,
    runExpectError,
} from "../helpers/sandbox-runner";

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("sandbox integration", () => {
  if (!shouldRunSandboxTests()) {
    test("skipped: set RUN_SANDBOX_TESTS=true in .env.local", () => {
      console.log("Sandbox tests disabled.");
      console.log(
        "To enable, set RUN_SANDBOX_TESTS=true in packages/factus-js/.env.local",
      );
      expect(true).toBe(true);
    });
    return;
  }

  const env = readSandboxEnv();
  const factus = new FactusClient({
    clientId: env.clientId,
    clientSecret: env.clientSecret,
    username: env.username,
    password: env.password,
    environment: "sandbox",
  });

  const invoiceReference = uniqueRef("I3");
  const supportReference = uniqueRef("REF0017");
  const adjustmentReference = uniqueRef("REF007");

  afterAll(() => {
    console.log("\n--- Sandbox Results ---\n");
    printResults();
    console.log("");
  });

  test("verified endpoints should resolve", async () => {
    // -----------------------------------------------------------------
    // Cleanup — delete any pending bills left from previous test runs.
    // The sandbox only allows one pending bill at a time, so stale
    // pending bills would cause 409 when creating new ones.
    // -----------------------------------------------------------------
    try {
      const pending = await factus.bills.list({
        filter: { status: 0 },
        per_page: 50,
      });
      for (const bill of pending.data.data) {
        if (bill.reference_code) {
          try {
            await factus.bills.delete(bill.reference_code);
          } catch {
            // ignore — some bills may not be deletable
          }
        }
      }
    } catch {
      // ignore cleanup errors
    }

    // -----------------------------------------------------------------
    // Bills — delete flow FIRST (before regular create, to avoid 409
    // "pending bill" conflicts). Create a bill that passes API input
    // validation but fails DIAN validation (persisted with errors),
    // then delete it by reference_code.
    // Using identification_document_id 6 (NIT) with wrong DV triggers
    // FAK24 — the doc is persisted but not sent to DIAN.
    // -----------------------------------------------------------------
    const deleteBillRef = uniqueRef("DEL-BILL");
    await createInvalid(
      "bills.delete (create invalid)",
      factus.bills.create({
        numbering_range_id: 8,
        reference_code: deleteBillRef,
        payment_form: "2",
        payment_due_date: "2026-12-31",
        payment_method_code: "10",
        customer: {
          identification: "123456789",
          dv: "3",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          legal_organization_id: "2",
          tribute_id: "21",
          identification_document_id: "6",
          municipality_id: 980,
        },
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            tax_rate: "19.00",
            unit_measure_id: 70,
            standard_code_id: "1",
            is_excluded: 0,
            tribute_id: 1,
          },
        ],
      }),
    );
    await run("bills.delete", factus.bills.delete(deleteBillRef));

    // -----------------------------------------------------------------
    // Bills — regular CRUD (after delete clears any pending bill)
    // -----------------------------------------------------------------
    await runAllowConflict(
      "bills.create",
      factus.bills.create({
        numbering_range_id: 8,
        reference_code: invoiceReference,
        payment_form: "2",
        payment_due_date: "2026-12-31",
        payment_method_code: "10",
        customer: {
          identification: "123456789",
          dv: "3",
          company: "",
          trade_name: "",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          legal_organization_id: "2",
          tribute_id: "21",
          identification_document_id: "3",
          municipality_id: 980,
        },
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            tax_rate: "19.00",
            unit_measure_id: 70,
            standard_code_id: "1",
            is_excluded: 0,
            tribute_id: 1,
          },
        ],
      }),
      [409, 422],
    );

    await run("bills.list", factus.bills.list({ page: 1, per_page: 5 }));
    await run("bills.get", factus.bills.get("SETP990000203"));
    await run(
      "bills.getEmailContent",
      factus.bills.getEmailContent("SETP990000203"),
    );
    await run("bills.downloadPdf", factus.bills.downloadPdf("SETP990000203"));
    await run("bills.downloadXml", factus.bills.downloadXml("SETP990000203"));
    await run("bills.getEvents", factus.bills.getEvents("SETP990000203"));

    // -----------------------------------------------------------------
    // Credit Notes
    // -----------------------------------------------------------------
    await runAllowConflict(
      "creditNotes.create",
      factus.creditNotes.create({
        numbering_range_id: 9,
        correction_concept_code: "2",
        customization_id: "20",
        bill_id: 514,
        reference_code: uniqueRef("CN"),
        payment_method_code: "10",
        customer: {
          identification: "123456789",
          dv: "3",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          legal_organization_id: "2",
          tribute_id: "21",
          identification_document_id: "3",
          municipality_id: 980,
        },
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            tax_rate: "19.00",
            unit_measure_id: 70,
            standard_code_id: "1",
            is_excluded: 0,
            tribute_id: 1,
          },
        ],
      }),
      [409, 422],
    );

    await run(
      "creditNotes.list",
      factus.creditNotes.list({ page: 1, per_page: 5 }),
    );
    await run("creditNotes.get", factus.creditNotes.get("NC856"));
    await run(
      "creditNotes.getEmailContent",
      factus.creditNotes.getEmailContent("NC856"),
    );
    await run(
      "creditNotes.downloadPdf",
      factus.creditNotes.downloadPdf("NC856"),
    );
    await run(
      "creditNotes.downloadXml",
      factus.creditNotes.downloadXml("NC856"),
    );

    // creditNotes.delete — create a credit note that passes API input
    // validation but fails DIAN validation (persisted with errors),
    // then delete it by reference_code.
    // Using NIT (id:6) with wrong DV triggers DIAN rejection.
    const deleteCreditNoteRef = uniqueRef("DEL-CN");
    await createInvalid(
      "creditNotes.delete (create invalid)",
      factus.creditNotes.create({
        numbering_range_id: 9,
        correction_concept_code: "2",
        customization_id: "20",
        bill_id: 514,
        reference_code: deleteCreditNoteRef,
        payment_method_code: "10",
        customer: {
          identification: "123456789",
          identification_document_id: "6",
          dv: "3",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          legal_organization_id: "2",
          tribute_id: "21",
          municipality_id: 980,
        },
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            tax_rate: "19.00",
            unit_measure_id: 70,
            standard_code_id: "1",
            is_excluded: 0,
            tribute_id: 1,
          },
        ],
      }),
    );
    await run(
      "creditNotes.delete",
      factus.creditNotes.delete(deleteCreditNoteRef),
    );

    // -----------------------------------------------------------------
    // Support Documents & Adjustment Notes — cleanup, then delete
    // flows FIRST (before regular creates, to avoid 409 "pending
    // document" conflicts). The sandbox only allows one pending
    // support document at a time.
    // -----------------------------------------------------------------
    try {
      const pendingSD = await factus.supportDocuments.list({
        filter: { status: 0 },
        per_page: 50,
      });
      for (const sd of pendingSD.data.data) {
        if (sd.reference_code) {
          try {
            await factus.supportDocuments.delete(sd.reference_code);
          } catch {
            // ignore — some docs may not be deletable
          }
        }
      }
    } catch {
      // ignore cleanup errors
    }

    // supportDocuments.delete — create a support doc that passes API input
    // validation but fails DIAN validation (persisted but pending),
    // then delete it. Use identification: "INVALID_DOCUMENT" with a
    // valid identification_document_id to trigger DIAN rejection.
    const deleteSupportRef = uniqueRef("DEL-SD");
    await createInvalid(
      "supportDocuments.delete (create invalid)",
      factus.supportDocuments.create({
        reference_code: deleteSupportRef,
        numbering_range_id: 148,
        payment_method_code: "10",
        observation: "",
        provider: {
          identification_document_id: "6",
          identification: "INVALID_DOCUMENT",
          dv: "6",
          trade_name: "",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          is_resident: 1,
          country_code: "CO",
          municipality_id: 980,
        },
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
            withholding_taxes: [{ code: "06", withholding_tax_rate: "3.50" }],
          },
          {
            code_reference: "54321",
            name: "producto de prueba 2",
            quantity: 1,
            discount_rate: 0,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
          },
        ],
      }),
    );
    await run(
      "supportDocuments.delete",
      factus.supportDocuments.delete(deleteSupportRef),
    );

    // adjustmentNotes.delete — create a support doc (pending cleared
    // above), look it up, create an adjustment note for it, then delete.
    // Use identification: "INVALID_DOCUMENT" to ensure DIAN rejection.
    const deleteAdjSupportRef = uniqueRef("DEL-ADS");
    await createInvalid(
      "adjustmentNotes.delete (create invalid support doc)",
      factus.supportDocuments.create({
        reference_code: deleteAdjSupportRef,
        numbering_range_id: 148,
        payment_method_code: "10",
        observation: "",
        provider: {
          identification_document_id: "6",
          identification: "INVALID_DOCUMENT",
          dv: "0",
          trade_name: "",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          is_resident: 1,
          country_code: "CO",
          municipality_id: 980,
        },
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
            withholding_taxes: [{ code: "06", withholding_tax_rate: "3.50" }],
          },
          {
            code_reference: "54321",
            name: "producto de prueba 2",
            quantity: 1,
            discount_rate: 0,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
          },
        ],
      }),
    );

    // Look up the support document to get its id
    const supportDocList = await factus.supportDocuments.list({
      filter: { reference_code: deleteAdjSupportRef },
    });
    const supportDocId = supportDocList.data.data[0]?.id;
    expect(supportDocId).toBeDefined();

    // Create an adjustment note for that support document
    const deleteAdjRef = uniqueRef("DEL-AN");
    await createInvalid(
      "adjustmentNotes.delete (create invalid adj note)",
      factus.adjustmentNotes.create({
        reference_code: deleteAdjRef,
        numbering_range_id: 149,
        support_document_id: supportDocId,
        correction_concept_code: "2",
        payment_method_code: "10",
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
          },
        ],
      }),
    );
    await run(
      "adjustmentNotes.delete",
      factus.adjustmentNotes.delete(deleteAdjRef),
    );

    // Delete the support doc used for the adjustment note test
    try {
      await factus.supportDocuments.delete(deleteAdjSupportRef);
    } catch {
      // ignore — already deleted or not pending
    }

    // -----------------------------------------------------------------
    // Support Documents — regular CRUD (after delete flows clear state)
    // -----------------------------------------------------------------
    await runAllowConflict(
      "supportDocuments.create",
      factus.supportDocuments.create({
        reference_code: supportReference,
        numbering_range_id: 148,
        payment_method_code: "10",
        observation: "",
        provider: {
          identification_document_id: "6",
          identification: "123456789",
          dv: "6",
          trade_name: "",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          is_resident: 1,
          country_code: "CO",
          municipality_id: 980,
        },
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
            withholding_taxes: [{ code: "06", withholding_tax_rate: "3.50" }],
          },
          {
            code_reference: "54321",
            name: "producto de prueba 2",
            quantity: 1,
            discount_rate: 0,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
          },
        ],
      }),
      [409, 422],
    );

    await run(
      "supportDocuments.list",
      factus.supportDocuments.list({ page: 1, per_page: 5 }),
    );
    await run(
      "supportDocuments.get",
      factus.supportDocuments.get("SEDS984000021"),
    );
    await run(
      "supportDocuments.downloadPdf",
      factus.supportDocuments.downloadPdf("SEDS984000021"),
    );
    await run(
      "supportDocuments.downloadXml",
      factus.supportDocuments.downloadXml("SEDS984000021"),
    );

    // -----------------------------------------------------------------
    // Adjustment Notes — regular CRUD
    // -----------------------------------------------------------------
    await runAllowConflict(
      "adjustmentNotes.create",
      factus.adjustmentNotes.create({
        reference_code: adjustmentReference,
        numbering_range_id: 149,
        payment_method_code: "10",
        support_document_id: 224,
        correction_concept_code: "2",
        items: [
          {
            code_reference: "12345",
            name: "producto de prueba",
            quantity: 1,
            discount_rate: 20,
            price: 50000,
            unit_measure_id: 70,
            standard_code_id: "1",
          },
        ],
      }),
      [409, 422],
    );

    await run(
      "adjustmentNotes.list",
      factus.adjustmentNotes.list({ page: 1, per_page: 5 }),
    );
    await run("adjustmentNotes.get", factus.adjustmentNotes.get("NDS3"));
    await run(
      "adjustmentNotes.downloadPdf",
      factus.adjustmentNotes.downloadPdf("NDS3"),
    );
    await run(
      "adjustmentNotes.downloadXml",
      factus.adjustmentNotes.downloadXml("NDS3"),
    );

    // -----------------------------------------------------------------
    // Catalog
    // -----------------------------------------------------------------
    await run(
      "catalog.getAcquirer",
      factus.catalog.getAcquirer({
        identification_document_id: "3",
        identification_number: "1399991",
      }),
    );
    await run(
      "catalog.listMunicipalities",
      factus.catalog.listMunicipalities({ filter: { name: "San Gil" } }),
    );
    await run(
      "catalog.listTributes",
      factus.catalog.listTributes({ name: "IVA" }),
    );
    await run(
      "catalog.listMeasurementUnits",
      factus.catalog.listMeasurementUnits({ name: "Unidad" }),
    );
    await run(
      "catalog.listCountries",
      factus.catalog.listCountries({ filter: { name: "Colombia" } }),
    );

    // -----------------------------------------------------------------
    // Other
    // -----------------------------------------------------------------
    await run(
      "numberingRanges.list",
      factus.numberingRanges.list({ page: 1, per_page: 5 }),
    );
    await run(
      "numberingRanges.getSoftwareRange",
      factus.numberingRanges.getSoftwareRange(),
    );
    await run(
      "reception.list",
      factus.reception.list({ page: 1, per_page: 5 }),
    );
    await run("subscription.list", factus.subscription.list());
    await run("company.get", factus.company.get());
  });

  test("permission-limited endpoints should throw FactusError", async () => {
    await runExpectError(
      "bills.sendEmail",
      factus.bills.sendEmail("SETP990000203", {
        email: "alanturing@enigmasas.com",
      }),
    );
    await runExpectError(
      "creditNotes.sendEmail",
      factus.creditNotes.sendEmail("NC856", {
        email: "alanturing@enigmasas.com",
      }),
    );
    await runExpectError("numberingRanges.get", factus.numberingRanges.get(8));
    await runExpectError(
      "numberingRanges.create",
      factus.numberingRanges.create({
        document: "21",
        prefix: "SETP",
        resolution_number: "18760000009",
        current: 984000000,
      }),
    );
    await runExpectError(
      "numberingRanges.updateCurrent",
      factus.numberingRanges.updateCurrent(10, { current: 985000001 }),
    );
    await runExpectError(
      "numberingRanges.delete",
      factus.numberingRanges.delete(8),
    );
    await runExpectError(
      "reception.upload",
      factus.reception.upload({
        track_id:
          "79760c1d956a143a1076c9d06808b0916f90eb3eec5d34697fd875a2f4be1c3c18ae583d902671161d443c5dfbd48a4d",
      }),
    );
    await runExpectError(
      "company.update",
      factus.company.update({
        legal_organization_code: "2",
        company: null,
        names: "Alan",
        surnames: "Turing",
        responsibilities: "5",
        economic_activity: "6920",
        email: "alanturing@enigmasas.com",
        address: "calle 100 #50-80",
        trade_name: null,
        registration_code: null,
        phone: "0987654321",
        municipality_code: "68872",
        tribute_code: "ZZ",
      }),
    );
    await runExpectError(
      "company.uploadLogo",
      factus.company.uploadLogo(
        new Blob(["fake image"], { type: "image/png" }),
      ),
    );
  });

  test("unable-to-test endpoints should throw FactusError in sandbox", async () => {
    await runExpectError(
      "bills.emitRadianEvent",
      factus.bills.emitRadianEvent("SETP990000049", "030", {
        // "13" is intentionally out of the IdentityDocumentTypeId enum range to
        // exercise the API accepting non-standard codes (the API is tolerant here).
        identification_document_code: "13",
        identification: "12345667",
        first_name: "Pepito",
        last_name: "Perez",
        job_title: "Desarrollador de software",
        organization_department: "Sistemas",
      }),
    );
    const receptionEmitEventInput: EmitEventInput = {
      // "13" is intentionally out of the IdentityDocumentTypeId enum range (same rationale as above).
      identification_document_code: "13",
      identification: "12345667",
      first_name: "Pepito",
      last_name: "Perez",
    };
    await runExpectError(
      "reception.emitEvent",
      factus.reception.emitEvent(
        {
          bill_id: "SETP990000203",
          event_type: EventCode.ReceiptAcknowledgement,
        },
        receptionEmitEventInput,
      ),
    );
  });
});
