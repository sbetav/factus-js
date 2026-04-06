import type {
    AdjustmentNoteReasonCode,
    PaymentMethodCode,
    ProductStandardId,
} from "../constants";
import type { ApiResponse, PaginatedData } from "./common";
import type {
    CodeNameIdObject,
    CodeNameObject,
    DeleteResponse,
    DocumentWithholdingTax,
    DownloadPdfData,
    DownloadXmlData,
    ItemWithholdingTax,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateAdjustmentNoteInput {
  numbering_range_id?: number;
  reference_code: string;
  support_document_id: number;
  correction_concept_code: AdjustmentNoteReasonCode;
  payment_method_code?: PaymentMethodCode;
  observation?: string;
  send_email?: boolean;
  items: Array<{
    code_reference: string;
    name: string;
    quantity: number;
    discount_rate: number;
    price: number;
    unit_measure_id: number;
    standard_code_id: ProductStandardId;
  }>;
}

// ---------------------------------------------------------------------------
// List item / detail type
// ---------------------------------------------------------------------------

export interface AdjustmentNote {
  id: number;
  number: string;
  api_client_name?: string;
  reference_code: string | null;
  identification: string;
  graphic_representation_name: string;
  company: string;
  trade_name: string | null;
  names: string;
  email: string | null;
  total: string;
  status: number;
  errors: string[];
  send_email: 0 | 1;
  payment_method: CodeNameObject;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface AdjustmentNoteFilters {
  identification?: string;
  names?: string;
  number?: string;
  prefix?: string;
  reference_code?: string;
  status?: string | number;
}

// ---------------------------------------------------------------------------
// View (detail) response data
// ---------------------------------------------------------------------------

export interface AdjustmentNoteItemResponse {
  code_reference: string;
  name: string;
  quantity: number;
  discount_rate: string;
  discount: string;
  gross_value: string;
  price: string;
  is_excluded: 0 | 1;
  unit_measure: CodeNameIdObject;
  standard_code: CodeNameIdObject;
  withholding_taxes: ItemWithholdingTax[];
  total: number;
}

export interface ViewAdjustmentNoteData {
  support_document: {
    id: number;
    number: string;
    reference_code: string;
    status: number;
    total: string;
    created_at: string;
  };
  adjustment_note: {
    id: number;
    number: string;
    reference_code: string;
    status: number;
    send_email: 0 | 1;
    observation: string | null;
    errors: string[];
    validated: string;
    qr: string;
    cuds: string;
    gross_value: string;
    discount_amount: string;
    total: string;
    payment_method: CodeNameObject;
    correction_concept: CodeNameObject;
    created_at: string;
  };
  items: AdjustmentNoteItemResponse[];
  withholding_taxes: DocumentWithholdingTax[];
}

// ---------------------------------------------------------------------------
// Download / delete responses (named aliases for discoverability)
// ---------------------------------------------------------------------------

export type DeleteAdjustmentNoteResponse = DeleteResponse;
export type DownloadAdjustmentNoteXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadAdjustmentNotePdfResponse = ApiResponse<DownloadPdfData>;
export type GetAdjustmentNotesResponse = ApiResponse<
  PaginatedData<AdjustmentNote>
>;
