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
  SendEmailInput,
  SendEmailResponse,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateCreditNoteInput {
  numbering_range_id?: number;
  correction_concept_code: number;
  customization_id: number;
  bill_id?: number;
  reference_code: string;
  payment_method_code: string;
  send_email?: boolean;
  observation?: string;
  billing_period?: BillingPeriod;
  establishment?: EstablishmentInput;
  customer?: {
    identification_document_id?: number;
    identification: string;
    dv?: number | string;
    company?: string;
    trade_name?: string;
    names?: string;
    address?: string;
    email?: string;
    phone?: string;
    legal_organization_id?: number | string;
    tribute_id?: number | string;
    municipality_id?: number | string;
  };
  items: Array<{
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
    withholding_taxes?: Array<{
      /** Must be sent as a string (e.g. "06") per the Postman collection. */
      code: string;
      withholding_tax_rate: number;
    }>;
  }>;
  allowance_charges?: Array<{
    concept_type: string;
    is_surcharge: boolean;
    reason: string;
    base_amount: number;
    amount: number;
  }>;
}

// ---------------------------------------------------------------------------
// List item type
// Note: the list response does NOT include qr, cude, validated, gross_value,
// taxable_amount, etc. — those only appear in the detail/view response.
// ---------------------------------------------------------------------------

export interface CreditNoteListItem {
  id: number;
  api_client_name?: string;
  number: string;
  reference_code: string;
  identification?: string;
  graphic_representation_name?: string;
  company?: string;
  trade_name?: string | null;
  names?: string;
  email?: string | null;
  status: number | string;
  send_email?: number;
  total: string;
  errors?: string[];
  created_at: string;
}

/** @deprecated Use CreditNoteListItem for list responses and ViewCreditNoteData for detail responses. */
export interface CreditNote extends CreditNoteListItem {
  updated_at?: string;
  qr?: string;
  cude?: string;
  validated?: string;
  gross_value?: string;
  taxable_amount?: string;
  tax_amount?: string;
  discount_amount?: string;
  surcharge_amount?: string;
  observation?: string | null;
  qr_image?: string;
  bill_id?: number;
  cufe?: string;
  number_bill?: string;
  payment_method?: CodeNameObject;
  customization_id?: CodeNameObject;
  correction_concept?: CodeNameObject;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface CreditNoteFilters {
  "filter[identification]"?: string;
  "filter[names]"?: string;
  "filter[number]"?: string;
  "filter[prefix]"?: string;
  "filter[reference_code]"?: string;
  "filter[status]"?: string;
}

// ---------------------------------------------------------------------------
// View (detail) response
// ---------------------------------------------------------------------------

export interface CreditNoteDetail {
  id: number;
  number: string;
  reference_code: string;
  status: number;
  send_email: number;
  qr: string;
  cude: string;
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
  qr_image: string;
  bill_id: number | null;
  cufe: string | null;
  number_bill: string | null;
  payment_method: CodeNameObject;
  customization_id: CodeNameObject;
  correction_concept: CodeNameObject;
}

export interface CreditNoteItemResponse {
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
}

export interface ViewCreditNoteData {
  company: CompanyInfo;
  establishment: EstablishmentResponse;
  billing_period: BillingPeriod | null;
  customer: Customer & {
    graphic_representation_name: string;
    trade_name: string;
    company: string;
    legal_organization: CodeNameIdObject;
    tribute: CodeNameIdObject;
    municipality: CodeNameIdObject;
  };
  credit_note: CreditNoteDetail;
  items: CreditNoteItemResponse[];
  allowance_charges: AllowanceChargeResponse[];
  withholding_taxes: DocumentWithholdingTax[];
}

// ---------------------------------------------------------------------------
// Download / email / delete responses
// ---------------------------------------------------------------------------

export interface SendCreditNoteEmailInput extends SendEmailInput {}
export interface SendCreditNoteEmailResponse extends SendEmailResponse {}
export interface DeleteCreditNoteResponse extends DeleteResponse {}

export interface GetCreditNoteEmailContentResponse {
  status: string;
  message: string;
  data: {
    subject: string;
    attached_document: string;
  };
}

export interface DownloadCreditNoteXmlResponse {
  status: string;
  message: string;
  data: DownloadXmlData;
}

export interface DownloadCreditNotePdfResponse {
  status: string;
  message: string;
  data: DownloadPdfData;
}

// ---------------------------------------------------------------------------
// List response
// ---------------------------------------------------------------------------

export interface GetCreditNotesResponse extends ApiResponse<
  PaginatedData<CreditNoteListItem>
> {}
