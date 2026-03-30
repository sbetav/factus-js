---
"factus-js": minor
---

Stringify all DIAN catalog constant `value` fields (e.g. `IdentityDocumentTypeId`, `CreditNoteOperationTypeCode`, `ProductStandardId`, `OrganizationTypeId`, etc.) so runtime values and inferred TypeScript unions are `string`, matching the Factus PHP API’s string handling and improving compatibility with Zod, React Hook Form, and similar tooling.

**Breaking change (TypeScript):** code that passed or compared **numbers** for these codes must use **strings** (e.g. `"3"` instead of `3`, or `SomeConstant.Entry.value` which is now a string). `RadianEventUpdateInput.identification_document_code` and `EmitEventInput.identification_document_code` are now typed as `string`; invoice mandate `identification_document_id` fields use `string` as well.

Docs and examples were updated to use `.value` where payloads expect scalars.
