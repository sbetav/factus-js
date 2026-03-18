import type {
  AdjustmentNoteReasonCode,
  PaymentMethodCode,
  ProductStandardId,
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
  EstablishmentResponse,
  ItemWithholdingTax,
} from "./shared";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface CreateAdjustmentNoteInput {
  reference_code: string;
  numbering_range_id?: number;
  payment_method_code?: PaymentMethodCode;
  support_document_id: number;
  correction_concept_code: AdjustmentNoteReasonCode;
  observation?: string;
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
      withholding_tax_rate: string;
    }>;
  }>;
}

// ---------------------------------------------------------------------------
// View (detail) response
// ---------------------------------------------------------------------------

export interface AdjustmentNoteItemResponse {
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
  unit_measure: CodeNameIdObject;
  standard_code: CodeNameIdObject;
  total: number;
  withholding_taxes: ItemWithholdingTax[];
}

export interface ViewAdjustmentNoteData {
  company: CompanyInfo;
  /** Present in the detail response per the Postman collection. */
  establishment: EstablishmentResponse;
  provider: {
    identification: string;
    dv: string;
    graphic_representation_name: string;
    trade_name: string | null;
    names: string;
    address: string;
    email: string;
    phone: string;
    legal_organization: CodeNameIdObject;
    tribute: CodeNameIdObject;
    municipality: CodeNameIdObject;
  };
  adjustment_note: {
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
  items: AdjustmentNoteItemResponse[];
  withholding_taxes: DocumentWithholdingTax[];
}

// ---------------------------------------------------------------------------
// List item type
// Note: updated_at is NOT present in the Postman list response.
// ---------------------------------------------------------------------------

export interface AdjustmentNote {
  id: number;
  number: string;
  api_client_name: string;
  reference_code: string;
  identification: string;
  graphic_representation_name: string;
  trade_name: string | null;
  names: string;
  email: string;
  total: string;
  status: number | string;
  errors: string[];
  created_at: string;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface AdjustmentNoteFilters {
  "filter[identification]"?: string;
  "filter[names]"?: string;
  "filter[number]"?: string;
  "filter[prefix]"?: string;
  "filter[reference_code]"?: string;
  "filter[status]"?: string | number;
}

// ---------------------------------------------------------------------------
// Download responses
// ---------------------------------------------------------------------------

export interface DownloadAdjustmentNoteXmlResponse extends DownloadXmlData {}
export interface DownloadAdjustmentNotePdfResponse extends DownloadPdfData {}
export interface DeleteAdjustmentNoteResponse extends DeleteResponse {}

// ---------------------------------------------------------------------------
// List response
// ---------------------------------------------------------------------------

export interface GetAdjustmentNotesResponse extends ApiResponse<
  PaginatedData<AdjustmentNote>
> {}
