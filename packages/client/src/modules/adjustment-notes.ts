import type {
  CreateAdjustmentNoteInput,
  AdjustmentNote,
  AdjustmentNoteFilters,
  ViewAdjustmentNoteData,
  DownloadAdjustmentNoteXmlResponse,
  DownloadAdjustmentNotePdfResponse,
  DeleteAdjustmentNoteResponse,
  ApiResponse,
  PaginatedData,
} from "@factus-js/types";
import type { HttpClient } from "../http-client";

export class AdjustmentNotesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new adjustment note for a support document.
   * POST /v1/adjustment-notes/validate
   */
  create(
    input: CreateAdjustmentNoteInput,
  ): Promise<ApiResponse<AdjustmentNote>> {
    return this.http.post("/v1/adjustment-notes/validate", input);
  }

  /**
   * List adjustment notes with optional filters and pagination.
   * GET /v1/adjustment-notes
   */
  list(
    filters?: AdjustmentNoteFilters & { page?: number; per_page?: number },
  ): Promise<ApiResponse<PaginatedData<AdjustmentNote>>> {
    return this.http.get(
      "/v1/adjustment-notes",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  /**
   * Get full detail of an adjustment note by its document number.
   * GET /v1/adjustment-notes/{number}
   */
  get(number: string): Promise<ApiResponse<ViewAdjustmentNoteData>> {
    return this.http.get(`/v1/adjustment-notes/${number}`);
  }

  /**
   * Download the adjustment note XML as a base64-encoded string.
   * GET /v1/adjustment-notes/download-xml/{number}
   */
  downloadXml(
    number: string,
  ): Promise<ApiResponse<DownloadAdjustmentNoteXmlResponse>> {
    return this.http.get(`/v1/adjustment-notes/download-xml/${number}`);
  }

  /**
   * Download the adjustment note PDF as a base64-encoded string.
   * GET /v1/adjustment-notes/download-pdf/{number}
   */
  downloadPdf(
    number: string,
  ): Promise<ApiResponse<DownloadAdjustmentNotePdfResponse>> {
    return this.http.get(`/v1/adjustment-notes/download-pdf/${number}`);
  }

  /**
   * Delete (void) an adjustment note that has not yet been validated by the DIAN.
   * DELETE /v1/adjustment-notes/reference/{reference_code}
   */
  delete(referenceCode: string): Promise<DeleteAdjustmentNoteResponse> {
    return this.http.delete(`/v1/adjustment-notes/reference/${referenceCode}`);
  }
}
