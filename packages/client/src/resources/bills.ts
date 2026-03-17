import type {
  CreateBillInput,
  BillListItem,
  BillFilters,
  GetBillsResponse,
  ViewBillResponse,
  SendBillEmailInput,
  SendBillEmailResponse,
  RadianEventUpdateInput,
  RadianEventUpdateResponse,
  GetBillEventsResponse,
  DeleteBillResponse,
  DownloadBillXmlResponse,
  DownloadBillPdfResponse,
  GetBillEmailContentResponse,
  ApiResponse,
} from "@factus-js/types";
import type { HttpClient } from "../http-client";

export class BillsResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new electronic sales invoice.
   * POST /v1/bills/validate
   */
  create(input: CreateBillInput): Promise<ApiResponse<BillListItem>> {
    return this.http.post("/v1/bills/validate", input);
  }

  /**
   * List invoices with optional filters and pagination.
   * GET /v1/bills
   */
  list(
    filters?: BillFilters & { page?: number; per_page?: number },
  ): Promise<GetBillsResponse> {
    return this.http.get(
      "/v1/bills",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  /**
   * Get full detail of a single invoice by its numeric ID.
   * GET /v1/bills/{id}
   */
  get(id: number): Promise<ViewBillResponse> {
    return this.http.get(`/v1/bills/${id}`);
  }

  /**
   * Get full detail of a single invoice by its document number (e.g. "SETP990000001").
   * GET /v1/bills/show/{number}
   */
  getByNumber(number: string): Promise<ViewBillResponse> {
    return this.http.get(`/v1/bills/show/${number}`);
  }

  /**
   * Download the invoice XML as a base64-encoded string.
   * GET /v1/bills/download-xml/{id}
   */
  downloadXml(id: number): Promise<DownloadBillXmlResponse> {
    return this.http.get(`/v1/bills/download-xml/${id}`);
  }

  /**
   * Download the invoice PDF as a base64-encoded string.
   * GET /v1/bills/download-pdf/{id}
   */
  downloadPdf(id: number): Promise<DownloadBillPdfResponse> {
    return this.http.get(`/v1/bills/download-pdf/${id}`);
  }

  /**
   * Get the email content (subject + attached document) for an invoice.
   * GET /v1/bills/email-content/{id}
   */
  getEmailContent(id: number): Promise<GetBillEmailContentResponse> {
    return this.http.get(`/v1/bills/email-content/${id}`);
  }

  /**
   * Send the invoice by email (max 2 per invoice per day).
   * POST /v1/bills/send-email/{number}
   */
  sendEmail(
    number: string,
    input: SendBillEmailInput,
  ): Promise<SendBillEmailResponse> {
    return this.http.post(`/v1/bills/send-email/${number}`, input);
  }

  /**
   * Update the RADIAN responsible person data on an invoice.
   * PUT /v1/bills/radian/{id}
   */
  updateRadianEvent(
    id: number,
    input: RadianEventUpdateInput,
  ): Promise<RadianEventUpdateResponse> {
    return this.http.put(`/v1/bills/radian/${id}`, input);
  }

  /**
   * Get the list of RADIAN events recorded for an invoice by its document number.
   * GET /v1/bills/{number}/radian/events
   */
  getEvents(number: string): Promise<GetBillEventsResponse> {
    return this.http.get(`/v1/bills/${number}/radian/events`);
  }

  /**
   * Delete (void) an invoice that has not yet been validated by the DIAN.
   * DELETE /v1/bills/destroy/reference/{reference_code}
   */
  delete(referenceCode: string): Promise<DeleteBillResponse> {
    return this.http.delete(`/v1/bills/destroy/reference/${referenceCode}`);
  }
}
