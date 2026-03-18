import type { ClaimConceptCode, EventCode } from "../constants";
import type { CodeNameObject } from "./shared";

export interface ReceptionBill {
  /** UUID string (e.g. "9d86ea7f-b561-407c-8407-477abd1b53f7"), NOT a number. */
  id: string;
  number: string;
  issue_date: string;
  issue_time: string;
  cufe: string;
  company_nit: string;
  company_name: string;
  payment_form: CodeNameObject;
  /**
   * Can be an empty array `[]` when there is no claim, or a single
   * `{ code, name }` object when a claim concept is present.
   */
  claim_concept: Array<CodeNameObject> | CodeNameObject;
  payment_due_date: string;
  /** 0 or 1 integer in the list response (NOT a boolean). */
  is_negotiable_instrument: 0 | 1;
  /** 0 or 1 integer in the list response (NOT a boolean). */
  has_claim: 0 | 1;
  total: number;
  completed_events: boolean;
  created_at: string;
}

export interface ReceptionBillFilters {
  "filter[id]"?: string;
  "filter[number]"?: string;
  "filter[issue_date]"?: string;
  "filter[cufe]"?: string;
  "filter[company_nit]"?: string;
  "filter[company_name]"?: string;
  "filter[completed_events]"?: string;
}

export interface EmitEventInput {
  /** Required only when emitting event 031 (invoice claim). */
  claim_concept_code?: ClaimConceptCode;
  identification_document_code: number;
  identification: string;
  /** Required when identification_document_code = 6 (NIT). */
  dv?: string;
  first_name: string;
  last_name: string;
  job_title?: string;
  organization_department?: string;
}

export interface EmitEventParams {
  bill_id: number;
  event_type: EventCode;
}

export interface UploadReceptionBillInput {
  track_id: string;
}

export interface ReceptionBillEvent {
  number: string;
  cude: string;
  code: string;
  name: string;
  effective_date: string;
  effective_time: string;
  person_identification: string;
  person_names: string;
}

export interface UploadedReceptionBill {
  id: number;
  number: string;
  issue_date: string;
  issue_time: string;
  payment_due_date: string;
  cufe: string;
  company_identification_type_code: string;
  company_nit: string;
  /** DV of the issuing company. */
  company_dv: string;
  dv: string;
  company_name: string;
  payment_form: CodeNameObject;
  payment_method: CodeNameObject;
  total: number;
  has_claim: boolean;
  is_negotiable_instrument: boolean;
  events: ReceptionBillEvent[];
  created_at: string;
}
