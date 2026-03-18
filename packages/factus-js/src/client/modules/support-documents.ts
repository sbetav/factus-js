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
} from "../../types";
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
   * Get full detail of a support document by its document number.
   * GET /v1/support-documents/show/{number}
   */
  get(number: string): Promise<ApiResponse<ViewSupportDocumentData>> {
    return this.http.get(`/v1/support-documents/show/${number}`);
  }

  /**
   * Download the support document XML as a base64-encoded string.
   * GET /v1/support-documents/download-xml/{number}
   */
  downloadXml(
    number: string,
  ): Promise<ApiResponse<DownloadSupportDocumentXmlResponse>> {
    return this.http.get(`/v1/support-documents/download-xml/${number}`);
  }

  /**
   * Download the support document PDF as a base64-encoded string.
   * GET /v1/support-documents/download-pdf/{number}
   */
  downloadPdf(
    number: string,
  ): Promise<ApiResponse<DownloadSupportDocumentPdfResponse>> {
    return this.http.get(`/v1/support-documents/download-pdf/${number}`);
  }

  /**
   * Delete (void) a support document that has not yet been validated by the DIAN.
   * DELETE /v1/support-documents/reference/{reference_code}
   */
  delete(referenceCode: string): Promise<DeleteSupportDocumentResponse> {
    return this.http.delete(`/v1/support-documents/reference/${referenceCode}`);
  }
}
