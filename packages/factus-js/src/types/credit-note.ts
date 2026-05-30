import type {
  ChargeDiscountCode,
  CreditNoteCorrectionCode,
  CreditNoteOperationCode,
} from "../constants";
import type { ApiResponse, DateRangeFilter, PaginatedData } from "./common";
import type { CustomerInput } from "./customer";
import type {
  AllowanceChargeInput,
  AllowanceChargeResponse,
  BillingPeriod,
  CodeNameObject,
  CompanyInfo,
  DeleteResponse,
  DocumentErrors,
  DocumentHealthData,
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

export interface CreateCreditNoteInput {
  reference_code: string;
  correction_concept_code: CreditNoteCorrectionCode;
  customization_id?: CreditNoteOperationCode;
  bill_id?: number;
  numbering_range_id?: number;
  observation?: string;
  payment_details: DocumentPaymentDetailInput[];
  establishment?: EstablishmentInput;
  billing_period?: BillingPeriod;
  customer?: CustomerInput;
  items: DocumentItemInput[];
  allowance_charges?: Array<
    Omit<AllowanceChargeInput, "concept_type"> & {
      concept_type: ChargeDiscountCode;
    }
  >;
  health?: DocumentHealthData;
}

// ---------------------------------------------------------------------------
// List item / filters
// ---------------------------------------------------------------------------

export interface CreditNoteListItem {
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

export interface CreditNoteFilters {
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

export interface ViewCreditNoteData {
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

export interface SendCreditNoteEmailInput extends SendEmailInput {}

export type CreateCreditNoteResponse = ApiResponse<ViewCreditNoteData>;
export type ViewCreditNoteResponse = ApiResponse<ViewCreditNoteData>;
export type GetCreditNotesResponse = ApiResponse<
  PaginatedData<CreditNoteListItem>
>;
export type SendCreditNoteEmailResponse = SendEmailResponse;
export type DeleteCreditNoteResponse = DeleteResponse;
export type GetCreditNoteEmailContentResponse = ApiResponse<EmailContentData>;
export type DownloadCreditNoteXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadCreditNoteAttachedDocumentXmlResponse =
  ApiResponse<DownloadXmlData>;
export type DownloadCreditNotePdfResponse = ApiResponse<DownloadPdfData>;
