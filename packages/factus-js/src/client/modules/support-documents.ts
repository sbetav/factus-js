import type {
  CreateSupportDocumentInput,
  CreateSupportDocumentResponse,
  DeleteSupportDocumentResponse,
  DownloadSupportDocumentPdfResponse,
  DownloadSupportDocumentXmlResponse,
  GetSupportDocumentsResponse,
  ListParams,
  SupportDocumentFilters,
  SupportDocumentListItem,
  ViewSupportDocumentResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class SupportDocumentsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new support document.
   * POST /v2/support-documents/validate
   */
  create(
    input: CreateSupportDocumentInput,
    options?: RequestOptions,
  ): Promise<CreateSupportDocumentResponse> {
    return this.http.post(
      "/v2/support-documents/validate",
      input,
      options?.signal,
    );
  }

  /**
   * List support documents with optional filters and pagination.
   * GET /v2/support-documents
   */
  list(
    params?: ListParams<SupportDocumentFilters>,
    options?: RequestOptions,
  ): Promise<GetSupportDocumentsResponse> {
    return this.http.get(
      "/v2/support-documents",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all support documents automatically across pages, yielding
   * one item at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: SupportDocumentFilters,
    options?: RequestOptions,
  ): AsyncIterable<SupportDocumentListItem> {
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
   * Get full detail of a support document by its document number.
   * GET /v2/support-documents/{number}
   */
  get(
    number: string,
    options?: RequestOptions,
  ): Promise<ViewSupportDocumentResponse> {
    return this.http.get(
      `/v2/support-documents/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the support document XML as a base64-encoded string.
   * GET /v2/support-documents/{number}/download-xml
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadSupportDocumentXmlResponse> {
    return this.http.get(
      `/v2/support-documents/${number}/download-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the support document PDF as a base64-encoded string.
   * GET /v2/support-documents/{number}/download-pdf
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadSupportDocumentPdfResponse> {
    return this.http.get(
      `/v2/support-documents/${number}/download-pdf`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete (void) a support document that has not yet been validated by the DIAN.
   * DELETE /v2/support-documents/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteSupportDocumentResponse> {
    return this.http.delete(
      `/v2/support-documents/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
