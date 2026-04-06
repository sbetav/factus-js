import type {
    ApiResponse,
    CreateNumberingRangeInput,
    DeleteNumberingRangeResponse,
    ListParams,
    NumberingRange,
    NumberingRangeFilters,
    PaginatedData,
    SoftwareNumberingRange,
    UpdateNumberingRangeCurrentInput,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class NumberingRangesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * List numbering ranges with optional filters and pagination.
   * GET /v1/numbering-ranges
   */
  list(
    params?: ListParams<NumberingRangeFilters>,
    options?: RequestOptions,
  ): Promise<ApiResponse<PaginatedData<NumberingRange>>> {
    return this.http.get(
      "/v1/numbering-ranges",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all numbering ranges automatically across pages, yielding
   * one item at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: NumberingRangeFilters,
    options?: RequestOptions,
  ): AsyncIterable<NumberingRange> {
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
   * Get a single numbering range by its numeric ID.
   * GET /v1/numbering-ranges/{id}
   */
  get(
    id: number,
    options?: RequestOptions,
  ): Promise<ApiResponse<NumberingRange>> {
    return this.http.get(
      `/v1/numbering-ranges/${id}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Create a new numbering range.
   * POST /v1/numbering-ranges
   */
  create(
    input: CreateNumberingRangeInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<NumberingRange>> {
    return this.http.post("/v1/numbering-ranges", input, options?.signal);
  }

  /**
   * Update the current consecutive number of a numbering range.
   * PATCH /v1/numbering-ranges/{id}/current
   */
  updateCurrent(
    id: number,
    input: UpdateNumberingRangeCurrentInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<NumberingRange>> {
    return this.http.patch(
      `/v1/numbering-ranges/${id}/current`,
      input,
      options?.signal,
    );
  }

  /**
   * Get the software numbering range registered with the DIAN.
   * GET /v1/numbering-ranges/dian
   */
  getSoftwareRange(
    options?: RequestOptions,
  ): Promise<ApiResponse<SoftwareNumberingRange[]>> {
    return this.http.get(
      "/v1/numbering-ranges/dian",
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete a numbering range by its numeric ID.
   * DELETE /v1/numbering-ranges/{id}
   */
  delete(
    id: number,
    options?: RequestOptions,
  ): Promise<DeleteNumberingRangeResponse> {
    return this.http.delete(`/v1/numbering-ranges/${id}`, options?.signal);
  }
}
