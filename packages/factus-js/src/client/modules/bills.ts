import type {
  CreateInvoiceInput,
  InvoiceListItem,
  InvoiceFilters,
  ListParams,
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
  EventCode,
} from "../../types";
import type { HttpClient } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class BillsModule {
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
  list(params?: ListParams<InvoiceFilters>): Promise<GetInvoicesResponse> {
    return this.http.get("/v1/bills", buildListQueryParams(params));
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
   * GET /v1/bills/download-xml/{number}
   */
  downloadXml(number: string): Promise<DownloadInvoiceXmlResponse> {
    return this.http.get(`/v1/bills/download-xml/${number}`);
  }

  /**
   * Download the invoice PDF as a base64-encoded string.
   * GET /v1/bills/download-pdf/{number}
   */
  downloadPdf(number: string): Promise<DownloadInvoicePdfResponse> {
    return this.http.get(`/v1/bills/download-pdf/${number}`);
  }

  /**
   * Get the email content (subject + attached document) for an invoice.
   * GET /v1/bills/{number}/email-content
   */
  getEmailContent(number: string): Promise<GetInvoiceEmailContentResponse> {
    return this.http.get(`/v1/bills/${number}/email-content`);
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
   * Emit a RADIAN event on an invoice by document number and event type.
   * POST /v1/bills/radian/events/update/{number}/{event_type}
   */
  emitRadianEvent(
    number: string,
    eventType: EventCode,
    input: RadianEventUpdateInput,
  ): Promise<RadianEventUpdateResponse> {
    return this.http.post(
      `/v1/bills/radian/events/update/${number}/${eventType}`,
      input,
    );
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
