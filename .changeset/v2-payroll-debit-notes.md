---
"factus-js": minor
---

Align the SDK with the July 2026 Factus v2 docs sync for debit notes, electronic payroll, and payroll elimination notes.

**Breaking change:** remove `NumberingRangeDocumentTypeCode` entries `26` / `27` / `28` (`Payroll`, `PayrollAdjustmentNote`, `PayrollDeletionNote`). Factus dropped those codes from the official numbering-range document-type table; payroll ranges now use string IDs in examples.

**New modules**

- `factus.debitNotes` — create, list, get, downloads, email, and delete for `/v2/debit-notes/*` (create uses `bill_number`, not `bill_id`)
- `factus.payrolls` — create, list, get, and delete for `/v2/payrolls` with typed settlement, worker, accruals, and deductions
- `factus.adjustmentPayrolls` — create, list, get, and delete for `/v2/adjustment-payrolls` (nómina de eliminación)

**Constants**

- Debit note operation and correction codes (`DebitNoteOperationCode`, `DebitNoteCorrectionCode`)
- Payroll reference catalogs (`PayrollPeriodCode`, `WorkerTypeCode`, accrual/deduction subtype codes, etc.)
- `PaymentMethodCode.Cats` (`"98"`) for payroll bank payments mentioned in nómina docs

**Docs**

- Module guides for debit notes, payrolls, and adjustment payrolls
- Reference tables split into overview, general, and payroll pages
