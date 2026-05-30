# factus-js

[![npm version](https://img.shields.io/npm/v/factus-js.svg)](https://www.npmjs.com/package/factus-js)
[![license](https://img.shields.io/npm/l/factus-js.svg)](https://github.com/sbetav/factus-js/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/factus-js.svg)](https://www.npmjs.com/package/factus-js)

TypeScript/JavaScript SDK for the [Factus](https://www.factus.com.co/) API for Colombian e-invoicing.

> Full documentation: [https://factusjs.vercel.app](https://factusjs.vercel.app)

## Features

- Full coverage of the Factus API v2: bills, credit notes, support documents, adjustment notes, RADIAN reception, numbering ranges, subscriptions and more.
- Automatic OAuth2 authentication with refresh and one-time retry on expired token.
- Strong TypeScript typing for payloads and responses.
- Typed DIAN constants such as `PaymentFormCode`, `IdentityDocumentCode`, `EventCode`, etc.
- Automatic pagination iterator with `listAll()` for paginated modules.
- `AbortSignal` support and client-level timeout.
- Runtime compatibility with Node.js >= 18, Deno, and Bun.
- Zero runtime dependencies.

## Installation

```bash
# npm
npm install factus-js

# yarn
yarn add factus-js

# pnpm
pnpm add factus-js

# bun
bun add factus-js
```

## Basic usage

```ts
import {
  FactusClient,
  CustomerTributeCode,
  IdentityDocumentCode,
  OrganizationTypeCode,
  PaymentFormCode,
  PaymentMethodCode,
  ProductStandardCode,
} from "factus-js";

const factus = new FactusClient({
  clientId: process.env.FACTUS_CLIENT_ID!,
  clientSecret: process.env.FACTUS_CLIENT_SECRET!,
  username: process.env.FACTUS_USERNAME!,
  password: process.env.FACTUS_PASSWORD!,
  environment: "sandbox", // use "production" for live usage
});

const bill = await factus.bills.create({
  numbering_range_id: 8,
  reference_code: "INV-001",
  payment_details: [
    {
      payment_form: PaymentFormCode.CreditPayment,
      payment_method_code: PaymentMethodCode.Transfer,
      amount: "50000.00",
      due_date: "2026-12-31",
    },
  ],
  customer: {
    identification_document_code: IdentityDocumentCode.CitizenshipCard,
    identification: "123456789",
    names: "Alan Turing",
    address: "Calle 1 # 2-68",
    email: "alanturing@example.com",
    phone: "1234567890",
    legal_organization_code: OrganizationTypeCode.NaturalPerson,
    tribute_code: CustomerTributeCode.NotApplicable,
    municipality_code: "68679",
  },
  items: [
    {
      code_reference: "PROD-001",
      name: "Test product",
      quantity: 1,
      discount_rate: 0,
      price: 50000,
      unit_measure_code: "94",
      standard_code: ProductStandardCode.TaxpayerAdoption,
      taxes: [{ code: "01", rate: "19.00" }],
    },
  ],
});

console.log(bill.data.number);
```

## Available modules

| Module                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `factus.bills`            | Electronic sales bills                    |
| `factus.creditNotes`      | Credit notes                              |
| `factus.supportDocuments` | Support documents                         |
| `factus.adjustmentNotes`  | Adjustment notes for support documents    |
| `factus.reception`        | RADIAN reception and received-bill events |
| `factus.acquirer`         | Acquirer lookup by identification         |
| `factus.company`          | Company data and logo upload              |
| `factus.numberingRanges`  | DIAN numbering ranges                     |
| `factus.subscription`     | Subscription and quota status             |
| `factus.documents`        | Generic XML download by track identifier  |

## DIAN constants

Constants are direct typed values. Use them directly in payloads, without `.value`.

```ts
import {
  EventCode,
  IdentityDocumentCode,
  IdentityDocumentCodeInfo,
  PaymentFormCode,
  PaymentFormCodeInfo,
} from "factus-js";

const documentCode = IdentityDocumentCode.CitizenshipCard;
const abbreviation = IdentityDocumentCodeInfo[documentCode].abbreviation;

const paymentForm = PaymentFormCode.CreditPayment;
const paymentLabel = PaymentFormCodeInfo[paymentForm].description;
```

## Error handling

```ts
import { FactusClient, FactusError } from "factus-js";

try {
  await factus.bills.create({
    // ...
  });
} catch (error) {
  if (error instanceof FactusError) {
    console.error(error.statusCode);
    console.error(error.message);
    console.error(error.validationErrors);
  }
}
```

## Exports

```ts
import {
  FactusClient,
  FactusError,
  EventCode,
  IdentityDocumentCode,
  PaymentFormCode,
  PaymentMethodCode,
  type FactusClientConfig,
  type RequestOptions,
} from "factus-js";
```

## License

[MIT](https://github.com/sbetav/factus-js/blob/main/LICENSE)
