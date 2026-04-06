import type {
    CreditNoteCorrectionCode,
    CreditNoteOperationTypeCode,
    CustomerTributeId,
    IdentityDocumentTypeId,
    OrganizationTypeId,
    PaymentMethodCode,
    ProductStandardId,
} from "../constants";
import type { ApiResponse, PaginatedData } from "./common";
import type { Customer } from "./customer";
import type {
    AllowanceChargeResponse,
    CodeNameIdObject,
    CodeNameObject,
    CompanyInfo,
    DeleteResponse,
    DocumentWithholdingTax,
    DownloadPdfData,
    DownloadXmlData,
    EmailContentData,
    EstablishmentResponse,
    ItemWithholdingTax,
    NumberingRangeInfo,
    SendEmailInput,
    SendEmailResponse,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateCreditNoteInput {
  numbering_range_id?: number;
  correction_concept_code: CreditNoteCorrectionCode;
  customization_id: CreditNoteOperationTypeCode;
  bill_id: number;
  reference_code: string;
  observation?: string;
  payment_method_code?: PaymentMethodCode;
  send_email?: boolean;
  customer?: {
    identification_document_id: IdentityDocumentTypeId;
    identification: string;
    dv?: string;
    company?: string;
    trade_name?: string;
    names?: string;
    address?: string;
    email?: string;
    phone?: string;
    legal_organization_id?: OrganizationTypeId;
    tribute_id?: CustomerTributeId;
    municipality_id?: number | string;
  };
  items: Array<{
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
  }>;
  allowance_charges?: Array<{
    is_surcharge: boolean;
    reason: string;
    base_amount: number | string;
    amount: number | string;
  }>;
}

// ---------------------------------------------------------------------------
// List item type
// ---------------------------------------------------------------------------

export interface CreditNoteListItem {
  id: number;
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
  payment_form: CodeNameObject;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface CreditNoteFilters {
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

export interface CreditNoteItemResponse {
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
}

export interface ViewCreditNoteData {
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
  credit_note: {
    id: number;
    number: string;
    reference_code: string;
    status: number;
    send_email: 0 | 1;
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
    payment_method: CodeNameObject;
    correction_concept: CodeNameObject;
    customization: CodeNameObject;
  };
  items: CreditNoteItemResponse[];
  allowance_charges: AllowanceChargeResponse[];
  withholding_taxes: DocumentWithholdingTax[];
}

// ---------------------------------------------------------------------------
// Download / email / delete responses (named aliases for discoverability)
// ---------------------------------------------------------------------------

export interface SendCreditNoteEmailInput extends SendEmailInput {}
export type SendCreditNoteEmailResponse = SendEmailResponse;
export type DeleteCreditNoteResponse = DeleteResponse;
export type GetCreditNoteEmailContentResponse = ApiResponse<EmailContentData>;
export type DownloadCreditNoteXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadCreditNotePdfResponse = ApiResponse<DownloadPdfData>;

// ---------------------------------------------------------------------------
// List response
// ---------------------------------------------------------------------------

export type GetCreditNotesResponse = ApiResponse<
  PaginatedData<CreditNoteListItem>
>;
