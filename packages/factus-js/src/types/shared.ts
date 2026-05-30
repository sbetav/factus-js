import type {
  IdentityDocumentCode,
  PaymentFormCode,
  PaymentMethodCode,
  ProductStandardCode,
} from "../constants";
import type { ApiResponse, LiteralUnion } from "./common";

// ---------------------------------------------------------------------------
// Primitive building blocks
// ---------------------------------------------------------------------------

export interface CodeNameObject {
  code: string;
  name: string;
}

export interface CodeNameIdObject extends CodeNameObject {
  id?: number;
}

// ---------------------------------------------------------------------------
// Geographic types
// ---------------------------------------------------------------------------

export interface Department {
  id?: number;
  code: string;
  name: string;
}

export interface MunicipalityObject {
  id?: number;
  code: string;
  name: string;
  department?: Department;
}

export interface MunicipalityRef {
  id?: number;
  code: string;
  name: string;
}

// ---------------------------------------------------------------------------
// Company / establishment blocks
// ---------------------------------------------------------------------------

export interface EstablishmentResponse {
  name: string;
  address: string;
  phone_number: string;
  email: string;
  municipality: MunicipalityObject;
}

export interface CompanyInfo {
  url_logo: string;
  nit: string;
  dv: string;
  company?: string | null;
  name?: string | null;
  trade_name?: string | null;
  graphic_representation_name?: string | null;
  registration_code?: string | null;
  economic_activity: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  municipality?: string | MunicipalityObject | null;
  establishment: EstablishmentResponse;
}

export interface NumberingRangeInfo {
  prefix: string;
  from: number;
  to: number;
  resolution_number: string;
  start_date: string;
  end_date: string;
  months: number;
}

export type DocumentErrors = string[] | Record<string, string>;

// ---------------------------------------------------------------------------
// Shared input blocks
// ---------------------------------------------------------------------------

export interface BillingPeriod {
  start_date: string;
  start_time?: string;
  end_date: string;
  end_time?: string;
}

export interface EstablishmentInput {
  name: string;
  address: string;
  phone_number: string;
  email: string;
  municipality_code: string;
}

export interface DocumentPaymentDetailInput {
  payment_form: LiteralUnion<PaymentFormCode>;
  payment_method_code: LiteralUnion<PaymentMethodCode>;
  reference_code?: string;
  amount: string | number;
  due_date?: string;
}

export interface DocumentPaymentDetail {
  payment_form: CodeNameObject;
  payment_method: CodeNameObject;
  reference_code: string | null;
  amount: string;
  due_date: string | null;
}

export interface PrepaymentDetailInput {
  reference_code: string;
  received_date: string;
  concept_code?: string;
  amount: string | number;
  note?: string;
}

export interface PrepaymentDetail {
  reference_code: string;
  received_date: string;
  concept_code?: string | null;
  amount: string;
  note?: string | null;
}

export interface DocumentTaxInput {
  code: string;
  rate: string | number;
  is_excluded?: boolean;
}

export interface DocumentWithholdingTaxInput {
  code: string;
  rate: string | number;
}

// ---------------------------------------------------------------------------
// Shared response blocks
// ---------------------------------------------------------------------------

export interface DocumentTaxRate {
  rate: string;
  taxable_amount?: string;
  tax_amount?: string;
}

export interface DocumentTaxSummary {
  tribute: CodeNameObject;
  is_excluded?: boolean;
  value?: string;
  rates?: DocumentTaxRate[];
}

export interface DocumentWithholdingTax {
  tribute: CodeNameObject;
  value?: string;
  rates?: DocumentTaxRate[];
}

export interface DocumentItemAdditionalPropertyInput {
  code: string;
  value: string;
  quantity?: string | number;
  unit_measure_code?: string;
}

export interface DocumentItemAdditionalProperty {
  code: string;
  value: string;
  quantity?: string;
  unit_measure?: CodeNameObject;
}

export interface DocumentItemMandateInput {
  identification_document_code: LiteralUnion<IdentityDocumentCode>;
  identification: string;
}

export interface DocumentItemMandate {
  identification_document?: CodeNameObject;
  identification: string;
}

export interface DocumentItemInput {
  scheme_id?: string;
  note?: string;
  collection_concept_code?: string;
  code_reference: string;
  name: string;
  quantity: string | number;
  discount_rate: string | number;
  price: string | number;
  unit_measure_code: string;
  standard_code: LiteralUnion<ProductStandardCode>;
  taxes: DocumentTaxInput[];
  withholding_taxes?: DocumentWithholdingTaxInput[];
  additional_properties?: DocumentItemAdditionalPropertyInput[];
  mandate?: DocumentItemMandateInput;
}

export interface DocumentItemResponse {
  scheme_id?: CodeNameObject | string | null;
  note?: string | null;
  collection_concept?: string | null;
  code_reference: string;
  name: string;
  quantity: string;
  unit_measure: CodeNameIdObject;
  standard_code: CodeNameIdObject;
  discount_rate: string;
  discount?: string;
  gross_value?: string;
  taxable_amount?: string;
  tax_amount?: string;
  price: string;
  total?: number | string;
  taxes?: DocumentTaxSummary[];
  withholding_taxes?: DocumentWithholdingTax[];
  additional_properties?: DocumentItemAdditionalProperty[];
  mandate?: DocumentItemMandate | null;
}

export interface AllowanceChargeInput {
  concept_type: string;
  is_surcharge: boolean;
  reason: string;
  base_amount: string | number;
  amount: string | number;
}

export interface AllowanceChargeResponse {
  concept_type: CodeNameObject;
  is_surcharge: boolean;
  reason: string;
  base_amount: string;
  percentage?: string;
  amount: string;
}

// ---------------------------------------------------------------------------
// Party / totals / references
// ---------------------------------------------------------------------------

export interface DocumentHealthData {
  provider_code: string;
  payment_method_code: LiteralUnion<PaymentMethodCode>;
  coverage_code: string;
  contract_number: string;
  policy_number?: string | null;
}

export interface DocumentBeneficiary {
  identification_document_code: LiteralUnion<IdentityDocumentCode>;
  identification_number?: string;
  names?: string;
  surnames?: string;
}

export interface DocumentParty {
  identification_document: CodeNameObject;
  identification: string;
  dv?: string | null;
  graphic_representation_name?: string;
  trade_name?: string | null;
  company?: string | null;
  names: string;
  address?: string | null;
  email?: string | null;
  phone?: string | null;
  legal_organization?: CodeNameObject;
  tribute?: CodeNameObject;
  municipality?: MunicipalityObject;
  country?: CodeNameObject;
}

export interface DocumentTotals {
  prepayment_amount?: string;
  gross_amount?: string;
  taxable_amount?: string;
  tax_amount?: string;
  discount_amount?: string;
  surcharge_amount?: string;
  cash_rounding_amount?: string;
  total: string;
}

export interface DocumentReference {
  id?: number;
  number: string;
  reference_code?: string | null;
  correction_concept_code?: string;
  status?: number | boolean;
  total?: string;
  created_at?: string;
}

export interface RelatedDocumentsReference {
  code: string;
  issue_date: string;
  number: string;
}

export interface RelatedNotes {
  credit_notes: DocumentReference[];
  debit_notes: DocumentReference[];
}

export interface DocumentLinks {
  qr?: string;
  public_url?: string;
}

// ---------------------------------------------------------------------------
// Download / email helpers
// ---------------------------------------------------------------------------

export interface DownloadXmlData {
  file_name: string;
  xml_base_64_encoded: string;
}

export interface DownloadPdfData {
  file_name: string;
  pdf_base_64_encoded: string;
}

export interface EmailContentData {
  subject: string;
  attached_document?: string;
}

export interface SendEmailInput {
  email: string;
  pdf_base_64_encoded?: string;
}

export interface SendEmailResponse {
  status: string;
  message: string;
}

export interface DeleteResponse {
  status: string;
  message: string;
}

// ---------------------------------------------------------------------------
// Named response aliases
// ---------------------------------------------------------------------------

export type DownloadDocumentXmlResponse = ApiResponse<DownloadXmlData>;
