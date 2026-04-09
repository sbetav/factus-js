import type {
  ApiResponse,
  BillFilters,
  BillListItem,
  CreateBillInput,
  DeleteBillResponse,
  DownloadBillPdfResponse,
  DownloadBillXmlResponse,
  EventCode,
  GetBillEmailContentResponse,
  GetBillEventsResponse,
  GetBillsResponse,
  ListParams,
  RadianEventUpdateInput,
  RadianEventUpdateResponse,
  SendBillEmailInput,
  SendBillEmailResponse,
  ViewBillResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class BillsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new electronic sales bill.
   * POST /v1/bills/validate
   */
  create(
    input: CreateBillInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<BillListItem>> {
    return this.http.post("/v1/bills/validate", input, options?.signal);
  }

  /**
   * List bills with optional filters and pagination.
   * GET /v1/bills
   */
  list(
    params?: ListParams<BillFilters>,
    options?: RequestOptions,
  ): Promise<GetBillsResponse> {
    return this.http.get(
      "/v1/bills",
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
   * GET /v1/bills/show/{number}
   */
  get(number: string, options?: RequestOptions): Promise<ViewBillResponse> {
    return this.http.get(
      `/v1/bills/show/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the bill XML as a base64-encoded string.
   * GET /v1/bills/download-xml/{number}
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadBillXmlResponse> {
    return this.http.get(
      `/v1/bills/download-xml/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the bill PDF as a base64-encoded string.
   * GET /v1/bills/download-pdf/{number}
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadBillPdfResponse> {
    return this.http.get(
      `/v1/bills/download-pdf/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Get the email content (subject + attached document) for a bill.
   * GET /v1/bills/{number}/email-content
   */
  getEmailContent(
    number: string,
    options?: RequestOptions,
  ): Promise<GetBillEmailContentResponse> {
    return this.http.get(
      `/v1/bills/${number}/email-content`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Send the bill by email (max 2 per bill per day).
   * POST /v1/bills/send-email/{number}
   */
  sendEmail(
    number: string,
    input: SendBillEmailInput,
    options?: RequestOptions,
  ): Promise<SendBillEmailResponse> {
    return this.http.post(
      `/v1/bills/send-email/${number}`,
      input,
      options?.signal,
    );
  }

  /**
   * Emit a RADIAN event on a bill by document number and event type.
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
   * Get the list of RADIAN events recorded for a bill by its document number.
   * GET /v1/bills/{number}/radian/events
   */
  getEvents(
    number: string,
    options?: RequestOptions,
  ): Promise<GetBillEventsResponse> {
    return this.http.get(
      `/v1/bills/${number}/radian/events`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete (void) a bill that has not yet been validated by the DIAN.
   * DELETE /v1/bills/destroy/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteBillResponse> {
    return this.http.delete(
      `/v1/bills/destroy/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
