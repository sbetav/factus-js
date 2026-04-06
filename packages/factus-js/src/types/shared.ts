/**
 * Shared / reusable types used across multiple modules.
 * Import from here instead of redefining inline.
 */

// ---------------------------------------------------------------------------
// Primitive building blocks
// ---------------------------------------------------------------------------

/** A simple { code, name } pair — used for payment_form, payment_method,
 *  operation_type, correction_concept, legal_organization, tribute, etc. */
export interface CodeNameObject {
  code: string;
  name: string;
}

/** A { id, code, name } triple — used in response objects for unit_measure,
 *  standard_code, legal_organization, tribute, identification_document, etc. */
export interface CodeNameIdObject {
  id: number;
  code: string;
  name: string;
}

// ---------------------------------------------------------------------------
// Geographic types
// ---------------------------------------------------------------------------

/** Department as it appears nested inside municipality response objects. */
export interface Department {
  id: number;
  code: string;
  name: string;
}

/** Full municipality object returned inside establishment responses
 *  (bill, credit-note, adjustment-note view responses). */
export interface MunicipalityObject {
  id: number;
  code: string;
  name: string;
  department: Department;
}

/** Slim municipality reference returned inside customer/provider responses
 *  (no department nesting). */
export interface MunicipalityRef {
  id: number;
  code: string;
  name: string;
}

// ---------------------------------------------------------------------------
// Company block (appears identically in bill, credit-note, support-document,
// and adjustment-note view responses)
// ---------------------------------------------------------------------------

export interface CompanyInfo {
  url_logo: string;
  nit: string;
  dv: string;
  company: string;
  name: string;
  graphic_representation_name?: string;
  registration_code: string;
  economic_activity: string;
  phone: string;
  email: string;
  direction: string;
  /** Human-readable city/municipality label (not an id). */
  municipality: string;
}

// ---------------------------------------------------------------------------
// Establishment block (bill, credit-note, adjustment-note view responses)
// ---------------------------------------------------------------------------

export interface EstablishmentResponse {
  name: string;
  address: string;
  phone_number: string;
  email: string;
  /** In the view response the municipality comes back as a full object. */
  municipality_id: MunicipalityObject;
}

// ---------------------------------------------------------------------------
// Numbering range info block (bill and support-document view responses)
// ---------------------------------------------------------------------------

export interface NumberingRangeInfo {
  prefix: string;
  from: number;
  to: number;
  resolution_number: string;
  start_date: string;
  end_date: string;
  months: number;
}

// ---------------------------------------------------------------------------
// Item-level withholding tax (appears inside items[] in view responses)
// ---------------------------------------------------------------------------

export interface ItemWithholdingTaxRate {
  code: string;
  name: string;
  rate: string;
}

export interface ItemWithholdingTax {
  tribute_code: string;
  name: string;
  value: string;
  rates: ItemWithholdingTaxRate[];
}

// ---------------------------------------------------------------------------
// Document-level withholding tax summary (top-level in view responses)
// ---------------------------------------------------------------------------

export interface DocumentWithholdingTax {
  tribute_code: string;
  name: string;
  value: string;
}

// ---------------------------------------------------------------------------
// Allowance / charge (bill and credit-note view responses)
// ---------------------------------------------------------------------------

export interface AllowanceChargeResponse {
  concept_type: CodeNameObject;
  is_surcharge: boolean;
  reason: string;
  base_amount: string;
  percentage: string;
  amount: string;
}

// ---------------------------------------------------------------------------
// Input helpers shared between bill and credit-note
// ---------------------------------------------------------------------------

export interface BillingPeriod {
  start_date: string;
  start_time?: string;
  end_date: string;
  end_time?: string;
}

/** Establishment block sent in CreateInvoiceInput and CreateCreditNoteInput. */
export interface EstablishmentInput {
  name: string;
  address: string;
  phone_number: string;
  email: string;
  /** Sent as a string (e.g. "980") per the Postman collection. */
  municipality_id: string;
}

// ---------------------------------------------------------------------------
// Download / email helpers shared across document types
// ---------------------------------------------------------------------------

export interface DownloadXmlData {
  file_name: string;
  xml_base_64_encoded: string;
}

export interface DownloadPdfData {
  file_name: string;
  pdf_base_64_encoded: string;
}

/** Shared email content data returned by email-content endpoints. */
export interface EmailContentData {
  subject: string;
  attached_document: string;
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
