// ---------------------------------------------------------------------------
// Main client
// ---------------------------------------------------------------------------
export { FactusClient } from "./client";
export type { FactusClientConfig } from "./http-client";
export { BASE_URLS } from "./http-client";

// ---------------------------------------------------------------------------
// Error class
// ---------------------------------------------------------------------------
export { FactusError } from "./error";

// ---------------------------------------------------------------------------
// Resource classes (for advanced use / dependency injection)
// ---------------------------------------------------------------------------
export { BillsResource } from "./resources/bills";
export { CreditNotesResource } from "./resources/credit-notes";
export { SupportDocumentsResource } from "./resources/support-documents";
export { AdjustmentNotesResource } from "./resources/adjustment-notes";
export { ReceptionResource } from "./resources/reception";
export { CompanyResource } from "./resources/company";
export { NumberingRangesResource } from "./resources/numbering-ranges";
export { SubscriptionResource } from "./resources/subscription";
export { ReferenceResource } from "./resources/reference";
