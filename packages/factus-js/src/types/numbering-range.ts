import type { NumberingRangeDocumentTypeCode } from "../constants";
import type { LiteralUnion } from "./common";
import type { DeleteResponse } from "./shared";

// ---------------------------------------------------------------------------
// Response types
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
  deleted_at?: string | null;
  created_at: string;
  updated_at: string;
}

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface UpdateNumberingRangeCurrentInput {
  current: number;
}

export interface CreateNumberingRangeInput {
  document: NumberingRangeDocumentTypeCode;
  prefix: string;
  current: number;
  /** Only required when document contains code 21, 24, or 30. */
  resolution_number?: string;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface NumberingRangeFilters {
  id?: string | number;
  document?: LiteralUnion<NumberingRangeDocumentTypeCode>;
  resolution_number?: string;
  technical_key?: string;
  is_active?: string | number | boolean;
}

// ---------------------------------------------------------------------------
// Related response types
// ---------------------------------------------------------------------------

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
// Named response aliases
// ---------------------------------------------------------------------------

export type DeleteNumberingRangeResponse = DeleteResponse;
