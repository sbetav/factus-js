# Changelog

## 1.1.0

### Minor Changes

- e0b9497: Align bill naming across types, constants, module docs, and examples while keeping backwards compatibility.
  - Add canonical `Bill*` public types and keep `Invoice*` aliases as deprecated.
  - Add canonical `BillDocumentType` and `BillDocumentTypeInfo`, and deprecate `InvoiceDocumentType` and `InvoiceDocumentTypeInfo`.
  - Rename canonical type entrypoint to `types/bill` and keep `types/invoice` as a compatibility re-export.
  - Update docs/comments/examples to use bill terminology consistently.

## 1.0.0

### Major Changes

- 94da43d: **Breaking changes**
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

## 0.3.0

### Minor Changes

- 2a56ba0: Stringify all DIAN catalog constant `value` fields (e.g. `IdentityDocumentTypeId`, `CreditNoteOperationTypeCode`, `ProductStandardId`, `OrganizationTypeId`, etc.) so runtime values and inferred TypeScript unions are `string`, matching the Factus PHP API’s string handling and improving compatibility with Zod, React Hook Form, and similar tooling.

  **Breaking change (TypeScript):** code that passed or compared **numbers** for these codes must use **strings** (e.g. `"3"` instead of `3`, or `SomeConstant.Entry.value` which is now a string). `RadianEventUpdateInput.identification_document_code` and `EmitEventInput.identification_document_code` are now typed as `string`; invoice mandate `identification_document_id` fields use `string` as well.

  Docs and examples were updated to use `.value` where payloads expect scalars.

## 0.2.0

### Minor Changes

- 3c31b65: Add `abbreviation` to each entry in `IdentityDocumentTypeId` and `SupportDocumentIdentityTypeId` for UI labels and display. Document the mapping in the reference tables catalog page.

## 0.1.3

### Patch Changes

- b8d9a96: Add validation error handling to FactusError and update documentation
  - Introduced `validationErrors` property in `FactusError` to capture DIAN validation rule violations.
  - Enhanced error handling in `HttpClient` to populate `validationErrors` from API responses.
  - Updated documentation in `error-handling.mdx` to reflect changes and provide examples of validation error handling.
  - Added unit tests to verify the correct behavior of validation error handling in various scenarios.

## 0.1.2

### Patch Changes

- c92791f: Refactor sandbox tests and error handling:
  - Remove deprecated error assertion helper
  - Enhance result reporting
  - Improve error message handling in HttpClient.

## 0.1.1

### Patch Changes

- 0de24e9: Fix auth request format, race condition, type correctness, and developer experience improvements
  - Send OAuth token requests as `application/x-www-form-urlencoded` instead of JSON to match the Factus API documentation
  - Deduplicate concurrent authentication requests to prevent race conditions when multiple API calls trigger token refresh simultaneously
  - Fix response type wrapping for support document and adjustment note download methods to match the invoice/credit note pattern
  - Change `CreditNoteOperationTypeCode` constant values from strings to numbers, matching the API contract and making the constant usable with `CreateCreditNoteInput.customization_id`
  - Change `AdjustmentNoteReasonCode` constant values from numbers to strings, matching the API request format
  - Add `Object.setPrototypeOf` to `FactusError` for safe prototype chain in CJS environments
  - Replace unsafe type casts in the catalog module with a generic `toQueryParams` helper
  - Add `payment_form` field to `CreateCreditNoteInput`
  - Replace `any[]` with proper types for `adjustment_notes` in support document types
  - Widen `RadianEventUpdateInput.identification_document_code` from narrow `IdentityDocumentTypeId` union to `number` to support additional API codes
  - Add `@see` / `{@link}` references to deprecated type aliases
  - Enable sourcemaps in build output
  - Mark `HttpClient` class as `@internal`

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-03-19

### Added

- Initial public release of the TypeScript/JavaScript SDK for the Factus Colombian e-invoicing API.
- `FactusClient` with modules for bills, credit notes, adjustment notes, support documents, catalog, company, numbering ranges, reception, and subscription.

[0.1.0]: https://github.com/sbetav/factus-js/releases/tag/factus-js-v0.1.0
