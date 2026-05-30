import type {
  CreateBillInput,
  CreateBillResponse,
  DeleteBillResponse,
  DownloadBillAttachedDocumentXmlResponse,
  DownloadBillPdfResponse,
  DownloadBillXmlResponse,
  GetBillEmailContentResponse,
  GetBillEventsResponse,
  GetBillsResponse,
  ListParams,
  RadianEventUpdateInput,
  RadianEventUpdateResponse,
  SendBillEmailInput,
  SendBillEmailResponse,
  ViewBillResponse,
  BillFilters,
  BillListItem,
  EventCode,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class BillsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new electronic sales bill.
   * POST /v2/bills/validate
   */
  create(
    input: CreateBillInput,
    options?: RequestOptions,
  ): Promise<CreateBillResponse> {
    return this.http.post("/v2/bills/validate", input, options?.signal);
  }

  /**
   * List bills with optional filters and pagination.
   * GET /v2/bills
   */
  list(
    params?: ListParams<BillFilters>,
    options?: RequestOptions,
  ): Promise<GetBillsResponse> {
    return this.http.get(
      "/v2/bills",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all bills automatically across pages, yielding one item
   * at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: BillFilters,
    options?: RequestOptions,
  ): AsyncIterable<BillListItem> {
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
   * Get full detail of a single bill by its document number (e.g. "SETP990000001").
   * GET /v2/bills/{number}
   */
  get(number: string, options?: RequestOptions): Promise<ViewBillResponse> {
    return this.http.get(`/v2/bills/${number}`, undefined, options?.signal);
  }

  /**
   * Download the bill XML as a base64-encoded string.
   * GET /v2/bills/{number}/download-xml
   */

  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadBillXmlResponse> {
    return this.http.get(
      `/v2/bills/${number}/download-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the bill AttachedDocument XML as a base64-encoded string.
   * GET /v2/bills/{number}/download-attached-document-xml
   */
  downloadAttachedDocumentXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadBillAttachedDocumentXmlResponse> {
    return this.http.get(
      `/v2/bills/${number}/download-attached-document-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the bill PDF as a base64-encoded string.
   * GET /v2/bills/{number}/download-pdf
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadBillPdfResponse> {
    return this.http.get(
      `/v2/bills/${number}/download-pdf`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Get the email content (subject + attached document) for a bill.
   * GET /v2/bills/{number}/email-content
   */
  getEmailContent(
    number: string,
    options?: RequestOptions,
  ): Promise<GetBillEmailContentResponse> {
    return this.http.get(
      `/v2/bills/${number}/email-content`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Send the bill by email (max 2 per bill per day).
   * POST /v2/bills/{number}/send-email
   */
  sendEmail(
    number: string,
    input: SendBillEmailInput,
    options?: RequestOptions,
  ): Promise<SendBillEmailResponse> {
    return this.http.post(
      `/v2/bills/${number}/send-email`,
      input,
      options?.signal,
    );
  }

  /**
   * Emit a RADIAN event on a bill by document number and event type.
   * POST /v2/bills/{number}/radian/events/{event_type}
   */
  emitRadianEvent(
    number: string,
    eventType: EventCode,
    input: RadianEventUpdateInput,
    options?: RequestOptions,
  ): Promise<RadianEventUpdateResponse> {
    return this.http.post(
      `/v2/bills/${number}/radian/events/${eventType}`,
      input,
      options?.signal,
    );
  }

  /**
   * Get the list of RADIAN events recorded for a bill by its document number.
   * GET /v2/bills/{number}/radian/events
   */
  getEvents(
    number: string,
    options?: RequestOptions,
  ): Promise<GetBillEventsResponse> {
    return this.http.get(
      `/v2/bills/${number}/radian/events`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete (void) a bill that has not yet been validated by the DIAN.
   * DELETE /v2/bills/destroy/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteBillResponse> {
    return this.http.delete(
      `/v2/bills/destroy/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
