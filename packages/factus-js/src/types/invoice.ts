import type {
    ChargeDiscountCode,
    CustomerTributeId,
    IdentityDocumentTypeId,
    InvoiceDocumentType,
    OperationTypeCode,
    OrganizationTypeId,
    PaymentFormCode,
    PaymentMethodCode,
    ProductStandardId,
} from "../constants";
import type { ApiResponse, PaginatedData } from "./common";
import type { Customer } from "./customer";
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
    EmailContentData,
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
  document?: InvoiceDocumentType;
  reference_code: string;
  observation?: string;
  payment_form?: PaymentFormCode;
  payment_due_date?: string;
  payment_method_code?: PaymentMethodCode;
  operation_type?: OperationTypeCode;
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
    identification_document_id: IdentityDocumentTypeId;
    identification: string;
    dv?: string;
    company?: string;
    trade_name?: string;
    names?: string;
    address?: string;
    email?: string;
    phone?: string;
    legal_organization_id: OrganizationTypeId;
    tribute_id: CustomerTributeId;
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
    standard_code_id: ProductStandardId;
    is_excluded: 0 | 1;
    tribute_id: number;
    withholding_taxes?: Array<WithholdingTax>;
    mandate?: {
      identification_document_id: IdentityDocumentTypeId;
      identification: string;
    };
  }>;
  allowance_charges?: Array<{
    concept_type: ChargeDiscountCode;
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
  send_email: 0 | 1;
  has_claim: 0 | 1;
  is_negotiable_instrument: 0 | 1;
  payment_form: CodeNameObject;
  created_at: string;
  credit_notes: Array<{ id: number; number: string }>;
  debit_notes: Array<{ id: number; number: string }>;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface InvoiceFilters {
  identification?: string;
  names?: string;
  number?: string;
  prefix?: string;
  reference_code?: string;
  status?: string | number;
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
  is_excluded: 0 | 1;
  unit_measure: CodeNameIdObject;
  standard_code: CodeNameIdObject;
  tribute: CodeNameIdObject;
  total: number;
  withholding_taxes: ItemWithholdingTax[];
  /** The mandate field shape matches the mandate input on CreateInvoiceInput items. */
  mandate: {
    identification_document_id: string;
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
    send_email: 0 | 1;
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
    has_claim: 0 | 1;
    is_negotiable_instrument: 0 | 1;
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

// ---------------------------------------------------------------------------
// RADIAN event types
// ---------------------------------------------------------------------------

export interface RadianEventUpdateInput {
  /**
   * Identity document type code. Common values are provided by {@link IdentityDocumentTypeId};
   * the API may accept additional codes beyond the defined constants (e.g. `"13"` for tacit
   * acceptance), so plain strings are also accepted.
   */
  identification_document_code: IdentityDocumentTypeId | string;
  identification: string;
  dv?: string;
  first_name: string;
  last_name: string;
  job_title?: string;
  organization_department?: string;
}

export interface InvoiceEvent {
  number: string;
  cude: string;
  event_code: string;
  event_name: string;
  effective_date: string;
  effective_time: string;
}

// ---------------------------------------------------------------------------
// Download / email / delete responses (named aliases for discoverability)
// ---------------------------------------------------------------------------

export interface SendInvoiceEmailInput extends SendEmailInput {}
export type SendInvoiceEmailResponse = SendEmailResponse;
export type DeleteInvoiceResponse = DeleteResponse;
export type RadianEventUpdateResponse = SendEmailResponse;
export type ViewInvoiceResponse = ApiResponse<ViewInvoiceData>;
export type GetInvoiceEventsResponse = ApiResponse<InvoiceEvent[]>;
export type DownloadInvoiceXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadInvoicePdfResponse = ApiResponse<DownloadPdfData>;
export type GetInvoiceEmailContentResponse = ApiResponse<EmailContentData>;

// ---------------------------------------------------------------------------
// List response
// ---------------------------------------------------------------------------

export type GetInvoicesResponse = ApiResponse<PaginatedData<InvoiceListItem>>;
