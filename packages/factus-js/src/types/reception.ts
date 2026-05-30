import type { EventCode, IdentityDocumentCode } from "../constants";
import type { LiteralUnion } from "./common";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface UploadReceptionBillInput {
  track_id: string;
}

export interface EmitEventParams {
  bill_id: string;
  /** RADIAN event type code. */
  event_type: EventCode;
}

export interface EmitEventInput {
  /**
   * Identity document type code for the person emitting the event.
   */
  identification_document_code: LiteralUnion<IdentityDocumentCode>;
  identification: string;
  dv?: string;
  first_name: string;
  last_name: string;
  job_title?: string;
  organization_department?: string;
}

// ---------------------------------------------------------------------------
// Response types
// ---------------------------------------------------------------------------

export interface ReceptionBill {
  id: number;
  track_id: string;
  bill_id: string;
  cufe: string;
  number: string;
  status: number;
  issue_date: string;
  sender_nit: string;
  sender_name: string;
  gross_value: string;
  discount_amount: string;
  tax_amount: string;
  withholding_tax_amount: string;
  total: string;
  accepted: boolean | null;
  created_at: string;
  claim: boolean;
  event_type: LiteralUnion<EventCode> | null;
}

export interface ReceptionBillFilters {
  id?: string | number;
  number?: string;
  issue_date?: string;
  cufe?: string;
  company_nit?: string;
  company_name?: string;
  completed_events?: string | number;
}

export interface UploadedReceptionBill {
  track_id: string;
  status: string;
  message?: string;
}

export interface ReceptionBillEvent {
  event_type: LiteralUnion<EventCode>;
  event_name: string;
  effective_date: string;
  effective_time: string;
  cude: string;
}
