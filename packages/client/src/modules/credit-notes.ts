import type {
  CreateCreditNoteInput,
  CreditNoteListItem,
  CreditNoteFilters,
  ViewCreditNoteData,
  GetCreditNotesResponse,
  SendCreditNoteEmailInput,
  SendCreditNoteEmailResponse,
  DeleteCreditNoteResponse,
  DownloadCreditNoteXmlResponse,
  DownloadCreditNotePdfResponse,
  GetCreditNoteEmailContentResponse,
  ApiResponse,
} from "@factus-js/types";
import type { HttpClient } from "../http-client";

export class CreditNotesResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new credit note.
   * POST /v1/credit-notes/validate
   */
  create(
    input: CreateCreditNoteInput,
  ): Promise<ApiResponse<CreditNoteListItem>> {
    return this.http.post("/v1/credit-notes/validate", input);
  }

  /**
   * List credit notes with optional filters and pagination.
   * GET /v1/credit-notes
   */
  list(
    filters?: CreditNoteFilters & { page?: number; per_page?: number },
  ): Promise<GetCreditNotesResponse> {
    return this.http.get(
      "/v1/credit-notes",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  /**
   * Get full detail of a credit note by its numeric ID.
   * GET /v1/credit-notes/{id}
   */
  get(id: number): Promise<ApiResponse<ViewCreditNoteData>> {
    return this.http.get(`/v1/credit-notes/${id}`);
  }

  /**
   * Get full detail of a credit note by its document number.
   * GET /v1/credit-notes/show/{number}
   */
  getByNumber(number: string): Promise<ApiResponse<ViewCreditNoteData>> {
    return this.http.get(`/v1/credit-notes/show/${number}`);
  }

  /**
   * Download the credit note XML as a base64-encoded string.
   * GET /v1/credit-notes/download-xml/{id}
   */
  downloadXml(id: number): Promise<DownloadCreditNoteXmlResponse> {
    return this.http.get(`/v1/credit-notes/download-xml/${id}`);
  }

  /**
   * Download the credit note PDF as a base64-encoded string.
   * GET /v1/credit-notes/download-pdf/{id}
   */
  downloadPdf(id: number): Promise<DownloadCreditNotePdfResponse> {
    return this.http.get(`/v1/credit-notes/download-pdf/${id}`);
  }

  /**
   * Get the email content for a credit note.
   * GET /v1/credit-notes/email-content/{id}
   */
  getEmailContent(id: number): Promise<GetCreditNoteEmailContentResponse> {
    return this.http.get(`/v1/credit-notes/email-content/${id}`);
  }

  /**
   * Send the credit note by email (max 2 per document per day).
   * POST /v1/credit-notes/send-email/{id}
   */
  sendEmail(
    id: number,
    input: SendCreditNoteEmailInput,
  ): Promise<SendCreditNoteEmailResponse> {
    return this.http.post(`/v1/credit-notes/send-email/${id}`, input);
  }

  /**
   * Delete (void) a credit note that has not yet been validated by the DIAN.
   * DELETE /v1/credit-notes/{id}
   */
  delete(id: number): Promise<DeleteCreditNoteResponse> {
    return this.http.delete(`/v1/credit-notes/${id}`);
  }
}
