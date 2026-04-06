import type {
    AdjustmentNote,
    AdjustmentNoteFilters,
    ApiResponse,
    CreateAdjustmentNoteInput,
    DeleteAdjustmentNoteResponse,
    DownloadAdjustmentNotePdfResponse,
    DownloadAdjustmentNoteXmlResponse,
    GetAdjustmentNotesResponse,
    ListParams,
    ViewAdjustmentNoteData,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class AdjustmentNotesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new adjustment note for a support document.
   * POST /v1/adjustment-notes/validate
   */
  create(
    input: CreateAdjustmentNoteInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<AdjustmentNote>> {
    return this.http.post(
      "/v1/adjustment-notes/validate",
      input,
      options?.signal,
    );
  }

  /**
   * List adjustment notes with optional filters and pagination.
   * GET /v1/adjustment-notes
   */
  list(
    params?: ListParams<AdjustmentNoteFilters>,
    options?: RequestOptions,
  ): Promise<GetAdjustmentNotesResponse> {
    return this.http.get(
      "/v1/adjustment-notes",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all adjustment notes automatically across pages, yielding
   * one item at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: AdjustmentNoteFilters,
    options?: RequestOptions,
  ): AsyncIterable<AdjustmentNote> {
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
   * Get full detail of an adjustment note by its document number.
   * GET /v1/adjustment-notes/{number}
   */
  get(
    number: string,
    options?: RequestOptions,
  ): Promise<ApiResponse<ViewAdjustmentNoteData>> {
    return this.http.get(
      `/v1/adjustment-notes/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the adjustment note XML as a base64-encoded string.
   * GET /v1/adjustment-notes/download-xml/{number}
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadAdjustmentNoteXmlResponse> {
    return this.http.get(
      `/v1/adjustment-notes/download-xml/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the adjustment note PDF as a base64-encoded string.
   * GET /v1/adjustment-notes/download-pdf/{number}
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadAdjustmentNotePdfResponse> {
    return this.http.get(
      `/v1/adjustment-notes/download-pdf/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete (void) an adjustment note that has not yet been validated by the DIAN.
   * DELETE /v1/adjustment-notes/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteAdjustmentNoteResponse> {
    return this.http.delete(
      `/v1/adjustment-notes/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
