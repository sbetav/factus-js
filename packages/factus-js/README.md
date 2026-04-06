# factus-js

[![npm version](https://img.shields.io/npm/v/factus-js.svg)](https://www.npmjs.com/package/factus-js)
[![license](https://img.shields.io/npm/l/factus-js.svg)](https://github.com/sbetav/factus-js/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/factus-js.svg)](https://www.npmjs.com/package/factus-js)

SDK TypeScript/JavaScript para la API de [Factus](https://www.factus.com.co/) — facturación electrónica en Colombia ante la DIAN.

> **Documentación completa:** [https://factusjs.vercel.app](https://factusjs.vercel.app)

## Características

- Todos los endpoints de la API de Factus: facturas, notas crédito, documentos soporte, notas de ajuste, recepción RADIAN, rangos de numeración, catálogos y más.
- Autenticación OAuth2 automática con refresh de token.
- Tipado completo con TypeScript — autocompletado, payloads y respuestas tipados.
- Constantes DIAN tipadas: medios de pago, formas de pago, tipos de documento, tributos, etc.
- Compatible con cualquier runtime JavaScript: Node.js, Deno, Bun.
- Cero dependencias externas.

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
import { FactusClient } from "factus-js";

const factus = new FactusClient({
  clientId: process.env.FACTUS_CLIENT_ID!,
  clientSecret: process.env.FACTUS_CLIENT_SECRET!,
  username: process.env.FACTUS_USERNAME!,
  password: process.env.FACTUS_PASSWORD!,
  environment: "sandbox", // "production" para ambiente real
});

// Listar facturas
const bills = await factus.bills.list({ page: 1, per_page: 10 });
console.log(bills.data.data);

// Crear una factura electrónica
const invoice = await factus.bills.create({
  /* payload */
});

// Descargar PDF
const pdf = await factus.bills.downloadPdf("SETT1");
```

## Módulos disponibles

| Módulo                    | Descripción                                          |
| ------------------------- | ---------------------------------------------------- |
| `factus.bills`            | Facturas electrónicas de venta                       |
| `factus.creditNotes`      | Notas crédito                                        |
| `factus.supportDocuments` | Documentos soporte                                   |
| `factus.adjustmentNotes`  | Notas de ajuste para documento soporte               |
| `factus.reception`        | Recepción de facturas y eventos RADIAN               |
| `factus.company`          | Datos de empresa                                     |
| `factus.numberingRanges`  | Rangos de numeración DIAN                            |
| `factus.subscription`     | Estado del plan/suscripción                          |
| `factus.catalog`          | Municipios, países, tributos, unidades y adquirentes |

## Exportaciones

```ts
import {
  FactusClient,
  FactusError,
  // Constantes DIAN tipadas
  PaymentMethodCode,
  PaymentFormCode,
  IdentityDocumentTypeId,
  // ... y más
} from "factus-js";
```

## Documentación

Para guías completas, referencia de la API, ejemplos y más, visita la documentación:

**[https://factusjs.vercel.app](https://factusjs.vercel.app)**

## Contexto para agentes (usando docs oficiales)

Si quieres generar contexto en Markdown desde la documentación oficial de Factus
(`https://developers.factus.com.co/`):

```bash
pnpm --filter factus-js docs:sync
```

El script intenta usar `wget` en modo mirror. Si `wget` no está disponible,
hace fallback automático a un crawler en Node.js.

Para reducir ruido y ahorrar tokens, el script recorta payloads
base64 largos y los reemplaza con un
placeholder como `[TRIMMED_BASE64_12345_CHARS]`.

Puedes ajustar el margen con `FACTUS_DOCS_BASE64_TRIM_THRESHOLD`
(por defecto `320`).

La salida generada será:

- `packages/factus-js/.external-factus-docs/`
- `packages/factus-js/.external-factus-mirror/`

## Licencia

[MIT](https://github.com/sbetav/factus-js/blob/main/LICENSE)
