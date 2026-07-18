# factus-js

[![npm version](https://img.shields.io/npm/v/factus-js.svg)](https://www.npmjs.com/package/factus-js)
[![license](https://img.shields.io/npm/l/factus-js.svg)](https://github.com/sbetav/factus-js/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/factus-js.svg)](https://www.npmjs.com/package/factus-js)

SDK TypeScript/JavaScript para la API de [Factus](https://www.factus.com.co/).

> Documentación completa: [https://factusjs.vercel.app](https://factusjs.vercel.app)

## Características

- Cobertura completa de los dominios de la API de Factus: facturas, notas crédito, documentos soporte, notas de ajuste, recepción RADIAN, rangos de numeración, catálogos y más.
- Autenticación OAuth2 automática con refresh y un reintento ante token expirado.
- Tipado fuerte en TypeScript para payloads y respuestas.
- Constantes DIAN tipadas (`PaymentFormCode`, `IdentityDocumentTypeId`, y más) como mapas de valores directos.
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
  PaymentFormCode,
  PaymentMethodCode,
  IdentityDocumentTypeId,
  OrganizationTypeId,
  CustomerTributeId,
  ProductStandardId,
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
  payment_form: PaymentFormCode.CreditPayment,
  payment_due_date: "2026-12-31",
  payment_method_code: PaymentMethodCode.Cash,
  customer: {
    identification_document_id: IdentityDocumentTypeId.CitizenshipId,
    identification: "123456789",
    names: "Alan Turing",
    address: "Calle 1 # 2-68",
    email: "alanturing@example.com",
    phone: "1234567890",
    legal_organization_id: OrganizationTypeId.NaturalPerson,
    tribute_id: CustomerTributeId.NotApplicable,
    municipality_id: 980,
  },
  items: [
    {
      code_reference: "PROD-001",
      name: "Test product",
      quantity: 1,
      discount_rate: 0,
      price: 50000,
      tax_rate: "19.00",
      unit_measure_id: 70,
      standard_code_id: ProductStandardId.TaxpayerAdoption,
      is_excluded: 0,
      tribute_id: 1,
    },
  ],
});

console.log(bill.data);
```

## Módulos disponibles

| Módulo                    | Descripción                            |
| ------------------------- | -------------------------------------- |
| `factus.bills`            | Facturas electrónicas de venta         |
| `factus.creditNotes`      | Notas crédito                          |
| `factus.supportDocuments` | Documentos soporte                     |
| `factus.adjustmentNotes`  | Notas de ajuste de documentos soporte  |
| `factus.reception`        | Recepción RADIAN y eventos de facturas |
| `factus.company`          | Datos de la empresa                    |
| `factus.numberingRanges`  | Rangos de numeración DIAN              |
| `factus.subscription`     | Suscripción y estado de cupo           |
| `factus.catalog`          | Municipios, países, tributos y otros   |

## Constantes DIAN

Las constantes son valores tipados directos. Úsalas tal cual en los payloads, sin `.value`.

```ts
import {
  PaymentFormCode,
  PaymentMethodCode,
  IdentityDocumentTypeId,
  OrganizationTypeId,
  CustomerTributeId,
  ProductStandardId,
  EventCode,
  PaymentFormCodeInfo,
  IdentityDocumentTypeIdInfo,
} from "factus-js";

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
  PaymentMethodCode,
  PaymentFormCode,
  IdentityDocumentTypeId,
  PaymentFormCodeInfo,
  IdentityDocumentTypeIdInfo,
  type RequestOptions,
  type FactusClientConfig,
} from "factus-js";
```

## Licencia

[MIT](https://github.com/sbetav/factus-js/blob/main/LICENSE)
