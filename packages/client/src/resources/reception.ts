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

export class ReceptionResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * List received (incoming) invoices with optional filters and pagination.
   * GET /v1/reception/bills
   */
  list(
    filters?: ReceptionBillFilters & { page?: number; per_page?: number },
  ): Promise<ApiResponse<PaginatedData<ReceptionBill>>> {
    return this.http.get(
      "/v1/reception/bills",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  /**
   * Get full detail of a received invoice by its numeric ID.
   * GET /v1/reception/bills/{id}
   */
  get(id: number): Promise<ApiResponse<UploadedReceptionBill>> {
    return this.http.get(`/v1/reception/bills/${id}`);
  }

  /**
   * Upload (register) a new received invoice via its DIAN track ID.
   * POST /v1/reception/bills
   */
  upload(
    input: UploadReceptionBillInput,
  ): Promise<ApiResponse<UploadedReceptionBill>> {
    return this.http.post("/v1/reception/bills", input);
  }

  /**
   * Emit a RADIAN lifecycle event (030–034) on a received invoice.
   * POST /v1/reception/bills/emit-event/{bill_id}/{event_type}
   */
  emitEvent(
    params: EmitEventParams,
    input: EmitEventInput,
  ): Promise<ApiResponse<ReceptionBillEvent[]>> {
    return this.http.post(
      `/v1/reception/bills/emit-event/${params.bill_id}/${params.event_type}`,
      input,
    );
  }
}
