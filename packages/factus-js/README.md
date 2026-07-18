# factus-js

[![npm version](https://img.shields.io/npm/v/factus-js.svg)](https://www.npmjs.com/package/factus-js)
[![license](https://img.shields.io/npm/l/factus-js.svg)](https://github.com/sbetav/factus-js/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/factus-js.svg)](https://www.npmjs.com/package/factus-js)

SDK TypeScript/JavaScript para la API de [Factus](https://www.factus.com.co/).

> Documentación completa: [https://factusjs.vercel.app](https://factusjs.vercel.app)

## Características

- Cobertura completa de la API Factus v2: facturas, notas crédito, notas débito, nóminas, notas de ajuste de nómina, documentos soporte, notas de ajuste, recepción RADIAN, rangos de numeración, suscripciones y más.
- Autenticación OAuth2 automática con refresh y un reintento ante token expirado.
- Tipado fuerte en TypeScript para payloads y respuestas.
- Constantes DIAN tipadas como `PaymentFormCode`, `IdentityDocumentCode`, `EventCode`, etc.
- Iterador de paginación automática con `listAll()` en módulos paginados.
- Soporte de `AbortSignal` y timeout a nivel de cliente.
- Compatibilidad en runtime con Node.js >= 18, Deno y Bun.
- Cero dependencias en runtime.

## Instalación

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

## Uso básico

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
  environment: "sandbox", // usa "production" en producción
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
    country_code: "CO",
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

## Módulos disponibles

| Módulo                      | Descripción                                               |
| --------------------------- | --------------------------------------------------------- |
| `factus.bills`              | Facturas electrónicas de venta                            |
| `factus.creditNotes`        | Notas crédito                                             |
| `factus.debitNotes`         | Notas débito                                              |
| `factus.supportDocuments`   | Documentos soporte                                        |
| `factus.adjustmentNotes`    | Notas de ajuste de documentos soporte                     |
| `factus.payrolls`           | Nóminas electrónicas                                      |
| `factus.adjustmentPayrolls` | Notas de ajuste de nómina                                 |
| `factus.reception`          | Recepción RADIAN y eventos de facturas recibidas          |
| `factus.acquirer`           | Consulta de adquiriente por identificación                |
| `factus.company`            | Datos de la empresa y carga de logo                       |
| `factus.numberingRanges`    | Rangos de numeración DIAN                                 |
| `factus.subscription`       | Suscripción y estado de cupo                              |
| `factus.documents`          | Descarga genérica de XML por identificador de seguimiento |

## Constantes DIAN

Las constantes son valores tipados directos. Úsalas tal cual en los payloads, sin `.value`.

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

## Manejo de errores

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

## Exportaciones

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

## Licencia

[MIT](https://github.com/sbetav/factus-js/blob/main/LICENSE)
