import type {
    ApiResponse,
    EmitEventInput,
    EmitEventParams,
    ListParams,
    PaginatedData,
    ReceptionBill,
    ReceptionBillEvent,
    ReceptionBillFilters,
    UploadReceptionBillInput,
    UploadedReceptionBill,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class ReceptionModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * List received (incoming) invoices with optional filters and pagination.
   * GET /v1/receptions/bills
   */
  list(
    params?: ListParams<ReceptionBillFilters>,
    options?: RequestOptions,
  ): Promise<ApiResponse<PaginatedData<ReceptionBill>>> {
    return this.http.get(
      "/v1/receptions/bills",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  /**
   * Iterate over all received invoices automatically across pages, yielding
   * one item at a time. Wraps `list()` and follows pagination until exhausted.
   */
  async *listAll(
    filter?: ReceptionBillFilters,
    options?: RequestOptions,
  ): AsyncIterable<ReceptionBill> {
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
   * Upload (register) a new received invoice via its DIAN track ID.
   * POST /v1/receptions/upload
   */
  upload(
    input: UploadReceptionBillInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<UploadedReceptionBill>> {
    return this.http.post("/v1/receptions/upload", input, options?.signal);
  }

  /**
   * Emit a RADIAN lifecycle event (030–034) on a received invoice.
   * PATCH /v1/receptions/bills/{bill_id}/radian/events/{event_type}
   */
  emitEvent(
    params: EmitEventParams,
    input: EmitEventInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<ReceptionBillEvent[]>> {
    return this.http.patch(
      `/v1/receptions/bills/${params.bill_id}/radian/events/${params.event_type}`,
      input,
      options?.signal,
    );
  }
}
