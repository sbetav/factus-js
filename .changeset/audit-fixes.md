---
"factus-js": patch
---

Fix auth request format, race condition, type correctness, and developer experience improvements

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
