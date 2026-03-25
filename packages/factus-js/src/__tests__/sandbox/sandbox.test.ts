import { FactusClient } from "../../index";
import { expectFactusError } from "../helpers/assert-factus-error";
import {
  readSandboxEnv,
  shouldRunSandboxTests,
  uniqueRef,
} from "../helpers/sandbox-env";

const EXPECTED_PERMISSION_ERRORS = [
  "bills.sendEmail",
  "creditNotes.sendEmail",
  "numberingRanges.get",
  "numberingRanges.create",
  "numberingRanges.updateCurrent",
  "numberingRanges.delete",
  "reception.upload",
  "company.update",
  "company.uploadLogo",
];

const EXPECTED_UNABLE_TO_TEST = [
  "bills.delete",
  "bills.emitRadianEvent",
  "creditNotes.delete",
  "supportDocuments.delete",
  "adjustmentNotes.delete",
  "reception.emitEvent",
];

function printSandboxExpectations(): void {
  console.error(
    "⚠️ The following methods are expected to fail during tests in sandbox environment:",
  );
  console.error("");
  console.error("No permissions:");
  for (const method of EXPECTED_PERMISSION_ERRORS) {
    console.error(`- ${method}`);
  }
  console.error("");
  console.error("Unable to test:");
  for (const method of EXPECTED_UNABLE_TO_TEST) {
    console.error(`- ${method}`);
  }
  console.error("");
}

async function expectResolvesOrConflict(
  methodName: string,
  call: Promise<unknown>,
  allowedStatusCodes: number[] = [409],
): Promise<void> {
  try {
    const result = await call;
    expect(result).not.toBeUndefined();
  } catch (error) {
    const maybeFactus = error as { statusCode?: number; message?: string };
    if (
      maybeFactus?.statusCode &&
      allowedStatusCodes.includes(maybeFactus.statusCode)
    ) {
      console.log(
        `[sandbox] ${methodName} returned ${maybeFactus.statusCode} (${maybeFactus.message ?? "error"}); continuing because this is acceptable for sandbox variability.`,
      );
      return;
    }
    throw error;
  }
}

describe("sandbox integration", () => {
  if (!shouldRunSandboxTests()) {
    test("skipped: set RUN_SANDBOX_TESTS=true in .env.local", () => {
      console.log("Sandbox tests disabled.");
      console.log(
        "To enable, set RUN_SANDBOX_TESTS=true in packages/factus-js/.env.local",
      );
      console.log("");
      printSandboxExpectations();
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

  beforeAll(() => {
    printSandboxExpectations();
  });

  test("verified endpoints should resolve", async () => {
    await expectResolvesOrConflict(
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

    await expect(
      factus.bills.list({ page: 1, per_page: 5 }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.bills.getByNumber("SETP990000203"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.bills.getEmailContent("SETP990000203"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.bills.downloadPdf("SETP990000203"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.bills.downloadXml("SETP990000203"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.bills.getEvents("SETP990000203"),
    ).resolves.not.toBeUndefined();

    await expectResolvesOrConflict(
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

    await expect(
      factus.creditNotes.list({ page: 1, per_page: 5 }),
    ).resolves.not.toBeUndefined();
    await expect(factus.creditNotes.get("NC856")).resolves.not.toBeUndefined();
    await expect(
      factus.creditNotes.getEmailContent("NC856"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.creditNotes.downloadPdf("NC856"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.creditNotes.downloadXml("NC856"),
    ).resolves.not.toBeUndefined();

    await expectResolvesOrConflict(
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

    await expect(
      factus.supportDocuments.list({ page: 1, per_page: 5 }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.supportDocuments.get("SEDS984000021"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.supportDocuments.downloadPdf("SEDS984000021"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.supportDocuments.downloadXml("SEDS984000021"),
    ).resolves.not.toBeUndefined();

    await expectResolvesOrConflict(
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

    await expect(
      factus.adjustmentNotes.list({ page: 1, per_page: 5 }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.adjustmentNotes.get("NDS3"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.adjustmentNotes.downloadPdf("NDS3"),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.adjustmentNotes.downloadXml("NDS3"),
    ).resolves.not.toBeUndefined();

    await expect(
      factus.catalog.getAcquirer({
        identification_document_id: 3,
        identification_number: "1399991",
      }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.catalog.listMunicipalities({ filter: { name: "San Gil" } }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.catalog.listTributes({ name: "IVA" }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.catalog.listMeasurementUnits({ name: "Unidad" }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.catalog.listCountries({ filter: { name: "Colombia" } }),
    ).resolves.not.toBeUndefined();

    await expect(
      factus.numberingRanges.list({ page: 1, per_page: 5 }),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.numberingRanges.getSoftwareRange(),
    ).resolves.not.toBeUndefined();
    await expect(
      factus.reception.list({ page: 1, per_page: 5 }),
    ).resolves.not.toBeUndefined();
    await expect(factus.subscription.list()).resolves.not.toBeUndefined();
    await expect(factus.company.get()).resolves.not.toBeUndefined();
  });

  test("permission-limited endpoints should throw FactusError", async () => {
    await expectFactusError(
      factus.bills.sendEmail("SETP990000203", {
        email: "alanturing@enigmasas.com",
      }),
    );
    await expectFactusError(
      factus.creditNotes.sendEmail("NC856", {
        email: "alanturing@enigmasas.com",
      }),
    );
    await expectFactusError(factus.numberingRanges.get(8));
    await expectFactusError(
      factus.numberingRanges.create({
        document: "21",
        prefix: "SETP",
        resolution_number: "18760000009",
        current: 984000000,
      }),
    );
    await expectFactusError(
      factus.numberingRanges.updateCurrent(10, { current: 985000001 }),
    );
    await expectFactusError(factus.numberingRanges.delete(8));
    await expectFactusError(
      factus.reception.upload({
        track_id:
          "79760c1d956a143a1076c9d06808b0916f90eb3eec5d34697fd875a2f4be1c3c18ae583d902671161d443c5dfbd48a4d",
      }),
    );
    await expectFactusError(
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
    await expectFactusError(
      factus.company.uploadLogo(
        new Blob(["fake image"], { type: "image/png" }),
      ),
    );
  });

  test("unable-to-test endpoints should throw FactusError in sandbox", async () => {
    await expectFactusError(factus.bills.delete("SETP990000049"));
    await expectFactusError(
      factus.bills.emitRadianEvent("SETP990000049", "030", {
        identification_document_code: 13,
        identification: "12345667",
        first_name: "Pepito",
        last_name: "Perez",
        job_title: "Desarollador de software",
        organization_department: "Sistemas",
      }),
    );
    await expectFactusError(factus.creditNotes.delete("NC856"));
    await expectFactusError(factus.supportDocuments.delete("SEDS984000021"));
    await expectFactusError(factus.adjustmentNotes.delete("NDS3"));
    await expectFactusError(
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
