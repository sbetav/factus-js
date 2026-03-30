import type {
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
  NumberingRangeInfo,
  ItemWithholdingTax,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateSupportDocumentInput {
  reference_code: string;
  numbering_range_id?: number;
  payment_method_code?: PaymentMethodCode;
  observation?: string;
  provider: {
    identification_document_id: SupportDocumentIdentityTypeId;
    identification: string;
    dv?: number | string;
    trade_name?: string;
    names: string;
    address: string;
    email: string;
    phone?: string;
    is_resident?: number;
    country_code: string;
    municipality_id?: number;
  };
  items: Array<{
    code_reference: string;
    name: string;
    quantity: number;
    discount_rate: number;
    price: number;
    unit_measure_id: number;
    standard_code_id: ProductStandardId;
    withholding_taxes?: Array<{
      code: string;
      withholding_tax_rate: string | number;
    }>;
  }>;
}

// ---------------------------------------------------------------------------
// List item type
// ---------------------------------------------------------------------------

export interface SupportDocument {
  id: number;
  number: string;
  api_client_name: string;
  /** Can be null when no reference code is set. */
  reference_code: string | null;
  identification: string;
  graphic_representation_name: string;
  trade_name: string | null;
  names: string;
  email: string;
  total: string;
  status: number | string;
  errors: string[];
  created_at: string;
  adjustment_notes?: Array<{ id: number; number: string }>;
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
// View (detail) response
// ---------------------------------------------------------------------------

export interface SupportDocumentItemResponse {
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
  total: number;
  withholding_taxes: ItemWithholdingTax[];
}

export interface ViewSupportDocumentData {
  company: CompanyInfo;
  provider: {
    identification: string;
    dv: string;
    graphic_representation_name: string;
    trade_name: string | null;
    names: string;
    address: string;
    email: string;
    phone: string;
    identification_document: CodeNameIdObject;
    legal_organization: CodeNameIdObject;
    tribute: CodeNameIdObject;
    country: CodeNameIdObject;
    municipality: CodeNameIdObject;
  };
  support_document: {
    id: number;
    number: string;
    reference_code: string;
    status: number;
    qr: string;
    cuds: string;
    validated: string;
    discount_rate: string;
    discount: string;
    gross_value: string;
    taxable_amount: string;
    tax_amount: string;
    total: string;
    observation: string | null;
    errors: string[];
    created_at: string;
    qr_image: string;
    payment_method: CodeNameObject;
  };
  items: SupportDocumentItemResponse[];
  withholding_taxes: DocumentWithholdingTax[];
  adjustment_notes: Array<{ id: number; number: string }>;
  numbering_range: NumberingRangeInfo;
}

// ---------------------------------------------------------------------------
// Download / delete responses
// ---------------------------------------------------------------------------

export interface DeleteSupportDocumentResponse extends DeleteResponse {}

export interface DownloadSupportDocumentXmlResponse {
  status: string;
  message: string;
  data: DownloadXmlData;
}

export interface DownloadSupportDocumentPdfResponse {
  status: string;
  message: string;
  data: DownloadPdfData;
}

// ---------------------------------------------------------------------------
// List response
// ---------------------------------------------------------------------------

export interface GetSupportDocumentsResponse extends ApiResponse<
  PaginatedData<SupportDocument>
> {}
