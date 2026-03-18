import type { CodeNameObject } from "./shared";

export interface Company {
  url_logo: string;
  nit: string;
  dv: string;
  company: string;
  trade_name: string;
  names: string;
  surnames: string;
  graphic_representation_name: string;
  registration_code: string;
  /** The API docs claim this is a string in the request body, but the response example shows an integer. */
  economic_activity: number | string;
  phone: string;
  email: string;
  address: string;
  tribute: CodeNameObject;
  legal_organization: CodeNameObject;
  municipality: {
    code: string;
    name: string;
    /** Note: department here only has code/name; the id field is absent in the company response. */
    department: CodeNameObject;
  };
  responsibilities: CodeNameObject[];
  created_at: string;
  updated_at: string;
}

export interface UpdateCompanyInput {
  legal_organization_code: string;
  company?: string | null;
  trade_name?: string | null;
  names?: string | null;
  surnames?: string | null;
  registration_code?: string | null;
  economic_activity: string;
  phone: string;
  email: string;
  address: string;
  tribute_code: string;
  municipality_code: string;
  responsibilities: string;
}

export interface UploadCompanyLogoInput {
  /** Must be a PNG, JPG, or JPEG file. */
  image: File | Blob;
}

export interface UploadCompanyLogoResponse {
  /**
   * Note: the Factus API returns "url_log" (not "url_logo") in this endpoint's response.
   */
  url_log: string;
}
