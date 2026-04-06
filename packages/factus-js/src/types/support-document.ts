import type {
    AdjustmentNoteReasonCode,
    PaymentMethodCode,
    ProductStandardId,
    SupportDocumentIdentityTypeId,
} from "../constants";
import type { ApiResponse, PaginatedData } from "./common";
import type {
    CodeNameIdObject,
    CodeNameObject,
    CompanyInfo,
    DeleteResponse,
    DocumentWithholdingTax,
    DownloadPdfData,
    DownloadXmlData,
    ItemWithholdingTax,
    NumberingRangeInfo,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface SupportDocumentWithholdingTax {
  code: string;
  withholding_tax_rate: string;
}

export interface CreateSupportDocumentInput {
  numbering_range_id?: number;
  reference_code: string;
  payment_method_code?: PaymentMethodCode;
  observation?: string;
  send_email?: boolean;
  provider: {
    identification_document_id: SupportDocumentIdentityTypeId;
    identification: string;
    dv?: string;
    trade_name?: string;
    names?: string;
    address?: string;
    email?: string;
    phone?: string;
    is_resident?: 0 | 1;
    country_code?: string;
    municipality_id?: number | string;
  };
  items: Array<{
    code_reference: string;
    name: string;
    quantity: number;
    discount_rate: number;
    price: number;
    unit_measure_id: number;
    standard_code_id: ProductStandardId;
    withholding_taxes?: SupportDocumentWithholdingTax[];
  }>;
}

// ---------------------------------------------------------------------------
// List item / detail type
// ---------------------------------------------------------------------------

export interface SupportDocument {
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
  payment_method: CodeNameObject;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface SupportDocumentFilters {
  identification?: string;
  names?: string;
  number?: string;
  prefix?: string;
  reference_code?: string;
  status?: string | number;
}

// ---------------------------------------------------------------------------
// View (detail) response data
// ---------------------------------------------------------------------------

export interface SupportDocumentItemResponse {
  code_reference: string;
  name: string;
  quantity: number;
  discount_rate: string;
  discount: string;
  gross_value: string;
  price: string;
  is_excluded: 0 | 1;
  unit_measure: CodeNameIdObject;
  standard_code: CodeNameIdObject;
  withholding_taxes: ItemWithholdingTax[];
  total: number;
}

export interface ViewSupportDocumentData {
  company: CompanyInfo;
  provider: {
    identification_document: CodeNameIdObject;
    identification: string;
    dv: string;
    trade_name: string;
    names: string;
    address: string;
    email: string;
    phone: string;
    is_resident: 0 | 1;
    country: CodeNameObject;
    municipality: CodeNameIdObject;
  };
  numbering_range: NumberingRangeInfo;
  support_document: {
    id: number;
    number: string;
    reference_code: string;
    status: number;
    send_email: 0 | 1;
    observation: string | null;
    errors: string[];
    validated: string;
    qr: string;
    cuds: string;
    gross_value: string;
    discount_amount: string;
    total: string;
    payment_method: CodeNameObject;
    created_at: string;
  };
  items: SupportDocumentItemResponse[];
  withholding_taxes: DocumentWithholdingTax[];
  adjustment_notes: Array<{
    id: number;
    number: string;
    correction_concept_code: AdjustmentNoteReasonCode;
    reference_code: string;
    status: number;
    total: string;
    created_at: string;
  }>;
}

// ---------------------------------------------------------------------------
// Download / delete responses (named aliases for discoverability)
// ---------------------------------------------------------------------------

export type DeleteSupportDocumentResponse = DeleteResponse;
export type DownloadSupportDocumentXmlResponse = ApiResponse<DownloadXmlData>;
export type DownloadSupportDocumentPdfResponse = ApiResponse<DownloadPdfData>;
export type GetSupportDocumentsResponse = ApiResponse<
  PaginatedData<SupportDocument>
>;
