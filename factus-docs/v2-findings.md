# Factus API v2 Docs Findings

This file tracks **reportable** ambiguities, inconsistencies, and likely docs typos in the local Factus v2 mirror at `factus-docs/v2/` (synced from developers.factus.com.co).

### Purpose

- list what to report back to Factus
- record the matching **SDK decision** for each open item
- flag items where the SDK choice is **assumed** because docs do not confirm the round-trip contract

### SDK working rule

When v2 docs disagree, prefer this order:

1. endpoint-specific field tables
2. endpoint-specific request/response examples
3. broader migration/best-practice docs
4. generic prose pages with simplified wording

Do not preserve obvious docs typos in public types just for fidelity to the wording.

---

### 1. Adjustment note delete page still shows a v1 route in v2 docs

**Description:** Delete docs document `v1/adjustment-notes/reference/:reference_code` instead of a v2 path.

**Files:**

- `factus-docs/v2/notas-ajuste-documentos-soporte/eliminar.md`

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

**Description:** Some pages label the field as `integer`/`int`; examples use string codes (`"13"`, `"31"`). Beneficiary health codes (`CC`, `SI`, …) are a separate catalog — see #19.

**Files:**

- `factus-docs/v2/recepcion-de-documentos/emitir-evento.md`
- `factus-docs/v2/facturas/aceptacion-tacita.md`
- Document create docs under `facturas`, `notas-credito`, `documentos-soporte`, `notas-ajuste-documentos-soporte`

**Factus docs status:** Open

**SDK decision:** `LiteralUnion<IdentityDocumentCode>` / string-oriented party inputs.

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

**SDK decision:** `EmailContentData = { subject: string; attached_document?: string }`.

---

### 7. Some examples use numeric literals where field tables describe strings

**Description:** Examples mix numeric literals with string field tables (`payment_form: 1`, numeric `allowance_charges.amount`, numeric `items.*.scheme_id` on Mandatos / SS-Recaudo, etc.).

**Files:**

- Examples across `factus-docs/v2/facturas/**`, Mandatos, and SS-Recaudo pages

**Factus docs status:** Open

**SDK decision:** Affected request fields stay `string | number` where docs/examples mix types. `DocumentItemInput.scheme_id` should follow the same rule (still `string`-only in the package today).

---

### 8. Acceptance / tacit-event docs are internally contradictory

**Description:** Bills and reception pages disagree on route (`/v2/bills/...` vs `/v2/receptions/bills/...`), identifier (`:number` vs `:bill_id`), method (`POST` vs `PATCH`), and whether tacit acceptance (`034`) is user-emitted or automatic-only.

**Files:**

- `factus-docs/v2/facturas/aceptacion-tacita.md`
- `factus-docs/v2/recepcion-de-documentos/emitir-evento.md`

**Factus docs status:** Open

**SDK decision:** `reception.emitEvent()` supports manual codes `030`–`033` only (excludes tacit `034`). Tacit acceptance is not exposed as a manual reception event.

---

### 9. Auth token lifetime is inconsistent

**Description:** Auth prose says the token lasts 1 hour; the example shows `"expires_in": 600`.

**Files:**

- `factus-docs/v2/autenticacion/auth.md`
- `factus-docs/v2/autenticacion/refresh-token.md`

**Factus docs status:** Open

**SDK decision:** SDK refreshes from `expires_in` in the token response; no hard-coded TTL.

---

### 10. Support-document field tables omit `provider.legal_organization_code`

**Description:** Field description omits `provider.legal_organization_code`; create examples include it.

**Files:**

- `factus-docs/v2/documentos-soporte/crear-validar.md`
- `factus-docs/v2/documentos-soporte/descripcion-de-campos.md`

**Factus docs status:** Open

**SDK decision:** Provider input types include `legal_organization_code` from examples.

---

### 11. Generic documents XML download page lacks a clear response schema

**Description:** Path is documented; response field name/schema is missing compared with family-specific XML pages.

**Files:**

- `factus-docs/v2/documentos/descargar-xml.md`

**Factus docs status:** Open

**SDK decision:** `documents.downloadXml()` typed as `ApiResponse<DownloadXmlData>` with `xml_base_64_encoded`.

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

**Description:** Create request documents `items.*.discount_amount` (with optional `discount_rate`); create/view responses document `data.items.*.discount` and `data.items.*.discount_rate`, with no mapping note that input `discount_amount` becomes response `discount`.

**Files:**

- `factus-docs/v2/facturas/descripcion-de-campos.md`
- `factus-docs/v2/facturas/crear-y-validar.md`
- `factus-docs/v2/notas-credito/descripcion-de-campos.md`

**Factus docs status:** Open

**SDK decision (assumed):** `DocumentItemInput.discount_amount?` on create; `DocumentItemResponse.discount?` on read; no `discount_amount` on response types.

---

### 17. Bill `currency` is documented on create but absent from response schemas

**Description:** Optional `currency` appears on bill/credit-note create tables and examples for graphic-representation totals; create/view response tables omit `data.currency`. Unclear whether the API echoes it, uses it only for PDF generation, or drops it after create.

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

**Factus docs status:** Open

**SDK decision:** Follow `crear-y-validar` — `factus.payrolls.create()` posts to `/v2/payrolls`. Confirm with sandbox if the field-description path is a stale typo.

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

**Description:** Payroll numbering-range table publishes `26` (Nómina Electrónica) and `27` (Nota de ajuste Nómina Electrónica). Former code `28` (payroll deletion) is still missing while `/v2/adjustment-payrolls` exists and uses document type `27` in practice.

**Files:**

- `factus-docs/v2/tablas-de-referencia/tablas.md`
- `factus-docs/v2/rangos-de-numeracion/nomina/**`
- `factus-docs/v2/nota-ajuste-nomina/**`

**Factus docs status:** Open

**SDK decision:** `PayrollNumberingRangeDocumentTypeCode` exposes `26` / `27` only. Payroll ranges use `factus.numberingRanges.payrolls` (`/v2/numbering-ranges/payrolls`).

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

### 25. Payroll and adjustment-payroll XML download pages lack a response schema table

**Description:** New pages document `GET .../download-xml` and tell integrators to decode `xml_base_64_encoded`, but omit a full response schema (same thin pattern as some other XML pages).

**Files:**

- `factus-docs/v2/nomina/descargar-xml.md`
- `factus-docs/v2/nota-ajuste-nomina/descargar-xml.md`

**Factus docs status:** Open

**SDK decision:** `payrolls.downloadXml()` / `adjustmentPayrolls.downloadXml()` typed as `ApiResponse<DownloadXmlData>` with `xml_base_64_encoded`.

---

### 26. Fiscal-responsibility codes alternate between the letter `O` and zero

**Description:** The refreshed reference table uses `O-15`, `O-23`, and `O-47`, while the glossary still describes the same responsibilities as `0-15`, `0-23`, and `0-47`. The characters are visually similar but represent different API values.

**Files:**

- `factus-docs/v2/tablas-de-referencia/tablas.md`
- `factus-docs/v2/glosario.md`

**Factus docs status:** Open

**SDK decision:** Follow the endpoint-specific reference table and use `O-13`, `O-15`, `O-23`, and `O-47` in public constants and curated SDK documentation. Prefer Factus correcting the glossary to match the reference table.
