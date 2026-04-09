---
"factus-js": minor
---

Align bill naming across types, constants, module docs, and examples while keeping backwards compatibility.

- Add canonical `Bill*` public types and keep `Invoice*` aliases as deprecated.
- Add canonical `BillDocumentType` and `BillDocumentTypeInfo`, and deprecate `InvoiceDocumentType` and `InvoiceDocumentTypeInfo`.
- Rename canonical type entrypoint to `types/bill` and keep `types/invoice` as a compatibility re-export.
- Update docs/comments/examples to use bill terminology consistently.
