import type { ApiResponse, Subscription } from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";

export class SubscriptionModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * List all available subscriptions for the account.
   * GET /v2/subscriptions
   */
  list(options?: RequestOptions): Promise<ApiResponse<Subscription[]>> {
    return this.http.get("/v2/subscriptions", undefined, options?.signal);
  }
}
