import type { IdentityDocumentTypeId } from "@factus-js/constants";

export interface Municipality {
  id: number;
  code: string;
  name: string;
  /** The department name as returned by GET /v1/municipalities (plain string, e.g. "Amazonas"). */
  department: string;
}

export interface MunicipalityFilters {
  name?: string;
}

export interface Country {
  id: number;
  code: string;
  name: string;
}

export interface CountryFilters {
  name?: string;
}

export interface Tribute {
  id: number;
  code: string;
  name: string;
  description: string;
}

export interface TributeFilters {
  name?: string;
}

export interface MeasurementUnit {
  id: number;
  code: string;
  name: string;
}

export interface MeasurementUnitFilters {
  name?: string;
}

export interface Acquirer {
  name: string;
  email: string;
}

export interface AcquirerFilters {
  identification_document_id: IdentityDocumentTypeId;
  identification_number: string;
}
