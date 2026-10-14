import type {
  NumberingRangeDocumentTypeCode,
  PayrollNumberingRangeDocumentTypeCode,
} from "../constants";
import type { LiteralUnion } from "./common";
import type { DeleteResponse } from "./shared";

// ---------------------------------------------------------------------------
// Billing (facturación) response / input types
// ---------------------------------------------------------------------------

export interface NumberingRange {
  id: number;
  document: NumberingRangeDocumentTypeCode;
  /** The API is inconsistent: 'document_name' is missing in the list endpoint; 'document' carries the name there instead. */
  document_name?: string;
  prefix: string;
  from: number;
  to: number;
  current: number;
  resolution_number: string | null;
  start_date: string;
  end_date: string;
  technical_key: string | null;
  is_expired: boolean;
  is_active: boolean | 0 | 1;
  /** Included in the billing numbering-range list example. */
  is_external?: boolean;
  /** Null for non-deleted ranges; a timestamp for soft-deleted ranges. */
  deleted_at?: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpdateNumberingRangeCurrentInput {
  current: number;
}

export interface CreateNumberingRangeInput {
  document: NumberingRangeDocumentTypeCode;
  prefix: string;
  /** Next available consecutive number, not the last used number. */
  current: string | number;
  /** Only required when document contains code 21, 24, or 30. */
  resolution_number?: string;
}

export interface NumberingRangeFilters {
  id?: string | number;
  document?: LiteralUnion<NumberingRangeDocumentTypeCode>;
  resolution_number?: string;
  technical_key?: string;
  is_active?: string | number | boolean;
  /** Omit to exclude deleted ranges; "with" includes them, "only" lists just them. */
  trashed?: "with" | "only";
}

export interface SoftwareNumberingRange {
  resolution_number: string;
  prefix: string;
  from: string;
  to: string;
  start_date: string;
  end_date: string;
  technical_key: string;
}

// ---------------------------------------------------------------------------
// Payroll numbering ranges (`/v2/numbering-ranges/payrolls`)
// ---------------------------------------------------------------------------

export interface PayrollNumberingRange {
  id: string;
  document: PayrollNumberingRangeDocumentTypeCode | string;
  document_name?: string;
  prefix: string;
  from?: number;
  to?: number;
  current?: number;
  resolution_number?: string | null;
  start_date?: string;
  end_date?: string;
  technical_key?: string | null;
  is_expired?: boolean;
  is_active: boolean | 0 | 1;
  deleted_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface CreatePayrollNumberingRangeInput {
  document: PayrollNumberingRangeDocumentTypeCode;
  prefix: string;
  /** Next available consecutive number, not the last used number. */
  current: string | number;
}

export interface UpdatePayrollNumberingRangeCurrentInput {
  current: number;
}

export interface PayrollNumberingRangeFilters {
  code?: string;
  is_enabled?: string | number | boolean;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export interface RestoreNumberingRangeResponse {
  message: string;
}

export type DeleteNumberingRangeResponse = DeleteResponse;
export type DeletePayrollNumberingRangeResponse = DeleteResponse;
