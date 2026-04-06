---
"factus-js": major
---

**Breaking changes**

- **Constants** now use direct string values. Replace `Constant.Key.value` with `Constant.Key` everywhere (e.g. `PaymentFormCode.CashPayment` instead of `PaymentFormCode.CashPayment.value`). Human-readable descriptions and abbreviations are available from the new `*Info` companion exports (e.g. `PaymentFormCodeInfo`).
- `bills.getByNumber()` renamed to `bills.get()`.
- `FactusError` constructor signature changed to an options object: `new FactusError(message, { statusCode, errors?, validationErrors?, cause? })`.
- Deprecated `Invoice` and `CreditNote` types removed from `types/invoice.ts` and `types/credit-note.ts`.

**New features**

- `listAll()` async generator on paginated modules (`bills`, `creditNotes`, `supportDocuments`, `adjustmentNotes`, `reception`, `numberingRanges`) for transparent, automatic pagination.
- `AbortSignal` support via optional `options.signal` parameter on every module method.
- Automatic 401 retry with silent token refresh — the SDK retries once after refreshing credentials on a 401 response.
- Auth token request deduplication: concurrent calls share a single in-flight token request.
- Runtime validation of required `FactusClientConfig` fields (`clientId`, `clientSecret`, `username`, `password`) at construction time.
- `cause` property on `FactusError` for wrapping low-level errors.
- New `*Info` companion exports with human-readable constant descriptions and abbreviations (`PaymentFormCodeInfo`, `IdentityDocumentTypeIdInfo`, etc.).

**Type improvements**

- `is_excluded` tightened to `0 | 1` union.
- `dv` and `municipality_id` standardized to `string`.
- All manually duplicated `{ status, message, data }` response interfaces replaced with `ApiResponse<T>` type aliases.
- New shared types: `EmailContentData`, `CodeNameObject`, `CodeNameIdObject`.

**Package**

- `engines: { "node": ">=18" }` added to `package.json`.
- `sideEffects: false` for better tree-shaking.
- CI now runs on Node.js 22 LTS with npm provenance enabled on releases.
