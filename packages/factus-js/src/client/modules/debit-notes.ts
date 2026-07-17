import type {
  CreateDebitNoteInput,
  CreateDebitNoteResponse,
  DebitNoteFilters,
  DebitNoteListItem,
  DeleteDebitNoteResponse,
  DownloadDebitNoteAttachedDocumentXmlResponse,
  DownloadDebitNotePdfResponse,
  DownloadDebitNoteXmlResponse,
  GetDebitNoteEmailContentResponse,
  GetDebitNotesResponse,
  ListParams,
  SendDebitNoteEmailInput,
  SendDebitNoteEmailResponse,
  ViewDebitNoteResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class DebitNotesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new debit note.
   * POST /v2/debit-notes/validate
   */
  create(
    input: CreateDebitNoteInput,
    options?: RequestOptions,
  ): Promise<CreateDebitNoteResponse> {
    return this.http.post("/v2/debit-notes/validate", input, options?.signal);
  }

  /**
   * List debit notes with optional filters and pagination.
   * GET /v2/debit-notes
   */
  list(
    params?: ListParams<DebitNoteFilters>,
    options?: RequestOptions,
  ): Promise<GetDebitNotesResponse> {
    return this.http.get(
      "/v2/debit-notes",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all debit notes automatically across pages, yielding one
   * item at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: DebitNoteFilters,
    options?: RequestOptions,
  ): AsyncIterable<DebitNoteListItem> {
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
   * Get full detail of a debit note by its document number.
   * GET /v2/debit-notes/{number}
   */
  get(
    number: string,
    options?: RequestOptions,
  ): Promise<ViewDebitNoteResponse> {
    return this.http.get(
      `/v2/debit-notes/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the debit note XML as a base64-encoded string.
   * GET /v2/debit-notes/{number}/download-xml
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadDebitNoteXmlResponse> {
    return this.http.get(
      `/v2/debit-notes/${number}/download-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the debit note AttachedDocument XML as a base64-encoded string,
   * including the associated file name.
   * GET /v2/debit-notes/{number}/download-attached-document-xml
   */
  downloadAttachedDocumentXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadDebitNoteAttachedDocumentXmlResponse> {
    return this.http.get(
      `/v2/debit-notes/${number}/download-attached-document-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the debit note PDF as a base64-encoded string.
   * GET /v2/debit-notes/{number}/download-pdf
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadDebitNotePdfResponse> {
    return this.http.get(
      `/v2/debit-notes/${number}/download-pdf`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Get the email content for a debit note.
   * GET /v2/debit-notes/{number}/email-content
   */
  getEmailContent(
    number: string,
    options?: RequestOptions,
  ): Promise<GetDebitNoteEmailContentResponse> {
    return this.http.get(
      `/v2/debit-notes/${number}/email-content`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Send the debit note by email.
   * POST /v2/debit-notes/{number}/send-email
   */
  sendEmail(
    number: string,
    input: SendDebitNoteEmailInput,
    options?: RequestOptions,
  ): Promise<SendDebitNoteEmailResponse> {
    return this.http.post(
      `/v2/debit-notes/${number}/send-email`,
      input,
      options?.signal,
    );
  }

  /**
   * Delete a debit note that has not yet been validated by the DIAN.
   * DELETE /v2/debit-notes/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteDebitNoteResponse> {
    return this.http.delete(
      `/v2/debit-notes/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
