---
"factus-js": major
---

Migrate `factus-js` from Factus API v1 to Factus API v2.

This major release aligns the SDK with the full v2 platform, including breaking changes to modules, endpoints, payloads, response shapes, and constants.

- Update the client surface to the v2 API across bills, credit notes, support documents, adjustment notes, company, numbering ranges, reception, subscription, acquirer, and documents.
- Replace the old `catalog` runtime module with the v2 `acquirer` module, and move reference data usage toward typed exported constants and reference tables.
- Add and document the new v2 flows for attached-document XML downloads, generic `documents.downloadXml()` lookups by global identifier, and numbering range status toggles.
- Reshape public types to match v2 payloads and responses, including `CreateCreditNoteInput.bill_id`, `EmailContentData.attached_document`, RADIAN `claim_concept_code`, restricted manual reception event codes, and `bills.emitRadianEvent()` returning `ApiResponse<BillEvent[]>`.
- Refresh the quick start, module guides, endpoint references, response examples, and docs navigation so the published package and its documentation consistently reflect the v2 migration end to end.
