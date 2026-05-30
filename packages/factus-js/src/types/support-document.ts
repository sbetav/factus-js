import type { ApiResponse, DateRangeFilter, PaginatedData } from "./common";
import type { ProviderInput } from "./customer";
import type {
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
  EstablishmentInput,
  NumberingRangeInfo,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateSupportDocumentInput {
  reference_code: string;
  numbering_range_id?: number;
  created_time?: string;
  observation?: string;
  payment_details: DocumentPaymentDetailInput[];
  cash_rounding_amount?: string | number;
  establishment?: EstablishmentInput;
  provider: ProviderInput;
  items: DocumentItemInput[];
}

// ---------------------------------------------------------------------------
// List item / filters
// ---------------------------------------------------------------------------

export interface SupportDocumentListItem {
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

export interface SupportDocumentFilters {
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

export interface ViewSupportDocumentData {
  reference_code: string;
  number: string;
  payment_details: DocumentPaymentDetail[];
  is_validated: boolean;
  validated_at: string | null;
  errors: DocumentErrors;
  observation?: string | null;
  created_at: string;
  company: CompanyInfo;
  provider: DocumentParty;
  numbering_range?: NumberingRangeInfo;
  items: DocumentItemResponse[];
  taxes?: DocumentTaxSummary[];
  withholding_taxes?: DocumentWithholdingTax[];
  totals?: DocumentTotals;
  adjustment_notes?: DocumentReference[];
  links?: DocumentLinks;
  cuds?: string;
  qr?: string;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export type CreateSupportDocumentResponse =
  ApiResponse<ViewSupportDocumentData>;
export type ViewSupportDocumentResponse = ApiResponse<ViewSupportDocumentData>;
export type DeleteSupportDocumentResponse = DeleteResponse;
export type DownloadSupportDocumentXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadSupportDocumentPdfResponse = ApiResponse<DownloadPdfData>;
export type GetSupportDocumentsResponse = ApiResponse<
  PaginatedData<SupportDocumentListItem>
>;
