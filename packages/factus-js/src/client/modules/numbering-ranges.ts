import type {
  NumberingRange,
  NumberingRangeFilters,
  ListParams,
  CreateNumberingRangeInput,
  UpdateNumberingRangeCurrentInput,
  SoftwareNumberingRange,
  DeleteNumberingRangeResponse,
  ApiResponse,
  PaginatedData,
} from "../../types";
import type { HttpClient } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class NumberingRangesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * List numbering ranges with optional filters and pagination.
   * GET /v1/numbering-ranges
   */
  list(
    params?: ListParams<NumberingRangeFilters>,
  ): Promise<ApiResponse<PaginatedData<NumberingRange>>> {
    return this.http.get("/v1/numbering-ranges", buildListQueryParams(params));
  }

  /**
   * Get a single numbering range by its numeric ID.
   * GET /v1/numbering-ranges/{id}
   */
  get(id: number): Promise<ApiResponse<NumberingRange>> {
    return this.http.get(`/v1/numbering-ranges/${id}`);
  }

  /**
   * Create a new numbering range.
   * POST /v1/numbering-ranges
   */
  create(
    input: CreateNumberingRangeInput,
  ): Promise<ApiResponse<NumberingRange>> {
    return this.http.post("/v1/numbering-ranges", input);
  }

  /**
   * Update the current consecutive number of a numbering range.
   * PATCH /v1/numbering-ranges/{id}/current
   */
  updateCurrent(
    id: number,
    input: UpdateNumberingRangeCurrentInput,
  ): Promise<ApiResponse<NumberingRange>> {
    return this.http.patch(`/v1/numbering-ranges/${id}/current`, input);
  }

  /**
   * Get the software numbering range registered with the DIAN.
   * GET /v1/numbering-ranges/dian
   */
  getSoftwareRange(): Promise<ApiResponse<SoftwareNumberingRange[]>> {
    return this.http.get("/v1/numbering-ranges/dian");
  }

  /**
   * Delete a numbering range by its numeric ID.
   * DELETE /v1/numbering-ranges/{id}
   */
  delete(id: number): Promise<DeleteNumberingRangeResponse> {
    return this.http.delete(`/v1/numbering-ranges/${id}`);
  }
}
