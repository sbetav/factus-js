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
// Module classes (for advanced use / dependency injection)
// ---------------------------------------------------------------------------
export { InvoicesModule } from "./modules/invoices";
export { CreditNotesModule } from "./modules/credit-notes";
export { SupportDocumentsModule } from "./modules/support-documents";
export { AdjustmentNotesModule } from "./modules/adjustment-notes";
export { ReceptionModule } from "./modules/reception";
export { CompanyModule } from "./modules/company";
export { NumberingRangesModule } from "./modules/numbering-ranges";
export { SubscriptionModule } from "./modules/subscription";
export { CatalogModule } from "./modules/catalog";
