import type {
  AdjustmentPayrollFilters,
  AdjustmentPayrollListItem,
  CreateAdjustmentPayrollInput,
  CreateAdjustmentPayrollResponse,
  DeleteAdjustmentPayrollResponse,
  DownloadAdjustmentPayrollXmlResponse,
  GetAdjustmentPayrollsResponse,
  ListParams,
  ViewAdjustmentPayrollResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class AdjustmentPayrollsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create and validate a payroll elimination (adjustment) note.
   * POST /v2/adjustment-payrolls
   */
  create(
    input: CreateAdjustmentPayrollInput,
    options?: RequestOptions,
  ): Promise<CreateAdjustmentPayrollResponse> {
    return this.http.post("/v2/adjustment-payrolls", input, options?.signal);
  }

  /**
   * List payroll elimination notes with optional filters and pagination.
   * GET /v2/adjustment-payrolls
   */
  list(
    params?: ListParams<AdjustmentPayrollFilters>,
    options?: RequestOptions,
  ): Promise<GetAdjustmentPayrollsResponse> {
    return this.http.get(
      "/v2/adjustment-payrolls",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all payroll elimination notes automatically across pages,
   * yielding one item at a time. Wraps `list()` and follows pagination until
   * exhausted.
   */
  async *listAll(
    filter?: AdjustmentPayrollFilters,
    options?: RequestOptions,
  ): AsyncIterable<AdjustmentPayrollListItem> {
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
   * Get full detail of a payroll elimination note by its reference code.
   * GET /v2/adjustment-payrolls/reference/{reference_code}
   */
  get(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<ViewAdjustmentPayrollResponse> {
    return this.http.get(
      `/v2/adjustment-payrolls/reference/${referenceCode}`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Download the payroll adjustment note XML as a base64-encoded string.
   * GET /v2/adjustment-payrolls/{number}/download-xml
   */
  downloadXml(
    number: string,
    options?: RequestOptions,
  ): Promise<DownloadAdjustmentPayrollXmlResponse> {
    return this.http.get(
      `/v2/adjustment-payrolls/${number}/download-xml`,
      undefined,
      options?.signal,
    );
  }

  /**
   * Delete a payroll elimination note that has not yet been validated by the
   * DIAN.
   * DELETE /v2/adjustment-payrolls/reference/{reference_code}
   */
  delete(
    referenceCode: string,
    options?: RequestOptions,
  ): Promise<DeleteAdjustmentPayrollResponse> {
    return this.http.delete(
      `/v2/adjustment-payrolls/reference/${referenceCode}`,
      options?.signal,
    );
  }
}
