---
"factus-js": patch
---

Add validation error handling to FactusError and update documentation

- Introduced `validationErrors` property in `FactusError` to capture DIAN validation rule violations.
- Enhanced error handling in `HttpClient` to populate `validationErrors` from API responses.
- Updated documentation in `error-handling.mdx` to reflect changes and provide examples of validation error handling.
- Added unit tests to verify the correct behavior of validation error handling in various scenarios.
