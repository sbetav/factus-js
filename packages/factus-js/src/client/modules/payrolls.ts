import type {
  CreatePayrollInput,
  CreatePayrollResponse,
  DeletePayrollResponse,
  GetPayrollsResponse,
  ListParams,
  PayrollFilters,
  PayrollListItem,
  ViewPayrollResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class PayrollsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create and validate an electronic payroll.
   * POST /v2/payrolls
   */
  create(
    input: CreatePayrollInput,
    options?: RequestOptions,
  ): Promise<CreatePayrollResponse> {
    return this.http.post("/v2/payrolls", input, options?.signal);
  }

  /**
   * List payrolls with optional filters and pagination.
   * GET /v2/payrolls
   */
  list(
    params?: ListParams<PayrollFilters>,
    options?: RequestOptions,
  ): Promise<GetPayrollsResponse> {
    return this.http.get(
      "/v2/payrolls",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all payrolls automatically across pages, yielding one item at
   * a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: PayrollFilters,
    options?: RequestOptions,
  ): AsyncIterable<PayrollListItem> {
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
   * Get full detail of a payroll by its reference code.
   * GET /v2/payrolls/reference/{reference_code}
   */
  get(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<ViewPayrollResponse> {
    return this.http.get(
      `/v2/payrolls/reference/${referenceCode}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete a payroll that has not yet been validated by the DIAN.
   * DELETE /v2/payrolls/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeletePayrollResponse> {
    return this.http.delete(
      `/v2/payrolls/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
