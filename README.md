<p align="center">
  <img src="./assets/banner.png" alt="JavaScript SDK para la API de Factus" />
</p>

# factus-js

JavaScript/TypeScript SDK para la API de Factus.

## Instalación

```bash
npm install factus-js
```

## Requisitos

- Node.js 18+ (usa `fetch` nativo).
- Credenciales de API de Factus.

## Quickstart

### 1) Configura variables de entorno

```env
FACTUS_CLIENT_ID=tu-client-id
FACTUS_CLIENT_SECRET=tu-client-secret
FACTUS_USERNAME=tu-usuario
FACTUS_PASSWORD=tu-password
```

### 2) Inicializa el cliente

```ts
import { FactusClient } from "factus-js";

const factus = new FactusClient({
  clientId: process.env.FACTUS_CLIENT_ID!,
  clientSecret: process.env.FACTUS_CLIENT_SECRET!,
  username: process.env.FACTUS_USERNAME!,
  password: process.env.FACTUS_PASSWORD!,
  environment: "sandbox", // usa "production" para ambiente real
});
```

### 3) Haz tu primera llamada

```ts
const bills = await factus.bills.list({ page: 1, per_page: 10 });
console.log(bills.data.data);
```

## Ejemplos de uso

### Crear factura electronica

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
  observation: "Factura de prueba",
  payment_form: PaymentFormCode.CreditPayment,
  payment_method_code: PaymentMethodCode.Cash,
  payment_due_date: "2025-12-31",
  billing_period: {
    start_date: "2025-01-01",
    end_date: "2025-01-31",
  },
  customer: {
    identification: "123456789",
    dv: "3",
    company: "",
    trade_name: "",
    names: "Alan Turing",
    address: "calle 1 # 2-68",
    email: "alanturing@enigmasas.com",
    phone: "1234567890",
    legal_organization_id: OrganizationTypeId.NaturalPerson,
    tribute_id: CustomerTributeId.IVA,
    identification_document_id: IdentityDocumentTypeId.NIT,
    municipality_id: 980,
  },
  items: [
    {
      code_reference: "12345",
      name: "Producto de ejemplo",
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

### Manejo de errores

```ts
import { FactusError } from "factus-js";

try {
  await factus.bills.getByNumber("SETP990000001");
} catch (error) {
  if (error instanceof FactusError) {
    console.error(error.status, error.message, error.details);
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

- Guía completa: `https://developers.factus.com.co/`
- Docs del SDK (este repositorio): `https://factusjs.vercel.app/`
- README del paquete: `packages/factus-js/README.md`

## Monorepo

Este repositorio también contiene el sitio de documentación y tooling de desarrollo.
Si vas a contribuir:

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm check-types
```
