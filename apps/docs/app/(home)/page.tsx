import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-6 py-24 text-center">
      {/* Badge */}
      <span className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
        Facturación electrónica colombiana · DIAN
      </span>

      {/* Headline */}
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-fd-foreground">
        SDK de TypeScript para la API de{' '}
        <span className="text-fd-primary">Factus</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-fd-muted-foreground">
        Emite facturas electrónicas, notas crédito, documentos soporte y más —
        directamente desde tu aplicación Node.js o de navegador. Autenticación
        OAuth2 automática, tipado completo y cobertura total de la API de Factus.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow transition-opacity hover:opacity-90"
        >
          Leer la documentación
        </Link>
        <Link
          href="/docs/getting-started/installation"
          className="inline-flex items-center rounded-lg border px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
        >
          Guía de inicio rápido
        </Link>
        <a
          href="https://github.com/sbetav/factus-js"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
        >
          GitHub
        </a>
      </div>

      {/* Install snippet */}
      <div className="mt-12 rounded-lg border bg-fd-card px-6 py-4 font-mono text-sm text-fd-card-foreground shadow-sm">
        npm install @factus-js/client @factus-js/types
      </div>

      {/* Feature grid */}
      <div className="mt-20 grid max-w-4xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border bg-fd-card p-6 shadow-sm"
          >
            <div className="mb-3 text-2xl">{f.icon}</div>
            <h3 className="mb-1 font-semibold text-fd-foreground">{f.title}</h3>
            <p className="text-sm text-fd-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>

      {/* Quick-start code snippet */}
      <div className="mt-20 w-full max-w-2xl text-left">
        <h2 className="mb-4 text-2xl font-bold text-fd-foreground">
          Primeros pasos
        </h2>
        <pre className="overflow-x-auto rounded-lg border bg-fd-card p-6 text-sm text-fd-card-foreground">
          <code>{QUICKSTART_SNIPPET}</code>
        </pre>
      </div>
    </main>
  );
}

const features = [
  {
    icon: '📄',
    title: 'Facturas electrónicas',
    description:
      'Crea, consulta, descarga en XML/PDF y envía por email facturas de venta electrónicas validadas por la DIAN.',
  },
  {
    icon: '📝',
    title: 'Notas crédito y ajuste',
    description:
      'Emite notas crédito referenciadas o sin referencia, y notas de ajuste para documentos soporte.',
  },
  {
    icon: '📦',
    title: 'Documentos soporte',
    description:
      'Gestiona documentos soporte para compras a no obligados a facturar, cumpliendo los requisitos DIAN.',
  },
  {
    icon: '🔐',
    title: 'Auth OAuth2 automática',
    description:
      'Inicia sesión y refresca el token transparentemente. Nunca necesitas gestionar tokens manualmente.',
  },
  {
    icon: '🏢',
    title: 'Recepción RADIAN',
    description:
      'Lista y gestiona facturas recibidas, y emite eventos del ciclo de vida RADIAN (030–034).',
  },
  {
    icon: '🔢',
    title: 'Rangos de numeración',
    description:
      'Crea y administra rangos de numeración autorizados por la DIAN para todos tus documentos.',
  },
];

const QUICKSTART_SNIPPET = `import { FactusClient } from "@factus-js/client";

const factus = new FactusClient({
  clientId:     process.env.FACTUS_CLIENT_ID!,
  clientSecret: process.env.FACTUS_CLIENT_SECRET!,
  username:     process.env.FACTUS_USERNAME!,
  password:     process.env.FACTUS_PASSWORD!,
  environment:  "sandbox",
});

// Crear una factura electrónica
const response = await factus.bills.create({ ... });
console.log(response.data.number); // "SETP990000001"`;
