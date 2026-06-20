import type {
  BillDocumentCode,
  ChargeDiscountCode,
  ClaimConceptCode,
  EventCode,
  IdentityDocumentCode,
  OperationTypeCode,
} from "../constants";
import type { CustomerInput } from "./customer";
import type {
  ApiResponse,
  DateRangeFilter,
  LiteralUnion,
  PaginatedData,
} from "./common";
import type {
  AllowanceChargeInput,
  AllowanceChargeResponse,
  BillCurrencyInput,
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
  DocumentBeneficiary,
  DocumentReference,
  DocumentTaxSummary,
  DocumentTotals,
  DocumentWithholdingTax,
  DownloadPdfData,
  DownloadXmlData,
  EmailContentData,
  EstablishmentInput,
  NumberingRangeInfo,
  PrepaymentDetail,
  PrepaymentDetailInput,
  RelatedDocumentsReference,
  RelatedNotes,
  SendEmailInput,
  SendEmailResponse,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateBillInput {
  reference_code: string;
  created_time?: string;
  document?: BillDocumentCode;
  numbering_range_id?: number;
  operation_type?: OperationTypeCode;
  currency?: BillCurrencyInput;
  send_email?: boolean;
  observation?: string;
  prepayment_details?: PrepaymentDetailInput[];
  payment_details: DocumentPaymentDetailInput[];
  cash_rounding_amount?: string | number;
  establishment?: EstablishmentInput;
  billing_period?: BillingPeriod;
  order_reference?: {
    reference_code: string;
    issue_date?: string;
  };
  related_documents?: RelatedDocumentsReference[];
  customer: CustomerInput;
  items: DocumentItemInput[];
  allowance_charges?: Array<
    Omit<AllowanceChargeInput, "concept_type"> & {
      concept_type: ChargeDiscountCode;
    }
  >;
  health?: DocumentHealthData;
  beneficiary?: DocumentBeneficiary;
}

// ---------------------------------------------------------------------------
// List item / filters
// ---------------------------------------------------------------------------

export interface BillListItem {
  api_client_name?: string | null;
  number: string;
  reference_code: string | null;
  customer?: DocumentParty;
  identification?: string;
  names?: string;
  total: string;
  errors: DocumentErrors;
  send_email?: boolean;
  has_claim?: boolean;
  is_negotiable_instrument?: boolean;
  is_validated?: boolean;
  validated_at?: string | null;
  created_at: string;
}

export interface BillFilters {
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

export interface ViewBillData {
  reference_code: string;
  number: string;
  order_reference?: string | null;
  send_email?: boolean;
  has_claim?: boolean;
  is_negotiable_instrument?: boolean;
  is_validated: boolean;
  validated_at: string | null;
  errors: DocumentErrors;
  observation?: string | null;
  created_at: string;
  document_type?: CodeNameObject;
  operation_type?: CodeNameObject;
  billing_period?: BillingPeriod | null;
  payment_details: DocumentPaymentDetail[];
  numbering_range?: NumberingRangeInfo;
  health?: DocumentHealthData | null;
  beneficiary?: DocumentBeneficiary | null;
  company: CompanyInfo;
  customer: DocumentParty;
  items: DocumentItemResponse[];
  prepayment_details?: PrepaymentDetail[];
  allowance_charges?: AllowanceChargeResponse[];
  taxes?: DocumentTaxSummary[];
  withholding_taxes?: DocumentWithholdingTax[];
  totals?: DocumentTotals;
  related_documents?: RelatedDocumentsReference[];
  related_notes?: RelatedNotes;
  links?: DocumentLinks;
  cufe?: string;
  qr?: string;
  qr_image?: string;
}

// ---------------------------------------------------------------------------
// RADIAN events
// ---------------------------------------------------------------------------

export interface RadianEventUpdateInput {
  claim_concept_code?: ClaimConceptCode;
  identification_document_code: LiteralUnion<IdentityDocumentCode>;
  identification: string;
  dv?: string;
  first_name: string;
  last_name: string;
  job_title?: string;
  organization_department?: string;
}

export interface BillEvent {
  number: string;
  cude: string;
  event_code: LiteralUnion<EventCode>;
  event_name: string;
  effective_date: string;
  effective_time: string;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export interface SendBillEmailInput extends SendEmailInput {}

export type CreateBillResponse = ApiResponse<ViewBillData>;
export type ViewBillResponse = ApiResponse<ViewBillData>;
export type GetBillsResponse = ApiResponse<PaginatedData<BillListItem>>;
export type GetBillEventsResponse = ApiResponse<BillEvent[]>;
export type SendBillEmailResponse = SendEmailResponse;
export type DeleteBillResponse = DeleteResponse;
export type RadianEventUpdateResponse = ApiResponse<BillEvent[]>;
export type DownloadBillXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadBillAttachedDocumentXmlResponse =
  ApiResponse<DownloadXmlData>;
export type DownloadBillPdfResponse = ApiResponse<DownloadPdfData>;
export type GetBillEmailContentResponse = ApiResponse<EmailContentData>;
export type BillRelatedNote = DocumentReference;
export type BillItemResponse = DocumentItemResponse;
