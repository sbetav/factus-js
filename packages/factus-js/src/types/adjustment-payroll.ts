import type { ApiResponse, PaginatedData } from "./common";
import type {
  DeleteResponse,
  DocumentErrors,
  DownloadXmlData,
} from "./shared";
import type { PayrollCompany, PayrollWorker } from "./payroll";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateAdjustmentPayrollInput {
  /** Prefixed electronic payroll number to void before the DIAN. */
  payroll_number: string;
  reference_code: string;
  numbering_range_id?: string | number;
}

// ---------------------------------------------------------------------------
// List item / filters
// ---------------------------------------------------------------------------

export interface AdjustmentPayrollListItem {
  number: string;
  reference_code: string | null;
  identification_number?: string;
  names?: string;
  is_validated?: boolean;
  validated_at?: string | null;
  errors: DocumentErrors;
  created_at: string;
}

export interface AdjustmentPayrollFilters {
  identification_number?: string;
  number?: string;
  names?: string;
}

// ---------------------------------------------------------------------------
// View response data
// ---------------------------------------------------------------------------

export interface ViewAdjustmentPayrollData {
  reference_code: string;
  number: string;
  company?: PayrollCompany;
  payroll?: {
    reference_code: string;
    number: string;
    worker: Pick<
      PayrollWorker,
      "name" | "identification_number" | "municipality"
    >;
    cune: string;
  } | null;
  is_validated: boolean;
  validated_at: string | null;
  errors: DocumentErrors;
  created_at: string;
  cune?: string;
  qr?: string;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export type CreateAdjustmentPayrollResponse =
  ApiResponse<ViewAdjustmentPayrollData>;
export type ViewAdjustmentPayrollResponse =
  ApiResponse<ViewAdjustmentPayrollData>;
export type GetAdjustmentPayrollsResponse = ApiResponse<
  PaginatedData<AdjustmentPayrollListItem>
>;
export type DeleteAdjustmentPayrollResponse = DeleteResponse;
export type DownloadAdjustmentPayrollXmlResponse = ApiResponse<DownloadXmlData>;
