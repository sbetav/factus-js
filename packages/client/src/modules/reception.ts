import type {
  ReceptionBill,
  ReceptionBillFilters,
  EmitEventInput,
  EmitEventParams,
  UploadReceptionBillInput,
  UploadedReceptionBill,
  ReceptionBillEvent,
  ApiResponse,
  PaginatedData,
} from "@factus-js/types";
import type { HttpClient } from "../http-client";

export class ReceptionModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * List received (incoming) invoices with optional filters and pagination.
   * GET /v1/receptions/bills
   */
  list(
    filters?: ReceptionBillFilters & { page?: number; per_page?: number },
  ): Promise<ApiResponse<PaginatedData<ReceptionBill>>> {
    return this.http.get(
      "/v1/receptions/bills",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  /**
   * Upload (register) a new received invoice via its DIAN track ID.
   * POST /v1/receptions/upload
   */
  upload(
    input: UploadReceptionBillInput,
  ): Promise<ApiResponse<UploadedReceptionBill>> {
    return this.http.post("/v1/receptions/upload", input);
  }

  /**
   * Emit a RADIAN lifecycle event (030–034) on a received invoice.
   * POST /v1/receptions/bills/{bill_id}/radian/events/{event_type}
   */
  emitEvent(
    params: EmitEventParams,
    input: EmitEventInput,
  ): Promise<ApiResponse<ReceptionBillEvent[]>> {
    return this.http.post(
      `/v1/receptions/bills/${params.bill_id}/radian/events/${params.event_type}`,
      input,
    );
  }
}
