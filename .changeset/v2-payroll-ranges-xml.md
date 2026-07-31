---
"factus-js": minor
---

Align the SDK with the July 31 2026 Factus v2 docs sync (payroll numbering ranges, XML downloads, catalog updates).

**Breaking changes**

- `CreateCreditNoteInput.bill_id` → `bill_number?: string` (matches debit notes and current field tables)
- `PayrollLeaveTypeCode.CompensatedVacation` renamed to `PaidLeave` (`"2"` = licencia remunerada); added `UnpaidLeave` (`"3"`)
- `DocumentBeneficiary.identification_document_code` now uses `HealthIdentityDocumentCode` (not DIAN numeric codes)

**New APIs**

- `factus.numberingRanges.payrolls` — list/get/create/updateCurrent/toggleStatus/delete for `/v2/numbering-ranges/payrolls`
- `factus.payrolls.downloadXml()` and `factus.adjustmentPayrolls.downloadXml()`

**Constants / types**

- `PayrollNumberingRangeDocumentTypeCode` (`26` / `27`)
- `HealthCoverageCode` (`01`–`17`) and `HealthIdentityDocumentCode` (includes `PT`)
- `ProviderInput.municipality_code` optional

**Docs**

- Payroll numbering-ranges submodule guides
- Download-XML pages for payrolls and adjustment payrolls
- Reference tables for health coverage / identity and payroll range document types
