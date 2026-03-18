import { HttpClient } from "./http-client";
import type { FactusClientConfig } from "./http-client";
import { InvoicesModule } from "./modules/invoices";
import { CreditNotesModule } from "./modules/credit-notes";
import { SupportDocumentsModule } from "./modules/support-documents";
import { AdjustmentNotesModule } from "./modules/adjustment-notes";
import { ReceptionModule } from "./modules/reception";
import { CompanyModule } from "./modules/company";
import { NumberingRangesModule } from "./modules/numbering-ranges";
import { SubscriptionModule } from "./modules/subscription";
import { CatalogModule } from "./modules/catalog";

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
 * const response = await factus.invoices.create({ ... });
 *
 * // List invoices
 * const list = await factus.invoices.list({ "filter[status]": "1", page: 1 });
 * ```
 */
export class FactusClient {
  private readonly http: HttpClient;

  /** Electronic sales invoices. */
  readonly invoices: InvoicesModule;

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
    this.http = new HttpClient(config);

    this.invoices = new InvoicesModule(this.http);
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
