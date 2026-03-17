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

export class AdjustmentNotesResource {
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
   * Get full detail of an adjustment note by its numeric ID.
   * GET /v1/adjustment-notes/{id}
   */
  get(id: number): Promise<ApiResponse<ViewAdjustmentNoteData>> {
    return this.http.get(`/v1/adjustment-notes/${id}`);
  }

  /**
   * Get full detail of an adjustment note by its document number.
   * GET /v1/adjustment-notes/show/{number}
   */
  getByNumber(number: string): Promise<ApiResponse<ViewAdjustmentNoteData>> {
    return this.http.get(`/v1/adjustment-notes/show/${number}`);
  }

  /**
   * Download the adjustment note XML as a base64-encoded string.
   * GET /v1/adjustment-notes/download-xml/{id}
   */
  downloadXml(
    id: number,
  ): Promise<ApiResponse<DownloadAdjustmentNoteXmlResponse>> {
    return this.http.get(`/v1/adjustment-notes/download-xml/${id}`);
  }

  /**
   * Download the adjustment note PDF as a base64-encoded string.
   * GET /v1/adjustment-notes/download-pdf/{id}
   */
  downloadPdf(
    id: number,
  ): Promise<ApiResponse<DownloadAdjustmentNotePdfResponse>> {
    return this.http.get(`/v1/adjustment-notes/download-pdf/${id}`);
  }

  /**
   * Delete (void) an adjustment note that has not yet been validated by the DIAN.
   * DELETE /v1/adjustment-notes/{id}
   */
  delete(id: number): Promise<DeleteAdjustmentNoteResponse> {
    return this.http.delete(`/v1/adjustment-notes/${id}`);
  }
}
