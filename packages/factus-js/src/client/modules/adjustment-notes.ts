import type {
  AdjustmentNoteFilters,
  AdjustmentNoteListItem,
  CreateAdjustmentNoteInput,
  CreateAdjustmentNoteResponse,
  DeleteAdjustmentNoteResponse,
  DownloadAdjustmentNotePdfResponse,
  DownloadAdjustmentNoteXmlResponse,
  GetAdjustmentNotesResponse,
  ListParams,
  ViewAdjustmentNoteResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class AdjustmentNotesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create (issue) a new adjustment note for a support document.
   * POST /v2/adjustment-notes/validate
   */
  create(
    input: CreateAdjustmentNoteInput,
    options?: RequestOptions,
  ): Promise<CreateAdjustmentNoteResponse> {
    return this.http.post(
      "/v2/adjustment-notes/validate",
      input,
      options?.signal,
    );
  }

  /**
   * List adjustment notes with optional filters and pagination.
   * GET /v2/adjustment-notes
   */
  list(
    params?: ListParams<AdjustmentNoteFilters>,
    options?: RequestOptions,
  ): Promise<GetAdjustmentNotesResponse> {
    return this.http.get(
      "/v2/adjustment-notes",
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
  ): AsyncIterable<AdjustmentNoteListItem> {
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
   * GET /v2/adjustment-notes/{number}
   */
  get(
    number: string,
    options?: RequestOptions,
  ): Promise<ViewAdjustmentNoteResponse> {
    return this.http.get(
      `/v2/adjustment-notes/${number}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the adjustment note XML as a base64-encoded string.
   * GET /v2/adjustment-notes/{number}/download-xml
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadAdjustmentNoteXmlResponse> {
    return this.http.get(
      `/v2/adjustment-notes/${number}/download-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the adjustment note PDF as a base64-encoded string.
   * GET /v2/adjustment-notes/{number}/download-pdf
   */
  downloadPdf(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadAdjustmentNotePdfResponse> {
    return this.http.get(
      `/v2/adjustment-notes/${number}/download-pdf`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete (void) an adjustment note that has not yet been validated by the DIAN.
   * DELETE /v2/adjustment-notes/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteAdjustmentNoteResponse> {
    return this.http.delete(
      `/v2/adjustment-notes/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
