import type { Acquirer, AcquirerFilters, ApiResponse } from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildSimpleQueryParams } from "../list-params";

export class AcquirerModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Look up an acquirer by identification.
   * GET /v2/dian/acquirer
   */
  get(
    filters: AcquirerFilters,
    options?: RequestOptions,
  ): Promise<ApiResponse<Acquirer>> {
    return this.http.get(
      "/v2/dian/acquirer",
      buildSimpleQueryParams(filters),
      options?.signal,
    );
  }
}
