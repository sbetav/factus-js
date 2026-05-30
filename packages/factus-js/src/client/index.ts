// ---------------------------------------------------------------------------
// Main client
// ---------------------------------------------------------------------------
export { FactusClient } from "./client";
export { BASE_URLS } from "./http-client";
export type { FactusClientConfig, RequestOptions } from "./http-client";

// ---------------------------------------------------------------------------
// Error class
// ---------------------------------------------------------------------------
export { FactusError } from "./error";

// ---------------------------------------------------------------------------
// Module classes (for advanced use / dependency injection)
// ---------------------------------------------------------------------------
export { AdjustmentNotesModule } from "./modules/adjustment-notes";
export { AcquirerModule } from "./modules/acquirer";
export { BillsModule } from "./modules/bills";
export { CompanyModule } from "./modules/company";
export { CreditNotesModule } from "./modules/credit-notes";
export { DocumentsModule } from "./modules/documents";
export { NumberingRangesModule } from "./modules/numbering-ranges";
export { ReceptionModule } from "./modules/reception";
export { SubscriptionModule } from "./modules/subscription";
export { SupportDocumentsModule } from "./modules/support-documents";
