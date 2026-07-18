<p align="center">
  <img src="./assets/banner.png" alt="SDK de JavaScript para la API de Factus" />
</p>

# factus-js

SDK TypeScript/JavaScript para la API de Factus (facturación electrónica para Colombia).

## Instalación

```bash
npm install factus-js@1.1.1
```

## Requisitos

- Node.js 18+ (usa `fetch` nativo).
- Credenciales de la API de Factus.

## Inicio rápido

### 1) Configura las variables de entorno

```env
FACTUS_CLIENT_ID=your-client-id
FACTUS_CLIENT_SECRET=your-client-secret
FACTUS_USERNAME=your-username
FACTUS_PASSWORD=your-password
```

### 2) Inicializa el cliente

```ts
import { FactusClient } from "factus-js";

const factus = new FactusClient({
  clientId: process.env.FACTUS_CLIENT_ID!,
  clientSecret: process.env.FACTUS_CLIENT_SECRET!,
  username: process.env.FACTUS_USERNAME!,
  password: process.env.FACTUS_PASSWORD!,
  environment: "sandbox", // usa "production" en producción
});
```

### 3) Haz tu primera petición

```ts
const bills = await factus.bills.list({ page: 1, per_page: 10 });
console.log(bills.data.data);
```

## Ejemplos

### Crear una factura

Las constantes DIAN son valores string directos y deben usarse tal cual en los payloads:

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

### Paginación automática

```ts
for await (const bill of factus.bills.listAll({ status: 1 })) {
  console.log(bill.number, bill.total);
}
```

### Manejo de errores

```ts
import { FactusError } from "factus-js";

try {
  await factus.bills.get("SETP990000001");
} catch (error) {
  if (error instanceof FactusError) {
    console.error(error.statusCode); // p. ej. 404
    console.error(error.message);
    console.error(error.validationErrors); // errores de validación DIAN en 422
  }
}
```

## Módulos disponibles

- `bills`
- `creditNotes`
- `supportDocuments`
- `adjustmentNotes`
- `reception`
- `company`
- `numberingRanges`
- `subscription`
- `catalog`

## Documentación

- API oficial de Factus: `https://developers.factus.com.co/v1/`
- Documentación del SDK: `https://factusjs.vercel.app/`

## Monorepo

Este repositorio también incluye la app de documentación y las herramientas de desarrollo.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm check-types
```
