import type {
  CreateCreditNoteInput,
  CreateCreditNoteResponse,
  CreditNoteFilters,
  CreditNoteListItem,
  DeleteCreditNoteResponse,
  DownloadCreditNoteAttachedDocumentXmlResponse,
  DownloadCreditNotePdfResponse,
  DownloadCreditNoteXmlResponse,
  GetCreditNoteEmailContentResponse,
  GetCreditNotesResponse,
  ListParams,
  SendCreditNoteEmailInput,
  SendCreditNoteEmailResponse,
  ViewCreditNoteResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class CreditNotesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new credit note.
   * POST /v2/credit-notes/validate
   */
  create(
    input: CreateCreditNoteInput,
    options?: RequestOptions,
  ): Promise<CreateCreditNoteResponse> {
    return this.http.post("/v2/credit-notes/validate", input, options?.signal);
  }

  /**
   * List credit notes with optional filters and pagination.
   * GET /v2/credit-notes
   */
  list(
    params?: ListParams<CreditNoteFilters>,
    options?: RequestOptions,
  ): Promise<GetCreditNotesResponse> {
    return this.http.get(
      "/v2/credit-notes",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all credit notes automatically across pages, yielding one
   * item at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: CreditNoteFilters,
    options?: RequestOptions,
  ): AsyncIterable<CreditNoteListItem> {
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
   * Get full detail of a credit note by its document number.
   * GET /v2/credit-notes/{number}
   */ get(
    number: string,
    options?: RequestOptions,
  ): Promise<ViewCreditNoteResponse> {
    return this.http.get(
      `/v2/credit-notes/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the credit note XML as a base64-encoded string.
   * GET /v2/credit-notes/{number}/download-xml
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadCreditNoteXmlResponse> {
    return this.http.get(
      `/v2/credit-notes/${number}/download-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the credit note AttachedDocument XML as a base64-encoded string,
   * including the associated file name.
   * GET /v2/credit-notes/{number}/download-attached-document-xml
   */
  downloadAttachedDocumentXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadCreditNoteAttachedDocumentXmlResponse> {
    return this.http.get(
      `/v2/credit-notes/${number}/download-attached-document-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the credit note PDF as a base64-encoded string.
   * GET /v2/credit-notes/{number}/download-pdf
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadCreditNotePdfResponse> {
    return this.http.get(
      `/v2/credit-notes/${number}/download-pdf`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Get the email content for a credit note.
   * GET /v2/credit-notes/{number}/email-content
   */
  getEmailContent(
    number: string,
    options?: RequestOptions,
  ): Promise<GetCreditNoteEmailContentResponse> {
    return this.http.get(
      `/v2/credit-notes/${number}/email-content`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Send the credit note by email (max 2 per document per day).
   * POST /v2/credit-notes/{number}/send-email
   */
  sendEmail(
    number: string,
    input: SendCreditNoteEmailInput,
    options?: RequestOptions,
  ): Promise<SendCreditNoteEmailResponse> {
    return this.http.post(
      `/v2/credit-notes/${number}/send-email`,
      input,
      options?.signal,
    );
  }

  /**
   * Delete (void) a credit note that has not yet been validated by the DIAN.
   * DELETE /v2/credit-notes/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteCreditNoteResponse> {
    return this.http.delete(
      `/v2/credit-notes/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
