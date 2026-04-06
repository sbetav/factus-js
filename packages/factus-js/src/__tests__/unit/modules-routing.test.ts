import {
    AdjustmentNotesModule,
    BillsModule,
    CatalogModule,
    CompanyModule,
    CreditNotesModule,
    NumberingRangesModule,
    ReceptionModule,
    SubscriptionModule,
    SupportDocumentsModule,
} from "../../client";
import { createHttpSpy } from "../helpers/http-spy";

describe("module routing contract", () => {
  test("bills methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const bills = new BillsModule(spy.client as never);

    const createInput = { reference_code: "X" } as never;
    const listFilters = { filter: { number: "SETP" }, page: 1, per_page: 10 };
    const listQuery = { "filter[number]": "SETP", page: 1, per_page: 10 };
    const sendInput = { email: "x@y.com" } as never;
    const eventInput = { identification: "123" } as never;

    await bills.create(createInput);
    await bills.list(listFilters);
    await bills.get("SETP990000203");
    await bills.downloadXml("SETP990000203");
    await bills.downloadPdf("SETP990000203");
    await bills.getEmailContent("SETP990000203");
    await bills.sendEmail("SETP990000203", sendInput);
    await bills.emitRadianEvent("SETP990000049", "030" as never, eventInput);
    await bills.getEvents("SETP990000203");
    await bills.delete("SETP990000049");

    expect(spy.calls).toEqual([
      { method: "post", path: "/v1/bills/validate", payload: createInput },
      { method: "get", path: "/v1/bills", payload: listQuery },
      {
        method: "get",
        path: "/v1/bills/show/SETP990000203",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/bills/download-xml/SETP990000203",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/bills/download-pdf/SETP990000203",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/bills/SETP990000203/email-content",
        payload: undefined,
      },
      {
        method: "post",
        path: "/v1/bills/send-email/SETP990000203",
        payload: sendInput,
      },
      {
        method: "post",
        path: "/v1/bills/radian/events/update/SETP990000049/030",
        payload: eventInput,
      },
      {
        method: "get",
        path: "/v1/bills/SETP990000203/radian/events",
        payload: undefined,
      },
      {
        method: "delete",
        path: "/v1/bills/destroy/reference/SETP990000049",
      },
    ]);
  });

  test("credit notes methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const creditNotes = new CreditNotesModule(spy.client as never);

    const createInput = { reference_code: "X" } as never;
    const listFilters = { filter: { status: "1" }, page: 1, per_page: 10 };
    const listQuery = { "filter[status]": "1", page: 1, per_page: 10 };
    const sendInput = { email: "x@y.com" } as never;

    await creditNotes.create(createInput);
    await creditNotes.list(listFilters);
    await creditNotes.get("NC856");
    await creditNotes.downloadXml("NC856");
    await creditNotes.downloadPdf("NC856");
    await creditNotes.getEmailContent("NC856");
    await creditNotes.sendEmail("NC856", sendInput);
    await creditNotes.delete("NC856");

    expect(spy.calls).toEqual([
      {
        method: "post",
        path: "/v1/credit-notes/validate",
        payload: createInput,
      },
      { method: "get", path: "/v1/credit-notes", payload: listQuery },
      { method: "get", path: "/v1/credit-notes/NC856", payload: undefined },
      {
        method: "get",
        path: "/v1/credit-notes/download-xml/NC856",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/credit-notes/download-pdf/NC856",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/credit-notes/NC856/email-content",
        payload: undefined,
      },
      {
        method: "post",
        path: "/v1/credit-notes/send-email/NC856",
        payload: sendInput,
      },
      { method: "delete", path: "/v1/credit-notes/reference/NC856" },
    ]);
  });

  test("support documents methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const supportDocuments = new SupportDocumentsModule(spy.client as never);

    const createInput = { reference_code: "REF" } as never;
    const listFilters = { filter: { status: "1" }, page: 1, per_page: 10 };
    const listQuery = { "filter[status]": "1", page: 1, per_page: 10 };

    await supportDocuments.create(createInput);
    await supportDocuments.list(listFilters);
    await supportDocuments.get("SEDS984000021");
    await supportDocuments.downloadXml("SEDS984000021");
    await supportDocuments.downloadPdf("SEDS984000021");
    await supportDocuments.delete("SEDS984000021");

    expect(spy.calls).toEqual([
      {
        method: "post",
        path: "/v1/support-documents/validate",
        payload: createInput,
      },
      { method: "get", path: "/v1/support-documents", payload: listQuery },
      {
        method: "get",
        path: "/v1/support-documents/show/SEDS984000021",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/support-documents/download-xml/SEDS984000021",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/support-documents/download-pdf/SEDS984000021",
        payload: undefined,
      },
      {
        method: "delete",
        path: "/v1/support-documents/reference/SEDS984000021",
      },
    ]);
  });

  test("adjustment notes methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const adjustmentNotes = new AdjustmentNotesModule(spy.client as never);

    const createInput = { reference_code: "REF" } as never;
    const listFilters = { filter: { status: "1" }, page: 1, per_page: 10 };
    const listQuery = { "filter[status]": "1", page: 1, per_page: 10 };

    await adjustmentNotes.create(createInput);
    await adjustmentNotes.list(listFilters);
    await adjustmentNotes.get("NDS3");
    await adjustmentNotes.downloadXml("NDS3");
    await adjustmentNotes.downloadPdf("NDS3");
    await adjustmentNotes.delete("NDS3");

    expect(spy.calls).toEqual([
      {
        method: "post",
        path: "/v1/adjustment-notes/validate",
        payload: createInput,
      },
      { method: "get", path: "/v1/adjustment-notes", payload: listQuery },
      { method: "get", path: "/v1/adjustment-notes/NDS3", payload: undefined },
      {
        method: "get",
        path: "/v1/adjustment-notes/download-xml/NDS3",
        payload: undefined,
      },
      {
        method: "get",
        path: "/v1/adjustment-notes/download-pdf/NDS3",
        payload: undefined,
      },
      { method: "delete", path: "/v1/adjustment-notes/reference/NDS3" },
    ]);
  });

  test("reception methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const reception = new ReceptionModule(spy.client as never);

    const listFilters = {
      filter: { completed_events: "0" },
      page: 1,
      per_page: 10,
    };
    const listQuery = {
      "filter[completed_events]": "0",
      page: 1,
      per_page: 10,
    };
    const uploadInput = { track_id: "x" } as never;
    const eventInput = { identification: "12345667" } as never;

    await reception.list(listFilters);
    await reception.upload(uploadInput);
    await reception.emitEvent(
      { bill_id: "SETP990000203", event_type: "030" as never },
      eventInput,
    );

    expect(spy.calls).toEqual([
      { method: "get", path: "/v1/receptions/bills", payload: listQuery },
      { method: "post", path: "/v1/receptions/upload", payload: uploadInput },
      {
        method: "patch",
        path: "/v1/receptions/bills/SETP990000203/radian/events/030",
        payload: eventInput,
      },
    ]);
  });

  test("numbering ranges methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const numberingRanges = new NumberingRangesModule(spy.client as never);

    const listFilters = { filter: { is_active: "1" }, page: 1, per_page: 10 };
    const listQuery = { "filter[is_active]": "1", page: 1, per_page: 10 };
    const createInput = { prefix: "SETP" } as never;
    const updateInput = { current: 985000001 } as never;

    await numberingRanges.list(listFilters);
    await numberingRanges.get(8);
    await numberingRanges.create(createInput);
    await numberingRanges.updateCurrent(10, updateInput);
    await numberingRanges.getSoftwareRange();
    await numberingRanges.delete(8);

    expect(spy.calls).toEqual([
      { method: "get", path: "/v1/numbering-ranges", payload: listQuery },
      { method: "get", path: "/v1/numbering-ranges/8", payload: undefined },
      { method: "post", path: "/v1/numbering-ranges", payload: createInput },
      {
        method: "patch",
        path: "/v1/numbering-ranges/10/current",
        payload: updateInput,
      },
      { method: "get", path: "/v1/numbering-ranges/dian", payload: undefined },
      { method: "delete", path: "/v1/numbering-ranges/8" },
    ]);
  });

  test("company methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const company = new CompanyModule(spy.client as never);
    const updateInput = { names: "Alan" } as never;
    const imageBlob = new Blob(["binary"], { type: "image/png" });

    await company.get();
    await company.update(updateInput);
    await company.uploadLogo(imageBlob);

    expect(spy.calls[0]).toEqual({
      method: "get",
      path: "/v1/company",
      payload: undefined,
    });
    expect(spy.calls[1]).toEqual({
      method: "put",
      path: "/v1/company",
      payload: updateInput,
    });
    expect(spy.calls[2].method).toBe("postForm");
    expect(spy.calls[2].path).toBe("/v1/company/logo");
    expect(spy.calls[2].payload).toBeInstanceOf(FormData);
  });

  test("catalog and subscription methods map to expected routes and verbs", async () => {
    const spy = createHttpSpy();
    const catalog = new CatalogModule(spy.client as never);
    const subscription = new SubscriptionModule(spy.client as never);

    const municipalityFilters = { filter: { name: "San Gil" } };
    const municipalityQuery = { "filter[name]": "San Gil" };
    const countryFilters = { filter: { name: "Colombia" } };
    const countryQuery = { "filter[name]": "Colombia" };
    const tributeFilters = { name: "IVA" };
    const unitFilters = { name: "Unidad" };
    const acquirerFilters = {
      identification_document_id: "3",
      identification_number: "1399991",
    };

    await catalog.listMunicipalities(municipalityFilters);
    await catalog.listCountries(countryFilters);
    await catalog.listTributes(tributeFilters);
    await catalog.listMeasurementUnits(unitFilters);
    await catalog.getAcquirer(acquirerFilters as never);
    await subscription.list();

    expect(spy.calls).toEqual([
      {
        method: "get",
        path: "/v1/municipalities",
        payload: municipalityQuery,
      },
      { method: "get", path: "/v1/countries", payload: countryQuery },
      { method: "get", path: "/v1/tributes/products", payload: tributeFilters },
      { method: "get", path: "/v1/measurement-units", payload: unitFilters },
      { method: "get", path: "/v1/dian/acquirer", payload: acquirerFilters },
      { method: "get", path: "/v1/subscriptions", payload: undefined },
    ]);
  });
});
