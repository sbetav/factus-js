import type { IdentityDocumentTypeId } from "@factus-js/constants";
import type { Department } from "./shared";

export interface Municipality {
  id: number;
  code: string;
  name: string;
  /** The department this municipality belongs to (returned as a full object by the API). */
  department: Department;
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
