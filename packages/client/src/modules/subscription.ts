import type {
  Subscription,
  CurrentSubscription,
  ApiResponse,
} from "@factus-js/types";
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

  /**
   * Get the legacy subscription summary (total, used, remaining documents).
   * GET /v1/subscriptions/current
   *
   * @deprecated Use list() (GET /v1/subscriptions) instead for full subscription details.
   */
  getCurrent(): Promise<ApiResponse<CurrentSubscription>> {
    return this.http.get("/v1/subscriptions/current");
  }
}
