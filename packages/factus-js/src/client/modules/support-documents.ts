import type {
    ApiResponse,
    CreateSupportDocumentInput,
    DeleteSupportDocumentResponse,
    DownloadSupportDocumentPdfResponse,
    DownloadSupportDocumentXmlResponse,
    GetSupportDocumentsResponse,
    ListParams,
    SupportDocument,
    SupportDocumentFilters,
    ViewSupportDocumentData,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class SupportDocumentsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new support document.
   * POST /v1/support-documents/validate
   */
  create(
    input: CreateSupportDocumentInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<SupportDocument>> {
    return this.http.post(
      "/v1/support-documents/validate",
      input,
      options?.signal,
    );
  }

  /**
   * List support documents with optional filters and pagination.
   * GET /v1/support-documents
   */
  list(
    params?: ListParams<SupportDocumentFilters>,
    options?: RequestOptions,
  ): Promise<GetSupportDocumentsResponse> {
    return this.http.get(
      "/v1/support-documents",
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
  ): AsyncIterable<SupportDocument> {
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
   * GET /v1/support-documents/show/{number}
   */
  get(
    number: string,
    options?: RequestOptions,
  ): Promise<ApiResponse<ViewSupportDocumentData>> {
    return this.http.get(
      `/v1/support-documents/show/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the support document XML as a base64-encoded string.
   * GET /v1/support-documents/download-xml/{number}
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadSupportDocumentXmlResponse> {
    return this.http.get(
      `/v1/support-documents/download-xml/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the support document PDF as a base64-encoded string.
   * GET /v1/support-documents/download-pdf/{number}
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadSupportDocumentPdfResponse> {
    return this.http.get(
      `/v1/support-documents/download-pdf/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete (void) a support document that has not yet been validated by the DIAN.
   * DELETE /v1/support-documents/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteSupportDocumentResponse> {
    return this.http.delete(
      `/v1/support-documents/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
