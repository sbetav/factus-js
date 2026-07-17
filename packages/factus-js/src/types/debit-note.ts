import type {
  ChargeDiscountCode,
  DebitNoteCorrectionCode,
  DebitNoteOperationCode,
} from "../constants";
import type { ApiResponse, DateRangeFilter, PaginatedData } from "./common";
import type { CustomerInput } from "./customer";
import type {
  AllowanceChargeInput,
  AllowanceChargeResponse,
  BillCurrencyInput,
  BillingPeriod,
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
  EmailContentData,
  EstablishmentInput,
  NumberingRangeInfo,
  SendEmailInput,
  SendEmailResponse,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateDebitNoteInput {
  reference_code: string;
  correction_concept_code: DebitNoteCorrectionCode;
  customization_id?: DebitNoteOperationCode;
  /**
   * Prefixed electronic bill number this debit note references.
   * Optional only when `customization_id` is `32` (without reference).
   */
  bill_number?: string;
  numbering_range_id?: number;
  created_time?: string;
  currency?: BillCurrencyInput;
  send_email?: boolean;
  observation?: string;
  payment_details: DocumentPaymentDetailInput[];
  cash_rounding_amount?: string | number;
  establishment?: EstablishmentInput;
  billing_period?: BillingPeriod;
  customer?: CustomerInput;
  items: DocumentItemInput[];
  allowance_charges?: Array<
    Omit<AllowanceChargeInput, "concept_type"> & {
      concept_type: ChargeDiscountCode;
    }
  >;
}

// ---------------------------------------------------------------------------
// List item / filters
// ---------------------------------------------------------------------------

export interface DebitNoteListItem {
  api_client_name?: string | null;
  number: string;
  reference_code: string | null;
  customer?: DocumentParty;
  identification?: string;
  names?: string;
  total: string;
  errors: DocumentErrors;
  send_email?: boolean;
  is_validated?: boolean;
  validated_at?: string | null;
  created_at: string;
}

export interface DebitNoteFilters {
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

export interface ViewDebitNoteData {
  reference_code: string;
  number: string;
  payment_details: DocumentPaymentDetail[];
  correction_concept: CodeNameObject;
  customization?: CodeNameObject;
  is_validated: boolean;
  validated_at: string | null;
  errors: DocumentErrors;
  observation?: string | null;
  created_at: string;
  company: CompanyInfo;
  customer: DocumentParty;
  numbering_range?: NumberingRangeInfo;
  billing_period?: BillingPeriod | null;
  items: DocumentItemResponse[];
  allowance_charges?: AllowanceChargeResponse[];
  taxes?: DocumentTaxSummary[];
  withholding_taxes?: DocumentWithholdingTax[];
  totals?: DocumentTotals;
  links?: DocumentLinks;
  cude?: string;
  qr?: string;
  related_bill?: DocumentReference | null;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export interface SendDebitNoteEmailInput extends SendEmailInput {}

export type CreateDebitNoteResponse = ApiResponse<ViewDebitNoteData>;
export type ViewDebitNoteResponse = ApiResponse<ViewDebitNoteData>;
export type GetDebitNotesResponse = ApiResponse<
  PaginatedData<DebitNoteListItem>
>;
export type SendDebitNoteEmailResponse = SendEmailResponse;
export type DeleteDebitNoteResponse = DeleteResponse;
export type GetDebitNoteEmailContentResponse = ApiResponse<EmailContentData>;
export type DownloadDebitNoteXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadDebitNoteAttachedDocumentXmlResponse =
  ApiResponse<DownloadXmlData>;
export type DownloadDebitNotePdfResponse = ApiResponse<DownloadPdfData>;
