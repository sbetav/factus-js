import type { Customer } from "./customer";
import type { ApiResponse, PaginatedData } from "./common";
import type {
  AllowanceChargeResponse,
  BillingPeriod,
  CodeNameIdObject,
  CodeNameObject,
  CompanyInfo,
  DeleteResponse,
  DocumentWithholdingTax,
  DownloadPdfData,
  DownloadXmlData,
  EstablishmentInput,
  EstablishmentResponse,
  ItemWithholdingTax,
  NumberingRangeInfo,
  SendEmailInput,
  SendEmailResponse,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface WithholdingTax {
  code: string;
  withholding_tax_rate: number;
}

export interface CreateInvoiceInput {
  numbering_range_id?: number;
  document?: string;
  reference_code: string;
  observation?: string;
  payment_form?: string;
  payment_due_date?: string;
  payment_method_code?: string | number;
  operation_type?: string;
  order_reference?: {
    reference_code: string;
    issue_date?: string;
  };
  send_email?: boolean;
  related_documents?: Array<{
    code: string;
    issue_date: string;
    number: string;
  }>;
  billing_period?: BillingPeriod;
  establishment?: EstablishmentInput;
  customer: {
    identification_document_id: number | string;
    identification: string;
    dv?: number | string;
    company?: string;
    trade_name?: string;
    names?: string;
    address?: string;
    email?: string;
    phone?: string;
    legal_organization_id: number | string;
    tribute_id: number | string;
    municipality_id?: number | string;
  };
  items: Array<{
    scheme_id?: string;
    note?: string;
    code_reference: string;
    name: string;
    quantity: number;
    discount_rate: number;
    price: number;
    tax_rate: string;
    unit_measure_id: number;
    standard_code_id: number;
    is_excluded: number;
    tribute_id: number;
    withholding_taxes?: Array<WithholdingTax>;
    mandate?: {
      identification_document_id: number;
      identification: string;
    };
  }>;
  allowance_charges?: Array<{
    concept_type: string;
    is_surcharge: boolean;
    reason: string;
    base_amount: number | string;
    amount: number | string;
  }>;
}

// ---------------------------------------------------------------------------
// List item type
// ---------------------------------------------------------------------------

export interface InvoiceListItem {
  id: number;
  document: CodeNameObject;
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
  send_email: number;
  has_claim: number;
  is_negotiable_instrument: number;
  payment_form: CodeNameObject;
  created_at: string;
  credit_notes: Array<{ id: number; number: string }>;
  debit_notes: Array<{ id: number; number: string }>;
}

/** @deprecated Use InvoiceListItem instead. */
export interface Invoice {
  id: number;
  document: CodeNameObject;
  number: string;
  reference_code: string;
  status: string | number;
  total: string;
  created_at: string;
  updated_at?: string;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface InvoiceFilters {
  "filter[identification]"?: string;
  "filter[names]"?: string;
  "filter[number]"?: string;
  "filter[prefix]"?: string;
  "filter[reference_code]"?: string;
  "filter[status]"?: string | number;
}

// ---------------------------------------------------------------------------
// View (detail) response
// ---------------------------------------------------------------------------

export interface InvoiceItemResponse {
  scheme_id: string | null;
  note: string | null;
  code_reference: string;
  name: string;
  quantity: number;
  discount_rate: string;
  discount: string;
  gross_value: string;
  tax_rate: string;
  taxable_amount: string;
  tax_amount: string;
  price: string;
  is_excluded: number;
  unit_measure: CodeNameIdObject;
  standard_code: CodeNameIdObject;
  tribute: CodeNameIdObject;
  total: number;
  withholding_taxes: ItemWithholdingTax[];
  /** The mandate field shape matches the mandate input on CreateInvoiceInput items. */
  mandate: {
    identification_document_id: number;
    identification: string;
  } | null;
}

export interface ViewInvoiceData {
  company: CompanyInfo;
  establishment: EstablishmentResponse;
  customer: Customer & {
    graphic_representation_name: string;
    trade_name: string;
    company: string;
    legal_organization: CodeNameIdObject;
    tribute: CodeNameIdObject;
    municipality: CodeNameIdObject;
  };
  numbering_range: NumberingRangeInfo;
  billing_period: BillingPeriod | null;
  bill: {
    id: number;
    document: CodeNameObject;
    operation_type: CodeNameObject;
    number: string;
    reference_code: string;
    order_reference: string | null;
    status: number;
    send_email: number;
    qr: string;
    cufe: string;
    validated: string;
    gross_value: string;
    taxable_amount: string;
    tax_amount: string;
    discount_amount: string;
    surcharge_amount: string;
    total: string;
    observation: string | null;
    errors: string[];
    created_at: string;
    payment_due_date: string | null;
    qr_image: string;
    has_claim: number;
    is_negotiable_instrument: number;
    payment_form: CodeNameObject;
    payment_method: CodeNameObject;
  };
  related_documents: Array<{
    code: string;
    issue_date: string;
    number: string;
  }>;
  items: InvoiceItemResponse[];
  allowance_charges: AllowanceChargeResponse[];
  withholding_taxes: DocumentWithholdingTax[];
  credit_notes: Array<{ id: number; number: string }>;
  debit_notes: Array<{ id: number; number: string }>;
}

export interface ViewInvoiceResponse {
  status: string;
  message: string;
  data: ViewInvoiceData;
}

// ---------------------------------------------------------------------------
// RADIAN event types
// ---------------------------------------------------------------------------

export interface RadianEventUpdateInput {
  identification_document_code: string | number;
  identification: string;
  dv?: string;
  first_name: string;
  last_name: string;
  job_title?: string;
  organization_department?: string;
}

export interface RadianEventUpdateResponse {
  status: string;
  message: string;
}

export interface InvoiceEvent {
  number: string;
  cude: string;
  event_code: string;
  event_name: string;
  effective_date: string;
  effective_time: string;
}

export interface GetInvoiceEventsResponse {
  status: string;
  message: string;
  data: InvoiceEvent[];
}

// ---------------------------------------------------------------------------
// Download / email / delete responses (re-exported aliases for convenience)
// ---------------------------------------------------------------------------

export interface SendInvoiceEmailInput extends SendEmailInput {}
export interface SendInvoiceEmailResponse extends SendEmailResponse {}
export interface DeleteInvoiceResponse extends DeleteResponse {}

export interface DownloadInvoiceXmlResponse {
  status: string;
  message: string;
  data: DownloadXmlData;
}

export interface DownloadInvoicePdfResponse {
  status: string;
  message: string;
  data: DownloadPdfData;
}

export interface GetInvoiceEmailContentResponse {
  status: string;
  message: string;
  data: {
    subject: string;
    attached_document: string;
  };
}

// ---------------------------------------------------------------------------
// List response
// ---------------------------------------------------------------------------

export interface GetInvoicesResponse extends ApiResponse<
  PaginatedData<InvoiceListItem>
> {}
