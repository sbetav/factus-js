<p align="center">
  <img src="./assets/banner.png" alt="JavaScript SDK for the Factus API" />
</p>

# factus-js

TypeScript/JavaScript SDK for the Factus API (Colombian e-invoicing).

## Install

```bash
npm install factus-js
```

## Requirements

- Node.js 18+ (uses native `fetch`).
- Factus API credentials.

## Quickstart

### 1) Set environment variables

```env
FACTUS_CLIENT_ID=your-client-id
FACTUS_CLIENT_SECRET=your-client-secret
FACTUS_USERNAME=your-username
FACTUS_PASSWORD=your-password
```

### 2) Create the client

```ts
import { FactusClient } from "factus-js";

const factus = new FactusClient({
  clientId: process.env.FACTUS_CLIENT_ID!,
  clientSecret: process.env.FACTUS_CLIENT_SECRET!,
  username: process.env.FACTUS_USERNAME!,
  password: process.env.FACTUS_PASSWORD!,
  environment: "sandbox", // use "production" for live usage
});
```

### 3) Make your first request

```ts
const bills = await factus.bills.list({ page: 1, per_page: 10 });
console.log(bills.data.data);
```

## Examples

### Create a bill

DIAN constants are direct string values and should be used directly in payloads:

```ts
import {
  PaymentFormCode,
  PaymentMethodCode,
  IdentityDocumentTypeId,
  CustomerTributeId,
  OrganizationTypeId,
  ProductStandardId,
} from "factus-js";

const response = await factus.bills.create({
  numbering_range_id: 8,
  reference_code: "I3",
  observation: "Test bill",
  payment_form: PaymentFormCode.CreditPayment,
  payment_method_code: PaymentMethodCode.Cash,
  payment_due_date: "2026-12-31",
  customer: {
    identification: "123456789",
    dv: "3",
    names: "Alan Turing",
    address: "Calle 1 # 2-68",
    email: "alanturing@example.com",
    phone: "1234567890",
    legal_organization_id: OrganizationTypeId.NaturalPerson,
    tribute_id: CustomerTributeId.NotApplicable,
    identification_document_id: IdentityDocumentTypeId.NIT,
    municipality_id: 980,
  },
  items: [
    {
      code_reference: "12345",
      name: "Example product",
      quantity: 1,
      discount_rate: 20,
      price: 50000,
      tax_rate: "19.00",
      unit_measure_id: 70,
      standard_code_id: ProductStandardId.TaxpayerAdoption,
      is_excluded: 0,
      tribute_id: 1,
    },
  ],
});

console.log(response.data);
```

### Automatic pagination

```ts
for await (const bill of factus.bills.listAll({ status: 1 })) {
  console.log(bill.number, bill.total);
}
```

### Error handling

```ts
import { FactusError } from "factus-js";

try {
  await factus.bills.get("SETP990000001");
} catch (error) {
  if (error instanceof FactusError) {
    console.error(error.statusCode); // e.g. 404
    console.error(error.message);
    console.error(error.validationErrors); // DIAN validation errors on 422
  }
}
```

## Available modules

- `bills`
- `creditNotes`
- `supportDocuments`
- `adjustmentNotes`
- `reception`
- `company`
- `numberingRanges`
- `subscription`
- `catalog`

## Documentation

- Official Factus API docs: `https://developers.factus.com.co/`
- SDK docs site: `https://factusjs.vercel.app/`
- Package README: `packages/factus-js/README.md`

## Monorepo

This repository also contains the docs application and development tooling.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm check-types
```
