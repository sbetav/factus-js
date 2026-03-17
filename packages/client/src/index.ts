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
export { InvoicesResource } from "./modules/invoices";
export { CreditNotesResource } from "./modules/credit-notes";
export { SupportDocumentsResource } from "./modules/support-documents";
export { AdjustmentNotesResource } from "./modules/adjustment-notes";
export { ReceptionResource } from "./modules/reception";
export { CompanyResource } from "./modules/company";
export { NumberingRangesResource } from "./modules/numbering-ranges";
export { SubscriptionResource } from "./modules/subscription";
export { ReferenceResource } from "./modules/reference";
