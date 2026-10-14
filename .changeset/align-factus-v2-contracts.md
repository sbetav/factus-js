---
"factus-js": minor
---

Align the SDK with the refreshed Factus API v2 documentation.

Breaking input-type corrections:

- `ProviderInput.legal_organization_code` is now required for support documents and their adjustment notes. Supply `company` when the organization code is `"1"` (legal entity), as required by the API.
- `PayrollDeductionsInput.dedu` is now an array. Migrate `dedu: { ... }` to `dedu: [{ ... }]`; the documented response type remains unchanged.

Add numbering-range restoration and soft-delete filters, payroll Application Response downloads, adjustment-payroll PDF downloads, and reception invoice details. New downloads and reception details return `unknown` until Factus documents their complete response schemas.

Allow string or numeric numbering-range creation counters and clarify that `current` is the next available consecutive number. Accept numeric reception IDs when emitting events and expose the optional numbering-range `is_external` flag.
