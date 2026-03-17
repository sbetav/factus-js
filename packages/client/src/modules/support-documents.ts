import type {
  CreateSupportDocumentInput,
  SupportDocument,
  SupportDocumentFilters,
  ViewSupportDocumentData,
  DeleteSupportDocumentResponse,
  DownloadSupportDocumentXmlResponse,
  DownloadSupportDocumentPdfResponse,
  ApiResponse,
  PaginatedData,
} from "@factus-js/types";
import type { HttpClient } from "../http-client";

export class SupportDocumentsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new support document.
   * POST /v1/support-documents/validate
   */
  create(
    input: CreateSupportDocumentInput,
  ): Promise<ApiResponse<SupportDocument>> {
    return this.http.post("/v1/support-documents/validate", input);
  }

  /**
   * List support documents with optional filters and pagination.
   * GET /v1/support-documents
   */
  list(
    filters?: SupportDocumentFilters & { page?: number; per_page?: number },
  ): Promise<ApiResponse<PaginatedData<SupportDocument>>> {
    return this.http.get(
      "/v1/support-documents",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  /**
   * Get full detail of a support document by its numeric ID.
   * GET /v1/support-documents/{id}
   */
  get(id: number): Promise<ApiResponse<ViewSupportDocumentData>> {
    return this.http.get(`/v1/support-documents/${id}`);
  }

  /**
   * Get full detail of a support document by its document number.
   * GET /v1/support-documents/show/{number}
   */
  getByNumber(number: string): Promise<ApiResponse<ViewSupportDocumentData>> {
    return this.http.get(`/v1/support-documents/show/${number}`);
  }

  /**
   * Download the support document XML as a base64-encoded string.
   * GET /v1/support-documents/download-xml/{id}
   */
  downloadXml(
    id: number,
  ): Promise<ApiResponse<DownloadSupportDocumentXmlResponse>> {
    return this.http.get(`/v1/support-documents/download-xml/${id}`);
  }

  /**
   * Download the support document PDF as a base64-encoded string.
   * GET /v1/support-documents/download-pdf/{id}
   */
  downloadPdf(
    id: number,
  ): Promise<ApiResponse<DownloadSupportDocumentPdfResponse>> {
    return this.http.get(`/v1/support-documents/download-pdf/${id}`);
  }

  /**
   * Delete (void) a support document that has not yet been validated by the DIAN.
   * DELETE /v1/support-documents/{id}
   */
  delete(id: number): Promise<DeleteSupportDocumentResponse> {
    return this.http.delete(`/v1/support-documents/${id}`);
  }
}
