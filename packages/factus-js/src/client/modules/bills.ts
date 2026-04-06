import type {
    ApiResponse,
    CreateInvoiceInput,
    DeleteInvoiceResponse,
    DownloadInvoicePdfResponse,
    DownloadInvoiceXmlResponse,
    EventCode,
    GetInvoiceEmailContentResponse,
    GetInvoiceEventsResponse,
    GetInvoicesResponse,
    InvoiceFilters,
    InvoiceListItem,
    ListParams,
    RadianEventUpdateInput,
    RadianEventUpdateResponse,
    SendInvoiceEmailInput,
    SendInvoiceEmailResponse,
    ViewInvoiceResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class BillsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new electronic sales invoice.
   * POST /v1/bills/validate
   */
  create(
    input: CreateInvoiceInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<InvoiceListItem>> {
    return this.http.post("/v1/bills/validate", input, options?.signal);
  }

  /**
   * List invoices with optional filters and pagination.
   * GET /v1/bills
   */
  list(
    params?: ListParams<InvoiceFilters>,
    options?: RequestOptions,
  ): Promise<GetInvoicesResponse> {
    return this.http.get(
      "/v1/bills",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all invoices automatically across pages, yielding one item
   * at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: InvoiceFilters,
    options?: RequestOptions,
  ): AsyncIterable<InvoiceListItem> {
    let page = 1;
    while (true) {
      const response = await this.list(
        { filter, page, per_page: 100 },
        options,
      );
      for (const item of response.data.data) yield item;
      if (page >= response.data.pagination.last_page) break;
      page++;
    }
  }

  /**
   * Get full detail of a single invoice by its document number (e.g. "SETP990000001").
   * GET /v1/bills/show/{number}
   */
  get(number: string, options?: RequestOptions): Promise<ViewInvoiceResponse> {
    return this.http.get(
      `/v1/bills/show/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the invoice XML as a base64-encoded string.
   * GET /v1/bills/download-xml/{number}
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadInvoiceXmlResponse> {
    return this.http.get(
      `/v1/bills/download-xml/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the invoice PDF as a base64-encoded string.
   * GET /v1/bills/download-pdf/{number}
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadInvoicePdfResponse> {
    return this.http.get(
      `/v1/bills/download-pdf/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Get the email content (subject + attached document) for an invoice.
   * GET /v1/bills/{number}/email-content
   */
  getEmailContent(
    number: string,
    options?: RequestOptions,
  ): Promise<GetInvoiceEmailContentResponse> {
    return this.http.get(
      `/v1/bills/${number}/email-content`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Send the invoice by email (max 2 per invoice per day).
   * POST /v1/bills/send-email/{number}
   */
  sendEmail(
    number: string,
    input: SendInvoiceEmailInput,
    options?: RequestOptions,
  ): Promise<SendInvoiceEmailResponse> {
    return this.http.post(
      `/v1/bills/send-email/${number}`,
      input,
      options?.signal,
    );
  }

  /**
   * Emit a RADIAN event on an invoice by document number and event type.
   * POST /v1/bills/radian/events/update/{number}/{event_type}
   */
  emitRadianEvent(
    number: string,
    eventType: EventCode,
    input: RadianEventUpdateInput,
    options?: RequestOptions,
  ): Promise<RadianEventUpdateResponse> {
    return this.http.post(
      `/v1/bills/radian/events/update/${number}/${eventType}`,
      input,
      options?.signal,
    );
  }

  /**
   * Get the list of RADIAN events recorded for an invoice by its document number.
   * GET /v1/bills/{number}/radian/events
   */
  getEvents(
    number: string,
    options?: RequestOptions,
  ): Promise<GetInvoiceEventsResponse> {
    return this.http.get(
      `/v1/bills/${number}/radian/events`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete (void) an invoice that has not yet been validated by the DIAN.
   * DELETE /v1/bills/destroy/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteInvoiceResponse> {
    return this.http.delete(
      `/v1/bills/destroy/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
