import { FactusClient } from "../../index";
import { FactusError } from "../../client/error";
import {
  readSandboxEnv,
  shouldRunSandboxTests,
  uniqueRef,
} from "../helpers/sandbox-env";

// ---------------------------------------------------------------------------
// Result collector — accumulates per-method outcomes and prints a summary
// ---------------------------------------------------------------------------

type MethodResult =
  | { status: "ok" }
  | { status: "expected-error"; error: FactusError }
  | { status: "unexpected-error"; error: unknown };

const results = new Map<string, MethodResult>();

function formatError(error: unknown): string {
  if (error instanceof FactusError) {
    if (error.errors.length > 0) {
      return `${error.statusCode} — ${JSON.stringify(error.errors, null, 2)}`;
    }
    return `${error.statusCode} — ${error.message}`;
  }
  return String(error);
}

function printResults(): void {
  const maxName = Math.max(...[...results.keys()].map((k) => k.length));

  for (const [name, result] of results) {
    const padded = name.padEnd(maxName);
    switch (result.status) {
      case "ok":
        console.log(`  OK    ${padded}`);
        break;
      case "expected-error":
        console.log(`  WARN  ${padded}  ${formatError(result.error)}`);
        break;
      case "unexpected-error":
        console.log(`  FAIL  ${padded}  ${formatError(result.error)}`);
        break;
    }
  }
}

// ---------------------------------------------------------------------------
// Test helpers
// ---------------------------------------------------------------------------

async function run(name: string, call: Promise<unknown>): Promise<void> {
  try {
    const result = await call;
    expect(result).not.toBeUndefined();
    results.set(name, { status: "ok" });
  } catch (error) {
    results.set(name, { status: "unexpected-error", error });
    throw error;
  }
}

async function runAllowConflict(
  name: string,
  call: Promise<unknown>,
  allowedStatusCodes: number[] = [409],
): Promise<void> {
  try {
    const result = await call;
    expect(result).not.toBeUndefined();
    results.set(name, { status: "ok" });
  } catch (error) {
    if (
      error instanceof FactusError &&
      allowedStatusCodes.includes(error.statusCode)
    ) {
      results.set(name, { status: "expected-error", error });
      return;
    }
    results.set(name, { status: "unexpected-error", error });
    throw error;
  }
}

async function runExpectError(
  name: string,
  call: Promise<unknown>,
  allowedStatusCodes: number[] = [400, 401, 403, 404, 405, 409, 422, 429, 500],
): Promise<void> {
  try {
    await call;
    const error = new Error("Expected FactusError but promise resolved");
    results.set(name, { status: "unexpected-error", error });
    throw error;
  } catch (error) {
    if (error instanceof FactusError) {
      expect(allowedStatusCodes).toContain(error.statusCode);
      results.set(name, { status: "expected-error", error });
      return;
    }
    throw error;
  }
}

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
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
          legal_organization_id: 2,
          tribute_id: 21,
          identification_document_id: 6,
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
            standard_code_id: 1,
            is_excluded: 0,
            tribute_id: 1,
          },
        ],
      }),
      [409, 422],
    );

    await run("bills.list", factus.bills.list({ page: 1, per_page: 5 }));
    await run("bills.getByNumber", factus.bills.getByNumber("SETP990000203"));
    await run(
      "bills.getEmailContent",
      factus.bills.getEmailContent("SETP990000203"),
    );
    await run("bills.downloadPdf", factus.bills.downloadPdf("SETP990000203"));
    await run("bills.downloadXml", factus.bills.downloadXml("SETP990000203"));
    await run("bills.getEvents", factus.bills.getEvents("SETP990000203"));

    await runAllowConflict(
      "creditNotes.create",
      factus.creditNotes.create({
        numbering_range_id: 9,
        correction_concept_code: 2,
        customization_id: 20,
        bill_id: 514,
        reference_code: uniqueRef("CN"),
        payment_method_code: "10",
        customer: {
          identification: "123456789",
          dv: "3",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
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
            standard_code_id: 1,
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

    await runAllowConflict(
      "supportDocuments.create",
      factus.supportDocuments.create({
        reference_code: supportReference,
        numbering_range_id: 148,
        payment_method_code: "10",
        provider: {
          identification_document_id: 6,
          identification: "123456789",
          dv: 6,
          trade_name: "",
          names: "Alan Turing",
          address: "calle 1 # 2-68",
          email: "alanturing@enigmasas.com",
          phone: "1234567890",
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
            standard_code_id: 1,
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
            standard_code_id: 1,
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

    await run(
      "catalog.getAcquirer",
      factus.catalog.getAcquirer({
        identification_document_id: 3,
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
    await runExpectError("bills.delete", factus.bills.delete("SETP990000049"));
    await runExpectError(
      "bills.emitRadianEvent",
      factus.bills.emitRadianEvent("SETP990000049", "030", {
        identification_document_code: 13,
        identification: "12345667",
        first_name: "Pepito",
        last_name: "Perez",
        job_title: "Desarollador de software",
        organization_department: "Sistemas",
      }),
    );
    await runExpectError(
      "creditNotes.delete",
      factus.creditNotes.delete("NC856"),
    );
    await runExpectError(
      "supportDocuments.delete",
      factus.supportDocuments.delete("SEDS984000021"),
    );
    await runExpectError(
      "adjustmentNotes.delete",
      factus.adjustmentNotes.delete("NDS3"),
    );
    await runExpectError(
      "reception.emitEvent",
      factus.reception.emitEvent(
        {
          bill_id: "SETP990000203",
          event_type: "030",
        },
        {
          identification_document_code: 13,
          identification: "12345667",
          first_name: "Pepito",
          last_name: "Perez",
        },
      ),
    );
  });
});
