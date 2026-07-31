import type {
  ApiResponse,
  CreatePayrollNumberingRangeInput,
  DeletePayrollNumberingRangeResponse,
  ListParams,
  PaginatedData,
  PayrollNumberingRange,
  PayrollNumberingRangeFilters,
  UpdatePayrollNumberingRangeCurrentInput,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class PayrollNumberingRangesModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * List payroll numbering ranges with optional filters and pagination.
   * GET /v2/numbering-ranges/payrolls
   */
  list(
    params?: ListParams<PayrollNumberingRangeFilters>,
    options?: RequestOptions,
  ): Promise<ApiResponse<PaginatedData<PayrollNumberingRange>>> {
    return this.http.get(
      "/v2/numbering-ranges/payrolls",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all payroll numbering ranges automatically across pages.
   */
  async *listAll(
    filter?: PayrollNumberingRangeFilters,
    options?: RequestOptions,
  ): AsyncIterable<PayrollNumberingRange> {
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
   * Get a single payroll numbering range by ID (ULID string).
   * GET /v2/numbering-ranges/payrolls/{id}
   */
  get(
    id: string,
    options?: RequestOptions,
  ): Promise<ApiResponse<PayrollNumberingRange>> {
    return this.http.get(
      `/v2/numbering-ranges/payrolls/${id}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Create a payroll numbering range.
   * POST /v2/numbering-ranges/payrolls
   */
  create(
    input: CreatePayrollNumberingRangeInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<PayrollNumberingRange>> {
    return this.http.post(
      "/v2/numbering-ranges/payrolls",
      input,
      options?.signal,
    );
  }

  /**
   * Update the current consecutive number of a payroll numbering range.
   * PATCH /v2/numbering-ranges/payrolls/{id}/current
   */
  updateCurrent(
    id: string,
    input: UpdatePayrollNumberingRangeCurrentInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<PayrollNumberingRange>> {
    return this.http.patch(
      `/v2/numbering-ranges/payrolls/${id}/current`,
      input,
      options?.signal,
    );
  }

  /**
   * Toggle the active/inactive state of a payroll numbering range.
   * PATCH /v2/numbering-ranges/payrolls/{id}/toggle-status
   */
  toggleStatus(
    id: string,
    options?: RequestOptions,
  ): Promise<ApiResponse<PayrollNumberingRange>> {
    return this.http.patch(
      `/v2/numbering-ranges/payrolls/${id}/toggle-status`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete a payroll numbering range by ID.
   * DELETE /v2/numbering-ranges/payrolls/{id}
   */
  delete(
    id: string,
    options?: RequestOptions,
  ): Promise<DeletePayrollNumberingRangeResponse> {
    return this.http.delete(
      `/v2/numbering-ranges/payrolls/${id}`,
      options?.signal,
    );
  }
}
