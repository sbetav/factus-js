import { HttpClient } from "./http-client";
import type { FactusClientConfig } from "./http-client";
import { BillsResource } from "./resources/bills";
import { CreditNotesResource } from "./resources/credit-notes";
import { SupportDocumentsResource } from "./resources/support-documents";
import { AdjustmentNotesResource } from "./resources/adjustment-notes";
import { ReceptionResource } from "./resources/reception";
import { CompanyResource } from "./resources/company";
import { NumberingRangesResource } from "./resources/numbering-ranges";
import { SubscriptionResource } from "./resources/subscription";
import { ReferenceResource } from "./resources/reference";

/**
 * Main entry point for the Factus API SDK.
 *
 * @example
 * ```ts
 * import { FactusClient } from "@factus-js/client";
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
 * // List invoices
 * const list = await factus.bills.list({ "filter[status]": "1", page: 1 });
 * ```
 */
export class FactusClient {
  private readonly http: HttpClient;

  /** Electronic sales invoices. */
  readonly bills: BillsResource;

  /** Credit notes. */
  readonly creditNotes: CreditNotesResource;

  /** Support documents. */
  readonly supportDocuments: SupportDocumentsResource;

  /** Adjustment notes for support documents. */
  readonly adjustmentNotes: AdjustmentNotesResource;

  /** Incoming / received invoices via RADIAN. */
  readonly reception: ReceptionResource;

  /** Company profile management. */
  readonly company: CompanyResource;

  /** Numbering ranges (prefixes). */
  readonly numberingRanges: NumberingRangesResource;

  /** Current subscription details. */
  readonly subscription: SubscriptionResource;

  /** Reference data: municipalities, countries, tributes, measurement units, acquirers. */
  readonly reference: ReferenceResource;

  constructor(config: FactusClientConfig) {
    this.http = new HttpClient(config);

    this.bills = new BillsResource(this.http);
    this.creditNotes = new CreditNotesResource(this.http);
    this.supportDocuments = new SupportDocumentsResource(this.http);
    this.adjustmentNotes = new AdjustmentNotesResource(this.http);
    this.reception = new ReceptionResource(this.http);
    this.company = new CompanyResource(this.http);
    this.numberingRanges = new NumberingRangesResource(this.http);
    this.subscription = new SubscriptionResource(this.http);
    this.reference = new ReferenceResource(this.http);
  }
}
