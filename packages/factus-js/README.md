# factus-js

SDK TypeScript para la API de Factus (facturacion electronica en Colombia).

## Instalación

```bash
pnpm add factus-js
```

## Uso básico

```ts
import { FactusClient } from "factus-js";

const factus = new FactusClient({
  clientId: process.env.FACTUS_CLIENT_ID!,
  clientSecret: process.env.FACTUS_CLIENT_SECRET!,
  username: process.env.FACTUS_USERNAME!,
  password: process.env.FACTUS_PASSWORD!,
  environment: "sandbox", // "production" para ambiente real
});

const bills = await factus.bills.list({ page: 1, per_page: 10 });
console.log(bills.data.data);
```

## Módulos disponibles

- `factus.bills`: facturas electrónicas de venta.
- `factus.creditNotes`: notas crédito.
- `factus.supportDocuments`: documentos soporte.
- `factus.adjustmentNotes`: notas de ajuste para documento soporte.
- `factus.reception`: recepción y eventos RADIAN.
- `factus.company`: datos de empresa.
- `factus.numberingRanges`: rangos de numeración.
- `factus.subscription`: estado del plan/suscripción.
- `factus.catalog`: municipios, países, tributos, unidades y adquirentes.

## Exportaciones

- `FactusClient`
- `FactusError`
- Constantes tipadas DIAN (`PaymentMethodCode`, `PaymentFormCode`, `IdentityDocumentTypeId`, etc.)
- Tipos TypeScript para payloads y respuestas de la API

## Desarrollo del paquete

Desde la raíz del monorepo:

```bash
pnpm install
pnpm --filter factus-js dev
```

### Scripts

```bash
pnpm --filter factus-js build
pnpm --filter factus-js typecheck
pnpm --filter factus-js test
pnpm --filter factus-js test:unit
pnpm --filter factus-js test:sandbox
pnpm --filter factus-js test:watch
```

## Tests sandbox (opcionales)

1. Crea `packages/factus-js/.env.local` a partir de `packages/factus-js/.env.example`.
2. Define estas variables:

```env
RUN_SANDBOX_TESTS=true
FACTUS_CLIENT_ID=...
FACTUS_CLIENT_SECRET=...
FACTUS_USERNAME=...
FACTUS_PASSWORD=...
```

3. Ejecuta:

```bash
pnpm --filter factus-js test
```

Por diseño, algunas rutas pueden estar limitadas en sandbox por permisos o por no ser testeables en ese entorno.
