# factus-js

[![npm version](https://img.shields.io/npm/v/factus-js.svg)](https://www.npmjs.com/package/factus-js)
[![license](https://img.shields.io/npm/l/factus-js.svg)](https://github.com/sbetav/factus-js/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/factus-js.svg)](https://www.npmjs.com/package/factus-js)

SDK TypeScript/JavaScript para la API de [Factus](https://www.factus.com.co/) — facturación electrónica en Colombia ante la DIAN.

> **Documentación completa:** [https://factusjs.vercel.app](https://factusjs.vercel.app)

## Características

- Todos los endpoints de la API de Factus: facturas, notas crédito, documentos soporte, notas de ajuste, recepción RADIAN, rangos de numeración, catálogos y más.
- Autenticación OAuth2 automática con refresh y reintento en token expirado.
- Tipado completo con TypeScript — autocompletado, payloads y respuestas tipados.
- Constantes DIAN tipadas (`PaymentFormCode`, `IdentityDocumentTypeId`, etc.) como mapas de valores directos.
- Iterador de paginación automático (`listAll()`) para iterar sobre todos los resultados.
- Soporte para `AbortSignal` y `timeout` global por cliente.
- Compatible con cualquier runtime JavaScript: Node.js ≥ 18, Deno, Bun.
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
  environment: "sandbox", // "production" para ambiente real
});

// Crear una factura electrónica
const invoice = await factus.bills.create({
  numbering_range_id: 8,
  reference_code: "INV-001",
  payment_form: PaymentFormCode.CreditPayment, // "2"
  payment_due_date: "2026-12-31",
  payment_method_code: PaymentMethodCode.Cash, // "10"
  customer: {
    identification_document_id: IdentityDocumentTypeId.CitizenshipId, // "3"
    identification: "123456789",
    names: "Alan Turing",
    address: "Calle 1 # 2-68",
    email: "alanturing@example.com",
    phone: "1234567890",
    legal_organization_id: OrganizationTypeId.NaturalPerson, // "2"
    tribute_id: CustomerTributeId.NotApplicable, // "21"
    municipality_id: 980,
  },
  items: [
    {
      code_reference: "PROD-001",
      name: "Producto de prueba",
      quantity: 1,
      discount_rate: 0,
      price: 50000,
      tax_rate: "19.00",
      unit_measure_id: 70,
      standard_code_id: ProductStandardId.TaxpayerAdoption, // "1"
      is_excluded: 0,
      tribute_id: 1,
    },
  ],
});

// Listar facturas
const list = await factus.bills.list({
  filter: { status: 1 },
  page: 1,
  per_page: 15,
});
console.log(list.data.data);

// Iterar sobre todas las facturas (paginación automática)
for await (const bill of factus.bills.listAll()) {
  console.log(bill.number);
}

// Obtener detalle de una factura
const detail = await factus.bills.get("SETP990000001");

// Descargar PDF
const pdf = await factus.bills.downloadPdf("SETP990000001");

// Cancelar una solicitud con AbortSignal
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);
const bills = await factus.bills.list({}, { signal: controller.signal });
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

## Constantes DIAN

Todas las constantes son mapas de valores directos (strings tipados). Se usan directamente en los payloads sin `.value`:

```ts
import {
  PaymentFormCode, // "1" | "2"
  PaymentMethodCode, // "10" | "42" | "20" | ...
  IdentityDocumentTypeId, // "1" | "2" | "3" | ...
  OrganizationTypeId, // "1" | "2"
  CustomerTributeId, // "18" | "21"
  ProductStandardId, // "1" | "2" | "3" | "4"
  EventCode, // "030" | "031" | ...
  // ... y más
} from "factus-js";

// Para descripciones / etiquetas de UI, importa los *Info:
import {
  PaymentFormCodeInfo,
  IdentityDocumentTypeIdInfo,
  // ...
} from "factus-js";

const label = PaymentFormCodeInfo[PaymentFormCode.CreditPayment].description;
// → "Pago a crédito"
```

## Manejo de errores

```ts
import { FactusClient, FactusError } from "factus-js";

try {
  await factus.bills.create({
    /* ... */
  });
} catch (error) {
  if (error instanceof FactusError) {
    console.error(error.statusCode); // e.g. 422
    console.error(error.message); // e.g. "Error de validación"
    console.error(error.validationErrors); // { FAK24: "Regla: FAK24, ..." }
  }
}
```

## Exportaciones

```ts
import {
  FactusClient,
  FactusError,
  // Constantes DIAN tipadas
  PaymentMethodCode,
  PaymentFormCode,
  IdentityDocumentTypeId,
  // Metadata de constantes
  PaymentFormCodeInfo,
  IdentityDocumentTypeIdInfo,
  // Tipos
  type RequestOptions,
  type FactusClientConfig,
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
