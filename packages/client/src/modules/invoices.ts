import type {
  CreateInvoiceInput,
  InvoiceListItem,
  InvoiceFilters,
  GetInvoicesResponse,
  ViewInvoiceResponse,
  SendInvoiceEmailInput,
  SendInvoiceEmailResponse,
  RadianEventUpdateInput,
  RadianEventUpdateResponse,
  GetInvoiceEventsResponse,
  DeleteInvoiceResponse,
  DownloadInvoiceXmlResponse,
  DownloadInvoicePdfResponse,
  GetInvoiceEmailContentResponse,
  ApiResponse,
} from "@factus-js/types";
import type { HttpClient } from "../http-client";

export class InvoicesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new electronic sales invoice.
   * POST /v1/bills/validate
   */
  create(input: CreateInvoiceInput): Promise<ApiResponse<InvoiceListItem>> {
    return this.http.post("/v1/bills/validate", input);
  }

  /**
   * List invoices with optional filters and pagination.
   * GET /v1/bills
   */
  list(
    filters?: InvoiceFilters & { page?: number; per_page?: number },
  ): Promise<GetInvoicesResponse> {
    return this.http.get(
      "/v1/bills",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  /**
   * Get full detail of a single invoice by its numeric ID.
   * GET /v1/bills/{id}
   */
  get(id: number): Promise<ViewInvoiceResponse> {
    return this.http.get(`/v1/bills/${id}`);
  }

  /**
   * Get full detail of a single invoice by its document number (e.g. "SETP990000001").
   * GET /v1/bills/show/{number}
   */
  getByNumber(number: string): Promise<ViewInvoiceResponse> {
    return this.http.get(`/v1/bills/show/${number}`);
  }

  /**
   * Download the invoice XML as a base64-encoded string.
   * GET /v1/bills/download-xml/{id}
   */
  downloadXml(id: number): Promise<DownloadInvoiceXmlResponse> {
    return this.http.get(`/v1/bills/download-xml/${id}`);
  }

  /**
   * Download the invoice PDF as a base64-encoded string.
   * GET /v1/bills/download-pdf/{id}
   */
  downloadPdf(id: number): Promise<DownloadInvoicePdfResponse> {
    return this.http.get(`/v1/bills/download-pdf/${id}`);
  }

  /**
   * Get the email content (subject + attached document) for an invoice.
   * GET /v1/bills/email-content/{id}
   */
  getEmailContent(id: number): Promise<GetInvoiceEmailContentResponse> {
    return this.http.get(`/v1/bills/email-content/${id}`);
  }

  /**
   * Send the invoice by email (max 2 per invoice per day).
   * POST /v1/bills/send-email/{number}
   */
  sendEmail(
    number: string,
    input: SendInvoiceEmailInput,
  ): Promise<SendInvoiceEmailResponse> {
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
  getEvents(number: string): Promise<GetInvoiceEventsResponse> {
    return this.http.get(`/v1/bills/${number}/radian/events`);
  }

  /**
   * Delete (void) an invoice that has not yet been validated by the DIAN.
   * DELETE /v1/bills/destroy/reference/{reference_code}
   */
  delete(referenceCode: string): Promise<DeleteInvoiceResponse> {
    return this.http.delete(`/v1/bills/destroy/reference/${referenceCode}`);
  }
}
