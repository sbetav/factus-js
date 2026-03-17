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

export class CreditNotesModule {
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
   * Get full detail of a credit note by its document number.
   * GET /v1/credit-notes/{number}
   */
  get(number: string): Promise<ApiResponse<ViewCreditNoteData>> {
    return this.http.get(`/v1/credit-notes/${number}`);
  }

  /**
   * Download the credit note XML as a base64-encoded string.
   * GET /v1/credit-notes/download-xml/{number}
   */
  downloadXml(number: string): Promise<DownloadCreditNoteXmlResponse> {
    return this.http.get(`/v1/credit-notes/download-xml/${number}`);
  }

  /**
   * Download the credit note PDF as a base64-encoded string.
   * GET /v1/credit-notes/download-pdf/{number}
   */
  downloadPdf(number: string): Promise<DownloadCreditNotePdfResponse> {
    return this.http.get(`/v1/credit-notes/download-pdf/${number}`);
  }

  /**
   * Get the email content for a credit note.
   * GET /v1/credit-notes/{number}/email-content
   */
  getEmailContent(number: string): Promise<GetCreditNoteEmailContentResponse> {
    return this.http.get(`/v1/credit-notes/${number}/email-content`);
  }

  /**
   * Send the credit note by email (max 2 per document per day).
   * POST /v1/credit-notes/send-email/{number}
   */
  sendEmail(
    number: string,
    input: SendCreditNoteEmailInput,
  ): Promise<SendCreditNoteEmailResponse> {
    return this.http.post(`/v1/credit-notes/send-email/${number}`, input);
  }

  /**
   * Delete (void) a credit note that has not yet been validated by the DIAN.
   * DELETE /v1/credit-notes/reference/{reference_code}
   */
  delete(referenceCode: string): Promise<DeleteCreditNoteResponse> {
    return this.http.delete(`/v1/credit-notes/reference/${referenceCode}`);
  }
}
