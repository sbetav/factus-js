import type {
  CustomerTributeCode,
  IdentityDocumentCode,
  OrganizationTypeCode,
  SupportDocumentIdentityDocumentCode,
} from "../constants";
import type { LiteralUnion } from "./common";

// ---------------------------------------------------------------------------
// Party input types
// ---------------------------------------------------------------------------

export interface CustomerInput {
  identification_document_code: LiteralUnion<IdentityDocumentCode>;
  identification: string;
  dv?: string;
  company?: string;
  trade_name?: string;
  names?: string;
  address?: string;
  email?: string;
  phone?: string;
  legal_organization_code: LiteralUnion<OrganizationTypeCode>;
  tribute_code?: LiteralUnion<CustomerTributeCode>;
  municipality_code?: string;
}

// ---------------------------------------------------------------------------
// Provider input types
// ---------------------------------------------------------------------------

export interface ProviderInput {
  identification_document_code: LiteralUnion<SupportDocumentIdentityDocumentCode>;
  identification: string;
  dv?: string;
  trade_name?: string;
  names: string;
  address: string;
  country_code: string;
  municipality_code: string;
  email?: string;
  phone?: string;
  legal_organization_code?: LiteralUnion<OrganizationTypeCode>;
  tribute_code?: LiteralUnion<CustomerTributeCode>;
}
