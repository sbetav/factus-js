import type { AdjustmentNoteReasonCode } from "../constants";
import type { ApiResponse, DateRangeFilter, PaginatedData } from "./common";
import type { ProviderInput } from "./customer";
import type {
  CodeNameObject,
  CompanyInfo,
  DeleteResponse,
  DocumentErrors,
  DocumentItemInput,
  DocumentItemResponse,
  DocumentLinks,
  DocumentParty,
  DocumentPaymentDetail,
  DocumentPaymentDetailInput,
  DocumentReference,
  DocumentTaxSummary,
  DocumentTotals,
  DocumentWithholdingTax,
  DownloadPdfData,
  DownloadXmlData,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateAdjustmentNoteInput {
  reference_code: string;
  created_time?: string;
  numbering_range_id?: number;
  support_document_number: string;
  correction_concept_code: AdjustmentNoteReasonCode;
  observation?: string;
  payment_details: DocumentPaymentDetailInput[];
  cash_rounding_amount?: string | number;
  provider: ProviderInput;
  items: DocumentItemInput[];
}

// ---------------------------------------------------------------------------
// List item / filters
// ---------------------------------------------------------------------------

export interface AdjustmentNoteListItem {
  api_client_name?: string | null;
  number: string;
  reference_code: string | null;
  provider?: DocumentParty;
  identification?: string;
  names?: string;
  total: string;
  errors: DocumentErrors;
  send_email?: boolean;
  is_validated?: boolean;
  validated_at?: string | null;
  created_at: string;
}

export interface AdjustmentNoteFilters {
  identification?: string;
  names?: string;
  number?: string;
  prefix?: string;
  reference_code?: string;
  status?: string | number | boolean;
  created_at?: DateRangeFilter;
}

// ---------------------------------------------------------------------------
// View response data
// ---------------------------------------------------------------------------

export interface ViewAdjustmentNoteData {
  reference_code: string;
  number: string;
  payment_details: DocumentPaymentDetail[];
  correction_concept: CodeNameObject;
  is_validated: boolean;
  validated_at: string | null;
  errors: DocumentErrors;
  observation?: string | null;
  created_at: string;
  company: CompanyInfo;
  provider: DocumentParty;
  support_document?: DocumentReference;
  items: DocumentItemResponse[];
  taxes?: DocumentTaxSummary[];
  withholding_taxes?: DocumentWithholdingTax[];
  totals?: DocumentTotals;
  links?: DocumentLinks;
  cuds?: string;
  qr?: string;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export type CreateAdjustmentNoteResponse = ApiResponse<ViewAdjustmentNoteData>;
export type ViewAdjustmentNoteResponse = ApiResponse<ViewAdjustmentNoteData>;
export type DeleteAdjustmentNoteResponse = DeleteResponse;
export type DownloadAdjustmentNoteXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadAdjustmentNotePdfResponse = ApiResponse<DownloadPdfData>;
export type GetAdjustmentNotesResponse = ApiResponse<
  PaginatedData<AdjustmentNoteListItem>
>;
