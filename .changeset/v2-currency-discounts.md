---
"factus-js": minor
---

Add optional foreign-currency input on bill create and flexible item discount fields aligned with the June 2026 Factus v2 docs sync.

- `CreateBillInput.currency` (`BillCurrencyInput`) for graphic-representation totals in another currency
- `DocumentItemInput.discount_amount` and optional `discount_rate` for percentage or fixed-amount item discounts
