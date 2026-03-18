import type { NumberingRangeDocumentTypeCode } from "../constants";

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
  is_active: 0 | 1;
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
  current: number;
  /** Only required when document contains code 21, 24, or 30. */
  resolution_number?: string;
}

export interface NumberingRangeFilters {
  "filter[id]"?: string;
  "filter[document]"?: string;
  "filter[resolution_number]"?: string;
  "filter[technical_key]"?: string;
  "filter[is_active]"?: string;
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

/** Response from DELETE /v1/numbering-ranges/{id} */
export interface DeleteNumberingRangeResponse {
  status: string;
  message: string;
}
