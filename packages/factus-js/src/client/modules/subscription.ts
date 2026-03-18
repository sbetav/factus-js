import type { Subscription, ApiResponse } from "../../types";
import type { HttpClient } from "../http-client";

export class SubscriptionModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * List all available subscriptions for the account.
   * GET /v1/subscriptions
   */
  list(): Promise<ApiResponse<Subscription[]>> {
    return this.http.get("/v1/subscriptions");
  }
}
