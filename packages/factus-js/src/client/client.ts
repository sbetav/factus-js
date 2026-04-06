import type { FactusClientConfig } from "./http-client";
import { HttpClient } from "./http-client";
import { AdjustmentNotesModule } from "./modules/adjustment-notes";
import { BillsModule } from "./modules/bills";
import { CatalogModule } from "./modules/catalog";
import { CompanyModule } from "./modules/company";
import { CreditNotesModule } from "./modules/credit-notes";
import { NumberingRangesModule } from "./modules/numbering-ranges";
import { ReceptionModule } from "./modules/reception";
import { SubscriptionModule } from "./modules/subscription";
import { SupportDocumentsModule } from "./modules/support-documents";

/**
 * Main entry point for the Factus API SDK.
 *
 * @example
 * ```ts
 * import { FactusClient } from "factus-js";
 *
 * const factus = new FactusClient({
 *   clientId: "your-client-id",
 *   clientSecret: "your-client-secret",
 *   username: "your@email.com",
 *   password: "your-password",
 *   environment: "sandbox",
 * });
 *
 * // Create an invoice
 * const response = await factus.bills.create({ ... });
 *
 * // List bills
 * const list = await factus.bills.list({
 *   filter: { status: 1, reference_code: "INV-123" },
 *   page: 1,
 *   per_page: 15,
 * });
 *
 * // Automatic pagination
 * for await (const bill of factus.bills.listAll()) {
 *   console.log(bill.number);
 * }
 * ```
 */
export class FactusClient {
  private readonly http: HttpClient;

  /** Electronic sales bills. */
  readonly bills: BillsModule;

  /** Credit notes. */
  readonly creditNotes: CreditNotesModule;

  /** Support documents. */
  readonly supportDocuments: SupportDocumentsModule;

  /** Adjustment notes for support documents. */
  readonly adjustmentNotes: AdjustmentNotesModule;

  /** Incoming / received invoices via RADIAN. */
  readonly reception: ReceptionModule;

  /** Company profile management. */
  readonly company: CompanyModule;

  /** Numbering ranges (prefixes). */
  readonly numberingRanges: NumberingRangesModule;

  /** Current subscription details. */
  readonly subscription: SubscriptionModule;

  /** Catalog data: municipalities, countries, tributes, measurement units, acquirers. */
  readonly catalog: CatalogModule;

  constructor(config: FactusClientConfig) {
    if (!config.clientId) {
      throw new Error("FactusClient: clientId is required");
    }
    if (!config.clientSecret) {
      throw new Error("FactusClient: clientSecret is required");
    }
    if (!config.username) {
      throw new Error("FactusClient: username is required");
    }
    if (!config.password) {
      throw new Error("FactusClient: password is required");
    }

    this.http = new HttpClient(config);

    this.bills = new BillsModule(this.http);
    this.creditNotes = new CreditNotesModule(this.http);
    this.supportDocuments = new SupportDocumentsModule(this.http);
    this.adjustmentNotes = new AdjustmentNotesModule(this.http);
    this.reception = new ReceptionModule(this.http);
    this.company = new CompanyModule(this.http);
    this.numberingRanges = new NumberingRangesModule(this.http);
    this.subscription = new SubscriptionModule(this.http);
    this.catalog = new CatalogModule(this.http);
  }
}
