import type {
  CustomerTributeId,
  IdentityDocumentTypeId,
  OrganizationTypeId,
} from "../constants";

export interface Customer {
  identification: string;
  dv?: string;
  company?: string;
  trade_name?: string;
  names: string;
  address: string;
  email: string;
  phone: string;
  legal_organization_id: OrganizationTypeId;
  tribute_id: CustomerTributeId;
  identification_document_id: IdentityDocumentTypeId;
  municipality_id: string;
}
