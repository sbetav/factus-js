# Factus API v2 Docs Findings

This file tracks **reportable** ambiguities, inconsistencies, and likely docs typos in the local Factus v2 mirror at `factus-docs/v2/` (synced from developers.factus.com.co).

### Purpose

- list what to report back to Factus
- record the matching **SDK decision** for each open item
- flag items where the SDK choice is **assumed** because docs do not confirm the round-trip contract

Finding numbers remain stable when resolved items are removed; gaps are intentional.

### SDK working rule

When v2 docs disagree, prefer this order:

1. endpoint-specific field tables
2. endpoint-specific request/response examples
3. broader migration/best-practice docs
4. generic prose pages with simplified wording

Do not preserve obvious docs typos in public types just for fidelity to the wording.

---

### 1. Adjustment note delete page still shows a v1 route in v2 docs

**Description:** Delete docs still document `v1/adjustment-notes/reference/:reference_code`; the new v2 endpoint index lists `adjustment-notes/reference/:reference_code` under API v2.

**Files:**

- `factus-docs/v2/notas-ajuste-documentos-soporte/eliminar.md`
- `factus-docs/v2/endpoints.md`

**Factus docs status:** Open

**SDK decision:** `adjustmentNotes.delete()` calls `/v2/adjustment-notes/reference/:reference_code`.

---

### 2. Generic error guide conflicts with richer v2 document response docs

**Description:** Generic error guide says v2 returns `status: "created"` and `validated_at: "true"`; endpoint docs use `is_validated: boolean` and `validated_at: string | null`.

**Files:**

- `factus-docs/v2/manejo-errores.md`

**Factus docs status:** Open

**SDK decision:** Types follow endpoint-specific create/view docs, not the generic error guide.

---

### 3. Credit-note docs contain a field-path typo

**Description:** Field path `payment_details.*due_date` is missing a dot (`payment_details.*.due_date`).

**Files:**

- `factus-docs/v2/notas-credito/crear-y-validar.md`
- `factus-docs/v2/notas-credito/descripcion-de-campos.md`

**Factus docs status:** Open

**SDK decision:** Public types use `payment_details[].due_date`; typoed prose is not copied into SDK docs.

---

### 4. `identification_document_code` type is inconsistent across docs

**Description:** Reception / tacit-acceptance tables label the field as `integer`/`int`; the tacit-acceptance example uses `"13"` and document create tables use string codes. Reception `dv` prose still identifies NIT as `identification_document_code=6`, while the linked v2 catalog uses `31`. Beneficiary health codes (`CC`, `SI`, …) are a separate catalog — see #18.

**Files:**

- `factus-docs/v2/recepcion-de-documentos/emitir-evento.md`
- `factus-docs/v2/facturas/aceptacion-tacita.md`
- Document create docs under `facturas`, `notas-credito`, `documentos-soporte`, `notas-ajuste-documentos-soporte`

**Factus docs status:** Open

**SDK decision:** `LiteralUnion<IdentityDocumentCode>` / string-oriented party inputs; use `"31"` for NIT, not the stale v1 ID `6`.

---

### 5. XML download docs sometimes mention the PDF field name

**Description:** XML download prose tells integrators to decode `pdf_base_64_encoded`.

**Files:**

- `factus-docs/v2/notas-ajuste-documentos-soporte/descargar-xml.md`
- `factus-docs/v2/documentos-soporte/descargar-xml.md`

**Factus docs status:** Open

**SDK decision:** XML download response types use `DownloadXmlData.xml_base_64_encoded`.

---

### 6. Email-content docs describe the payload but do not name the response field clearly

**Description:** Prose describes a Base64 attachment; the exact v2 response field name is unclear (v1 used `attached_document`).

**Files:**

- `factus-docs/v2/facturas/obtener-contenido-de-correo.md`
- `factus-docs/v2/notas-credito/obtener-contenido-de-correo.md`

**Factus docs status:** Open

**SDK decision (assumed):** `EmailContentData = { subject: string; attached_document?: string }`; the new visual email example does not confirm the API response field name.

---

### 7. Some examples use numeric literals where field tables describe strings

**Description:** Examples mix numeric literals with string field tables (`payment_form: 1`, numeric `allowance_charges.*.amount`, numeric `items.*.scheme_id` on SS-Recaudo, etc.). The current Mandatos example uses string `scheme_id` values, so that page no longer demonstrates the mismatch.

**Files:**

- Examples across `factus-docs/v2/facturas/**`, Mandatos, and SS-Recaudo pages

**Factus docs status:** Open

**SDK decision:** `DocumentItemInput.scheme_id`, allowance-charge amounts, and payment amounts accept `string | number`. `DocumentPaymentDetailInput.payment_form` remains `LiteralUnion<PaymentFormCode>` (string-oriented), despite numeric example literals; the SDK does not widen every mismatched field to accept numbers.

---

### 8. Acceptance / tacit-event docs are internally contradictory

**Description:** Reception prose says tacit acceptance cannot be emitted by the recipient and is generated automatically by the issuer, yet includes `034` in its event table without marking it unavailable on that endpoint. The issuer's bills page explicitly documents emitting tacit acceptance. The distinct issuer `POST /v2/bills/:number/...` and recipient `PATCH /v2/receptions/bills/:bill_id/...` routes are not themselves contradictory; the automatic/manual wording and allowed reception codes need clarification.

**Files:**

- `factus-docs/v2/facturas/aceptacion-tacita.md`
- `factus-docs/v2/recepcion-de-documentos/emitir-evento.md`

**Factus docs status:** Open

**SDK decision:** `reception.emitEvent()` uses `PATCH /v2/receptions/bills/:bill_id/radian/events/:event_type` and manual codes `030`–`033` only. Issuer tacit acceptance is available through `bills.emitRadianEvent(number, "034", input)`, which accepts `EventCode` and posts to `/v2/bills/:number/radian/events/:event_type`; it is not a separate tacit-only method. Do not expose `034` as a manual reception event.

---

### 9. Auth token lifetime is inconsistent

**Description:** Auth prose and the new FAQ say the token lasts 1 hour; the auth example shows `"expires_in": 600`, while the refresh-token example shows `3600`.

**Files:**

- `factus-docs/v2/autenticacion/auth.md`
- `factus-docs/v2/autenticacion/refresh-token.md`
- `factus-docs/v2/buenas-practicas/preguntas-frecuentes.md`

**Factus docs status:** Open

**SDK decision:** SDK refreshes from `expires_in` in the token response; no hard-coded TTL.

---


### 11. Generic documents XML download page lacks a clear response schema

**Description:** Path is documented; response field name/schema is missing compared with family-specific XML pages.

**Files:**

- `factus-docs/v2/documentos/descargar-xml.md`

**Factus docs status:** Open

**SDK decision (assumed):** `documents.downloadXml()` typed as `ApiResponse<DownloadXmlData>` with `xml_base_64_encoded`; the generic endpoint does not confirm that shared envelope.

---

### 12. Some pages reference the wrong resource in prose

**Description:** Prose sometimes names the wrong document family (e.g. support-doc fields closing with “nota crédito”, adjustment-note pages referring to documentos soporte).

**Files:**

- `factus-docs/v2/documentos-soporte/descripcion-de-campos.md`
- `factus-docs/v2/notas-ajuste-documentos-soporte/ver-y-filtrar.md`
- `factus-docs/v2/notas-ajuste-documentos-soporte/ver.md`

**Factus docs status:** Open

**SDK decision:** SDK docs and types follow field tables and examples for the target resource.

---

### 13. Company logo upload page mixes multipart and JSON wording

**Description:** Page indicates `multipart/form-data` but surrounding text still says JSON.

**Files:**

- `factus-docs/v2/empresas/actualizar-imagen.md`

**Factus docs status:** Open

**SDK decision:** `company.uploadLogo()` uses `HttpClient.postForm()` (multipart).

---

### 14. Recurrent spelling and wording defects

**Description:** Recurring typos across the docs (e.g. `compos`, `filtar`, `metido`, `pagina`, `objecto`).

**Files:**

- Multiple pages under `factus-docs/v2/`

**Factus docs status:** Open

**SDK decision:** Prefer field tables and examples over prose when docs disagree; do not mirror obvious typos in public types.

---

### 15. Item discount docs not propagated to support documents or adjustment notes

**Description:** Support-document / adjustment-note field tables still document only `items.*.discount_rate`; bills and credit notes also document `discount_amount`.

**Files:**

- `factus-docs/v2/documentos-soporte/crear-validar.md`
- `factus-docs/v2/documentos-soporte/descripcion-de-campos.md`
- `factus-docs/v2/notas-ajuste-documentos-soporte/*`

**Factus docs status:** Open

**SDK decision:** Shared relaxed `DocumentItemInput` across document families; support-doc field tables are not treated as complete.

---

### 16. Item discount request field name differs from response field name

**Description:** Bill / credit-note create requests document `items.*.discount_amount` (with optional `discount_rate`); the bill create response documents `data.items.*.discount` and `data.items.*.discount_rate`, with no mapping note that input `discount_amount` becomes response `discount`. The bill view page has no response schema to confirm the read contract independently.

**Files:**

- `factus-docs/v2/facturas/descripcion-de-campos.md`
- `factus-docs/v2/facturas/crear-y-validar.md`
- `factus-docs/v2/notas-credito/descripcion-de-campos.md`

**Factus docs status:** Open

**SDK decision (assumed):** `DocumentItemInput.discount_amount?` on create; `DocumentItemResponse.discount?` on read, with no `discount_amount` on that item response type. Document-level `DocumentTotals.discount_amount?` is a separate response field.

---

### 17. Bill `currency` is documented on create but absent from response schemas

**Description:** Optional `currency` appears on bill/credit-note create tables and examples for graphic-representation totals; the bill create response table omits `data.currency`, and the bill view page has no response schema. Unclear whether the API echoes it, uses it only for PDF generation, or drops it after create.

**Files:**

- `factus-docs/v2/facturas/crear-y-validar.md`
- `factus-docs/v2/facturas/descripcion-de-campos.md`
- `factus-docs/v2/facturas/ver.md`
- `factus-docs/v2/facturas/ejemplos/estandar-currency.md`
- `factus-docs/v2/notas-credito/crear-y-validar.md`
- `factus-docs/v2/notas-credito/descripcion-de-campos.md`

**Factus docs status:** Open

**SDK decision (assumed):** `CreateBillInput.currency?` and `CreateCreditNoteInput.currency?` only; view data has no `currency` until Factus documents a response shape.

---

### 18. Beneficiary `identification_document_code` uses the health catalog, not DIAN identity codes

**Description:** Sector-salud docs link beneficiary IDs to the health identity catalog (`CC`, `CE`, `SI`, `PT`, …) and examples send `"CC"`. Customer / mandate fields on the same payloads still use DIAN numeric codes (`"13"`, `"31"`), with the same field name and no discriminator.

**Files:**

- `factus-docs/v2/facturas/tipos-de-factura/ss-recaudo.md`
- `factus-docs/v2/facturas/descripcion-de-campos.md`
- `factus-docs/v2/tablas-de-referencia/tablas.md`

**Factus docs status:** Open

**SDK decision:** `DocumentBeneficiary.identification_document_code` uses `HealthIdentityDocumentCode` (includes `PT`). Customer / mandate keep DIAN `IdentityDocumentCode`. `health.coverage_code` uses `HealthCoverageCode` (`01`–`17`).

---

### 19. Excluded-tax examples omit `code` and `rate`

**Description:** Field tables list `items.*.taxes.*.code` and `rate` as required-looking fields with optional `is_excluded`. Excluded-IVA examples send only `{ "is_excluded": true }`, with no note that `code`/`rate` become optional.

**Files:**

- `factus-docs/v2/facturas/tipos-de-factura/ss-recaudo.md`
- `factus-docs/v2/facturas/ejemplos/estandar-impuesto-excluido.md`
- `factus-docs/v2/facturas/descripcion-de-campos.md`

**Factus docs status:** Open

**SDK decision (assumed):** Model `DocumentTaxInput.code?` and `rate?` when representing excluded taxes; keep `is_excluded?: boolean`.

---

### 20. Payroll create path conflicts between pages

**Description:** Create page documents `POST /v2/payrolls`; field-description page documents `POST /v2/payroll/validate`.

**Files:**

- `factus-docs/v2/nomina/crear-y-validar.md`
- `factus-docs/v2/nomina/descripcion-de-campos.md`
- `factus-docs/v2/endpoints.md`

**Factus docs status:** Open

**SDK decision:** `factus.payrolls.create()` posts to `/v2/payrolls`, confirmed by both the create page and the new endpoint index; do not follow `/v2/payroll/validate` from the field-description page.

---

### 21. Payroll `numbering_range_id` typed as integer but examples use ULID strings

**Description:** Nómina field table types `numbering_range_id` as integer while examples send ULID-like strings. Adjustment-payroll docs type it as string and also use ULID examples.

**Files:**

- `factus-docs/v2/nomina/crear-y-validar.md`
- `factus-docs/v2/nota-ajuste-nomina/crear-y-validar.md`

**Factus docs status:** Open

**SDK decision:** `CreatePayrollInput.numbering_range_id` and `CreateAdjustmentPayrollInput.numbering_range_id` are `string | number`.

---

### 22. Payment method `98` (CATS) mentioned only in nómina prose

**Description:** Nómina payment docs require bank fields when `payment_method_code` is `42`, `47`, or `98` (CATS – Nequi, Daviplata, etc.), but the main payment-methods table does not list `98`.

**Files:**

- `factus-docs/v2/nomina/crear-y-validar.md`
- `factus-docs/v2/nomina/descripcion-de-campos.md`
- `factus-docs/v2/tablas-de-referencia/tablas.md`

**Factus docs status:** Open

**SDK decision (assumed):** `PaymentMethodCode.Cats = "98"` from payroll prose. Prefer Factus adding `98` to the official payment table.

---

### 23. Payroll numbering-range document type `28` still absent

**Description:** Payroll numbering-range table publishes only `26` (Nómina Electrónica) and `27` (Nota de ajuste Nómina Electrónica). The adjustment-payroll create page explicitly describes elimination, but does not explain the migration from former deletion code `28` or explicitly identify its numbering-range code. Absence of `28` alone does not establish that v2 still accepts it.

**Files:**

- `factus-docs/v2/tablas-de-referencia/tablas.md`
- `factus-docs/v2/rangos-de-numeracion/nomina/**`
- `factus-docs/v2/nota-ajuste-nomina/**`

**Factus docs status:** Open

**SDK decision (assumed):** `PayrollNumberingRangeDocumentTypeCode` exposes the published `26` / `27` only; use `27` for adjustment-payroll elimination, without inventing v2 support for `28`. Payroll ranges use `factus.numberingRanges.payrolls` (`/v2/numbering-ranges/payrolls`).

---

### 24. Debit notes create examples include `send_email` but field tables omit it

**Description:** Create example sends `"send_email": false`; parameter tables and `descripcion-de-campos` do not document `send_email`. Email-content prose mentions `send_email = false` as a scenario.

**Files:**

- `factus-docs/v2/notas-debito/crear-y-validar.md`
- `factus-docs/v2/notas-debito/descripcion-de-campos.md`
- `factus-docs/v2/notas-debito/obtener-contenido-de-correo.md`

**Factus docs status:** Open

**SDK decision:** Optional `send_email?: boolean` on `CreateDebitNoteInput` (same pattern as bills / support docs). Prefer Factus adding the field to the create parameter table.

---

### 25. Payroll XML / Application Response download pages lack response schemas

**Description:** Payroll and adjustment-payroll pages document `GET .../download-xml` and the new `GET .../download-application-response`; all name `xml_base_64_encoded` in prose but omit the response envelope, file-name field, and schema/example.

**Files:**

- `factus-docs/v2/nomina/descargar-xml.md`
- `factus-docs/v2/nota-ajuste-nomina/descargar-xml.md`
- `factus-docs/v2/nomina/descargar-application-response.md`
- `factus-docs/v2/nota-ajuste-nomina/descargar-application-response.md`

**Factus docs status:** Open

**SDK decision:** Existing `DownloadPayrollXmlResponse` and `DownloadAdjustmentPayrollXmlResponse` remain `ApiResponse<DownloadXmlData>` (`file_name`, `xml_base_64_encoded`); that envelope is still assumed, not confirmed by these mirrors. New `DownloadPayrollApplicationResponseResponse` and `DownloadAdjustmentPayrollApplicationResponseResponse` are `unknown`, so both `downloadApplicationResponse()` methods require callers to narrow the result rather than assume an envelope. Routes are confirmed as `/v2/{payrolls|adjustment-payrolls}/:number/{download-xml|download-application-response}`.

---

### 26. Fiscal-responsibility codes alternate between the letter `O` and zero

**Description:** The refreshed reference table uses `O-15`, `O-23`, and `O-47`, while the glossary still describes the same responsibilities as `0-15`, `0-23`, and `0-47`. The characters are visually similar but represent different API values.

**Files:**

- `factus-docs/v2/tablas-de-referencia/tablas.md`
- `factus-docs/v2/glosario.md`

**Factus docs status:** Open

**SDK decision:** Follow the endpoint-specific reference table and use `O-13`, `O-15`, `O-23`, and `O-47` in public constants and curated SDK documentation. Prefer Factus correcting the glossary to match the reference table.

---

### 27. Payroll GET URL uses `:number` while the path-variable table still says `reference_code`

**Description:** Get pages changed the route to `/v2/payrolls/:number` and `/v2/adjustment-payrolls/:number`, but intro prose and the path-variable table still name `reference_code`. Delete remains `/reference/:reference_code`.

**Files:**

- `factus-docs/v2/nomina/ver.md`
- `factus-docs/v2/nota-ajuste-nomina/ver.md`

**Factus docs status:** Open

**SDK decision:** `payrolls.get(number)` and `adjustmentPayrolls.get(number)` follow the documented URL. Delete still uses `reference_code`.

---

### 28. Payroll and adjustment-payroll PDF downloads lack response schemas

**Description:** Both payroll families now document `GET .../:number/download-pdf` and name `pdf_base_64_encoded`, but omit the response envelope, file-name field, and schema/example (same thin pattern as #25). The missing adjustment-payroll PDF page is resolved.

**Files:**

- `factus-docs/v2/nomina/descargar-pdf.md`
- `factus-docs/v2/nota-ajuste-nomina/descargar-pdf.md`

**Factus docs status:** Open

**SDK decision:** Existing `payrolls.downloadPdf()` returns `DownloadPayrollPdfResponse = ApiResponse<DownloadPdfData>` (`file_name`, `pdf_base_64_encoded`); its envelope remains assumed from the shared download contract. New `adjustmentPayrolls.downloadPdf()` returns `DownloadAdjustmentPayrollPdfResponse = unknown` and does not promise that envelope or those fields. Both routes are confirmed as `/v2/{payrolls|adjustment-payrolls}/:number/download-pdf`.

---

### 29. Health payment-methods catalog collapsed from 12 codes to 4

**Description:** The “Métodos de pago en salud” table now publishes only `01`–`04` with rewritten labels. Former codes `05`–`12` disappeared. This catalog is distinct from DIAN `PaymentMethodCode`.

**Files:**

- `factus-docs/v2/tablas-de-referencia/tablas.md`

**Factus docs status:** Open

**SDK decision:** `HealthPaymentMethodCode` (`01`–`04`) on `DocumentHealthData.payment_method_code`. Do not reuse DIAN payment-method constants.

---

### 30. `health.without_contract_code` and optional `contract_number` are incomplete across families

**Description:** Bill sector-salud pages make `contract_number` optional and add `without_contract_code` (required when the contract number is omitted). Credit-note health tables still require `contract_number` and omit the new field. SS examples send both `contract_number` and `without_contract_code: "07"` together.

**Files:**

- `factus-docs/v2/facturas/descripcion-de-campos.md`
- `factus-docs/v2/facturas/tipos-de-factura/ss-cufe.md`
- `factus-docs/v2/facturas/tipos-de-factura/ss-reporte.md`
- `factus-docs/v2/facturas/tipos-de-factura/ss-sin-aporte.md`
- `factus-docs/v2/notas-credito/crear-y-validar.md`
- `factus-docs/v2/notas-credito/descripcion-de-campos.md`
- `factus-docs/v2/tablas-de-referencia/tablas.md`

**Factus docs status:** Open

**SDK decision:** Shared `DocumentHealthData` has optional `contract_number` and `without_contract_code` (`HealthWithoutContractCode`, `01`–`07`).

---

### 31. Support-document item `period` is not mirrored on adjustment notes

**Description:** Support-document create/field pages add optional `items.*.period.generation_mode` (`1` / `2`) and `start_date`. Adjustment-note field tables do not.

**Files:**

- `factus-docs/v2/documentos-soporte/crear-validar.md`
- `factus-docs/v2/documentos-soporte/descripcion-de-campos.md`
- `factus-docs/v2/notas-ajuste-documentos-soporte/*`

**Factus docs status:** Open

**SDK decision:** `SupportDocumentItemInput.period` only. Adjustment-note items stay on shared `DocumentItemInput`.

---

### 32. Payroll numbering-range update response still lists billing-only fields

**Description:** Create and GET now agree on `id`, `document`, `document_name`, `prefix`, `current`, `is_active`, `deleted_at`, `created_at`, and `updated_at`; the earlier create/GET mismatch is resolved. The consecutive-update response still lists `from`, `to`, `resolution_number`, `start_date`, `end_date`, `technical_key`, and `is_expired`, unlike both current payroll schemas, and omits `deleted_at`. Unclear whether update intentionally returns a different resource shape or retains a billing-range schema.

**Files:**

- `factus-docs/v2/rangos-de-numeracion/nomina/crear-rango.md`
- `factus-docs/v2/rangos-de-numeracion/nomina/ver-rango.md`
- `factus-docs/v2/rangos-de-numeracion/nomina/actualizar-consecutivo.md`

**Factus docs status:** Open

**SDK decision (assumed):** Payroll range create, GET, and `updateCurrent()` all return `ApiResponse<PayrollNumberingRange>`. The actual shared type retains optional `from`, `to`, `resolution_number`, `start_date`, `end_date`, `technical_key`, and `is_expired`; `current`, `document_name`, `deleted_at`, `created_at`, and `updated_at` are also optional. `document` is `PayrollNumberingRangeDocumentTypeCode | string`, and `is_active` is `boolean | 0 | 1`. This compatibility type does not establish that billing-only fields are returned on create/GET or explain the different update schema.

---

### 33. Payroll `deductions.dedu` array change is incomplete in child paths and responses

**Description:** Both payroll request tables now type `deductions.dedu` as `array`, but child paths still use `deductions.dedu.percentage`, `.amount`, and `.deduction_type_code` without `.*`. The create response still types `data.deductions.dedu` as `object` with object child paths. No example demonstrates this deduction or explains whether multiple request entries are aggregated into one response object. Adjustment-payroll create is elimination-only and documents no deductions payload; it is not evidence of a stale request shape.

**Files:**

- `factus-docs/v2/nomina/crear-y-validar.md`
- `factus-docs/v2/nomina/descripcion-de-campos.md`
- `factus-docs/v2/nota-ajuste-nomina/crear-y-validar.md`

**Factus docs status:** Open

**SDK decision (assumed):** `PayrollDeductionsInput.dedu?: PayrollPensionSolidarityFundDeductionInput[]` follows the request tables; `PayrollDeductions.dedu?: PayrollConcept` stays an object per the response table until confirmed otherwise. Do not normalize the response or add deductions to adjustment-payroll elimination inputs.

---

### 34. Reception view and event docs disagree on the shared identifier type

**Description:** The new reception view page documents `GET /v2/receptions/bills/:id`, types `id` as `integer`, and obtains it from list `data.data.*.id`. Event docs now explicitly source `bill_id` from the bill's `data.id` but still type it as `string`. It is unclear whether this is just stringification of the same reception ID; the view page has no response schema/example to confirm its shape or identifier fields.

**Files:**

- `factus-docs/v2/recepcion-de-documentos/ver-factura.md`
- `factus-docs/v2/recepcion-de-documentos/ver-facturas.md`
- `factus-docs/v2/recepcion-de-documentos/emitir-evento.md`

**Factus docs status:** Open

**SDK decision:** `reception.get(id: number)` calls `GET /v2/receptions/bills/:id` and returns `Promise<ViewReceptionBillResponse>`, where `ViewReceptionBillResponse = unknown`; it does not reuse the list-item response schema. `EmitEventParams.bill_id` accepts `string | number` and is documented in the SDK as `ReceptionBill.id` (`data.id`), not the separate `ReceptionBill.bill_id` property or invoice `number`. Narrow the view result before accessing response fields.

---

### 35. Numbering-range list example and field tables disagree on resource fields

**Description:** The new billing-range list example returns a document name in `document`, boolean `is_expired` / `is_active`, and `is_external` / `deleted_at`. Its list table omits the latter fields and describes flags as `1` / `0`; create/update tables instead describe `document` as a code and provide `document_name`. Soft-delete prose calls non-deleted ranges “activos”, which can be confused with the separate `is_active` filter. The restore page does confirm a message-only response, not a returned range.

**Files:**

- `factus-docs/v2/rangos-de-numeracion/facturacion/obtener-rangos.md`
- `factus-docs/v2/rangos-de-numeracion/facturacion/crear-rango.md`
- `factus-docs/v2/rangos-de-numeracion/facturacion/actualizar-consecutivo.md`
- `factus-docs/v2/rangos-de-numeracion/facturacion/restaurar-rango.md`

**Factus docs status:** Open

**SDK decision:** The actual shared `NumberingRange.document` remains `NumberingRangeDocumentTypeCode` (code-only), despite its comment acknowledging names in list responses; the list example's name-valued field is not represented by a wider SDK type. `document_name` is optional; `is_expired` remains `boolean`, while `is_active` is `boolean | 0 | 1`. `is_external?: boolean` and `deleted_at?: string | null` accommodate the list example without guaranteeing them on create/GET. `NumberingRangeFilters.trashed?: "with" | "only"` is independent of `is_active`; omission means non-deleted, not necessarily enabled. `numberingRanges.restore(id: number)` uses confirmed `PUT /v2/numbering-ranges/:numbering_range_id/restore` with no body and returns `RestoreNumberingRangeResponse = { message: string }`, not `ApiResponse<NumberingRange>`.

---

### 36. Numbering-range list example differs from the documented pagination envelope

**Description:** The new numbering-range example places `data: []` and `pagination` at the top level and uses placeholder strings in `pagination.links`. The adjustment-note list example instead wraps both under `data` inside `{ status, message, data }`, with link objects containing `url`, `label`, `active`, and optional `page`. Numbering-range docs do not state whether this is a real endpoint-specific envelope or an abbreviated example; the difference affects pagination consumers.

**Files:**

- `factus-docs/v2/rangos-de-numeracion/facturacion/obtener-rangos.md`
- `factus-docs/v2/notas-ajuste-documentos-soporte/ver-y-filtrar.md`

**Factus docs status:** Open

**SDK decision (assumed):** Keep `numberingRanges.list()` as `ApiResponse<PaginatedData<NumberingRange>>` and `listAll()` reading `response.data.data` / `response.data.pagination.last_page`, with structured `PaginationLink[]`. Do not change all list envelopes or treat `["..."]` as a confirmed string-link contract; verify the billing-range list response in sandbox before changing its pagination handling.

---

### 37. New FAQ mixes stale v1 contracts with confirmed v2 endpoints

**Description:** The FAQ says no debit-note endpoint is published, then later says debit and credit notes are available by API; the v2 endpoint index and debit-note create page explicitly publish `POST /v2/debit-notes/validate`. Other FAQ answers still use `identification_document_id`, `legal_organization_id`, and `standard_code_id` (with standard ID `1`), although v2 uses code fields and standard code `999` for the taxpayer's own standard. Its tax answer names `is_exclude`, while endpoint tables/examples use `is_excluded`.

**Files:**

- `factus-docs/v2/buenas-practicas/preguntas-frecuentes.md`
- `factus-docs/v2/endpoints.md`
- `factus-docs/v2/notas-debito/crear-y-validar.md`
- `factus-docs/v2/buenas-practicas/cambios-v2-v1.md`
- `factus-docs/v2/facturas/descripcion-de-campos.md`
- `factus-docs/v2/tablas-de-referencia/tablas.md`

**Factus docs status:** Open

**SDK decision:** Keep debit-note creation on `/v2/debit-notes/validate`; use `identification_document_code`, `legal_organization_code`, `standard_code` (`"999"` for the taxpayer's own standard), and `is_excluded`. Do not add legacy ID fields or an `is_exclude` alias from FAQ prose.

---

### 38. Endpoint index claims completeness but omits documented routes

**Description:** The new endpoint index calls itself a complete list of API v2 endpoints, but omits both payroll families' `download-application-response`, adjustment-payroll `download-pdf`, reception single-bill GET, and billing numbering-range restore. Each has an endpoint-specific page with explicit method and sandbox/production URLs. These are concrete index omissions, not requests for undocumented functionality.

**Files:**

- `factus-docs/v2/endpoints.md`
- `factus-docs/v2/nomina/descargar-application-response.md`
- `factus-docs/v2/nota-ajuste-nomina/descargar-application-response.md`
- `factus-docs/v2/nota-ajuste-nomina/descargar-pdf.md`
- `factus-docs/v2/recepcion-de-documentos/ver-factura.md`
- `factus-docs/v2/rangos-de-numeracion/facturacion/restaurar-rango.md`

**Factus docs status:** Open

**SDK decision:** Follow the endpoint-specific pages: expose `GET /v2/{payrolls|adjustment-payrolls}/:number/download-application-response`, `GET /v2/adjustment-payrolls/:number/download-pdf`, `GET /v2/receptions/bills/:id`, and `PUT /v2/numbering-ranges/:numbering_range_id/restore`. The final SDK implements all five routes; absence from the index is not evidence they are unavailable. Response choices remain as recorded in #25, #28, #34, and #35.

---

### 39. Credit-note mandate condition depends on undocumented operation fields

**Description:** Both credit-note tables now document optional `items.*.mandate`, but say it is required for `items.*.scheme_id = 1` with `operation_type = 11` or `SS-Recaudo`. Neither table defines a request `operation_type` or `items.*.scheme_id`; instead, credit-note operation is documented as `customization_id` (`20` / `22` in the linked catalog). It is unclear whether mandate requirements inherit the referenced bill's operation or whether credit-note request fields are missing. The bill's operation codes cannot simply be substituted for credit-note customization codes.

**Files:**

- `factus-docs/v2/notas-credito/crear-y-validar.md`
- `factus-docs/v2/notas-credito/descripcion-de-campos.md`
- `factus-docs/v2/tablas-de-referencia/tablas.md`

**Factus docs status:** Open

**SDK decision (assumed):** `CreateCreditNoteInput` retains optional `customization_id?: CreditNoteOperationCode` and no top-level `operation_type`. Its `items: DocumentItemInput[]` already permit optional `scheme_id?: string | number` and `mandate?: DocumentItemMandateInput`; the SDK does not enforce the undocumented condition or derive it from a referenced bill. Do not widen credit-note operation codes to `11` / `SS-Recaudo` or invent a new top-level field without confirmation.
