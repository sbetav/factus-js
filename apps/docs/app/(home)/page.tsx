import { GitHubIcon } from "@/components/icons/github-icon";
import { getOgImageAbsoluteUrl, getSiteUrl } from "@/lib/site";
import { highlight } from "fumadocs-core/highlight";
import {
    CodeBlock,
    CodeBlockTab,
    CodeBlockTabs,
    CodeBlockTabsList,
    CodeBlockTabsTrigger,
    Pre,
} from "fumadocs-ui/components/codeblock";
import { ArrowRight, Braces, GitBranch, RefreshCw, Zap } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import sdkPkg from "../../../../packages/factus-js/package.json";

const siteUrl = getSiteUrl();
const ogImageUrl = getOgImageAbsoluteUrl();

export const metadata: Metadata = {
  title: "factus-js | SDK de Factus para JavaScript y TypeScript",
  description:
    "SDK de Factus para JavaScript y TypeScript. Integra la API de Factus en Node.js para emitir facturas electrónicas, notas crédito y documentos soporte.",
  alternates: {
    canonical: new URL("/", siteUrl).href,
  },
  openGraph: {
    title: "factus-js | SDK de Factus para JavaScript y TypeScript",
    description:
      "Integra la API de Factus en Node.js con un SDK tipado para JavaScript y TypeScript, autenticación automática y utilidades para facturación electrónica.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "factus-js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "factus-js | SDK de Factus para JavaScript y TypeScript",
    description:
      "SDK de Factus para JavaScript y TypeScript con soporte para la API de Factus, Node.js, DIAN y flujos de facturación electrónica.",
    images: [ogImageUrl],
  },
};

/* ─────────────────────────────────────────────────────────── */
/*  Data                                                       */
/* ─────────────────────────────────────────────────────────── */

const VERSION = sdkPkg.version;

const features: Array<{
  icon: typeof Braces;
  title: string;
  description: string;
  wide?: boolean;
}> = [
  {
    icon: Braces,
    title: "Totalmente tipado",
    description:
      "Tipos TypeScript completos para todas las entidades y respuestas de la API, generados a partir del esquema oficial.",
    wide: true,
  },
  {
    icon: Zap,
    title: "API ergonómica",
    description:
      "Interfaz fluida e intuitiva, uso módulos para cada recurso de la API.",
  },
  {
    icon: RefreshCw,
    title: "Autenticación automática",
    description: "Gestión automática de login, refresh y reintentos.",
  },
  {
    icon: GitBranch,
    title: "Sandbox y producción",
    description:
      "Cambia entre entornos con un único parámetro. El mismo código funciona en pruebas y en producción sin modificaciones.",
    wide: true,
  },
];

const steps = [
  { step: "01", label: "Instala el paquete" },
  { step: "02", label: "Configura tus credenciales" },
  { step: "03", label: "Instancia el cliente y empieza a operar" },
];

const QUICKSTART_SNIPPET = `import { FactusClient } from "factus-js";

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

const pkgManagers = [
  { id: "npm", cmd: "npm install factus-js" },
  { id: "pnpm", cmd: "pnpm add factus-js" },
  { id: "yarn", cmd: "yarn add factus-js" },
  { id: "bun", cmd: "bun add factus-js" },
] as const;

/** Official Factus product + HTTP API reference (this site documents the JS SDK). */
const FACTUS_WEB = "https://www.factus.com.co/";
const FACTUS_API_DOCS = "https://developers.factus.com.co/v1/";

/* ─────────────────────────────────────────────────────────── */
/*  Page (async Server Component for syntax highlighting)      */
/* ─────────────────────────────────────────────────────────── */

export default async function HomePage() {
  const highlighted = await highlight(QUICKSTART_SNIPPET, {
    lang: "typescript",
    themes: { light: "github-light", dark: "github-dark" },
  });

  const installHighlighted = await Promise.all(
    pkgManagers.map(({ cmd }) =>
      highlight(cmd, {
        lang: "bash",
        themes: { light: "github-light", dark: "github-dark" },
      }),
    ),
  );

  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center py-14 justify-center px-6 text-center w-full max-w-5xl mx-auto min-h-[calc(100dvh-57px)] pb-14">
        {/* Dot grid background — fades out radially */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 -z-20 w-dvw -translate-x-1/2"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in srgb, var(--color-fd-border) 100%, transparent) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 90% 65% at 50% 0%, black 20%, transparent 100%)",
          }}
        />

        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
        >
          <div
            className="mt-8 h-80 w-[700px] rounded-full blur-3xl opacity-15"
            style={{
              background:
                "radial-gradient(ellipse, var(--color-fd-primary), transparent 70%)",
            }}
          />
        </div>

        {/* Logo with ambient glow */}
        <div className="animate-fade-up mb-5 flex items-center justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-25"
              style={{ background: "var(--color-fd-primary)" }}
            />
            <Image
              src="/factus-js.webp"
              alt="factus-js"
              width={90}
              height={90}
              className="relative object-contain size-18 xs:size-20 md:size-22"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Version badge */}
        <span
          className="animate-fade-up mb-5 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3.5 py-1.5 text-xs font-medium text-fd-muted-foreground"
          style={{ animationDelay: "80ms" }}
        >
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />v
          {VERSION} · factus-js
        </span>

        {/* Headline */}
        <h1
          className="animate-fade-up text-3xl font-bold xs:text-4xl tracking-tight text-fd-foreground sm:text-5xl"
          style={{ animationDelay: "160ms" }}
        >
          <span className="text-fd-primary">JavaScript</span> SDK para <br /> la
          API de{" "}
          <span className="relative inline-block">
            Factus
            <svg
              aria-hidden="true"
              className="absolute -bottom-1.5 left-0 w-full"
              viewBox="0 0 220 10"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7.5 C 50 2, 110 2, 218 6"
                stroke="var(--color-fd-primary)"
                strokeWidth="5"
                strokeLinecap="round"
                pathLength="1"
              />
            </svg>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-up mt-6 max-w-xl sm:text-lg leading-relaxed text-fd-muted-foreground"
          style={{ animationDelay: "240ms" }}
        >
          Emite facturas electrónicas, notas crédito, documentos soporte y más
          desde tu aplicación de Node.js usando la API de Factus.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-10 flex w-full flex-col xs:flex-row items-center justify-center gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-fd-primary px-6 py-2 xs:py-2.5 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-all duration-150 hover:opacity-90 active:scale-[0.98] w-full xs:w-auto justify-center"
          >
            Comenzar ahora
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://github.com/sbetav/factus-js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-2 xs:py-2.5 text-sm font-semibold text-fd-foreground transition-all duration-150 hover:bg-fd-accent active:scale-[0.98] w-full xs:w-auto justify-center"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </div>

        {/* Install — package manager tabs */}
        <div
          className="animate-fade-up mt-8 w-full max-w-lg"
          style={{ animationDelay: "400ms" }}
        >
          <CodeBlockTabs defaultValue="npm" className="my-0 text-sm">
            <CodeBlockTabsList>
              {pkgManagers.map(({ id }) => (
                <CodeBlockTabsTrigger key={id} value={id}>
                  {id}
                </CodeBlockTabsTrigger>
              ))}
            </CodeBlockTabsList>
            {pkgManagers.map(({ id }, i) => (
              <CodeBlockTab key={id} value={id}>
                <CodeBlock allowCopy className="text-left">
                  <Pre>{installHighlighted[i]}</Pre>
                </CodeBlock>
              </CodeBlockTab>
            ))}
          </CodeBlockTabs>
        </div>
      </section>

      {/* ── GRADIENT DIVIDER ──────────────────────────────── */}
      <div className="w-full max-w-5xl px-6">
        <div className="h-px bg-linear-to-r from-transparent via-fd-border to-transparent" />
      </div>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="w-full max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs xs:text-sm font-semibold uppercase tracking-widest text-fd-primary">
            Características principales
          </p>
          <h2 className="text-xl xs:text-2xl font-bold tracking-tight text-pretty text-fd-foreground sm:text-3xl">
            Diseñado para la experiencia del desarrollador
          </h2>
          <p className="mt-3 text-fd-muted-foreground text-sm xs:text-base">
            Un SDK que se quita del camino y te deja concentrarte en tu
            producto.
          </p>
        </div>

        {/* Bento grid: 3 cols, alternating wide/narrow */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={[
                  "group relative overflow-hidden rounded-xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:border-fd-primary/40 hover:shadow-md",
                  f.wide ? "md:col-span-2" : "md:col-span-1",
                ].join(" ")}
              >
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 0%, color-mix(in srgb, var(--color-fd-primary) 8%, transparent), transparent 70%)",
                  }}
                />

                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-fd-accent transition-colors duration-300 group-hover:bg-fd-primary/15">
                  <Icon
                    className="size-5 text-fd-muted-foreground transition-colors duration-300 group-hover:text-fd-primary"
                    aria-hidden
                  />
                </div>

                <h3 className="mb-2 font-semibold text-fd-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── GRADIENT DIVIDER ──────────────────────────────── */}
      <div className="w-full max-w-5xl px-6">
        <div className="h-px bg-linear-to-r from-transparent via-fd-border to-transparent" />
      </div>

      {/* ── QUICKSTART ────────────────────────────────────── */}
      <section className="w-full max-w-5xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: vertical timeline */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs xs:text-sm font-semibold uppercase tracking-widest text-fd-primary">
              Integración rápida
            </p>
            <h2 className="text-xl xs:text-2xl font-bold tracking-tight text-fd-foreground sm:text-3xl text-pretty">
              Emite tu primera factura en minutos
            </h2>
            <p className="mt-4 leading-relaxed text-fd-muted-foreground text-sm xs:text-base">
              Sin boilerplate, sin configuración compleja. Configura tus
              credenciales, instancia el cliente y empieza a operar.
            </p>

            {/* Timeline */}
            <div className="relative mt-8 flex flex-col">
              {/* Vertical connecting line */}
              <div
                aria-hidden
                className="absolute left-5 top-5 w-px bottom-5 bg-fd-primary/70"
              />

              {steps.map((s, i) => (
                <div
                  key={s.step}
                  className={[
                    "relative flex items-start gap-4",
                    i < steps.length - 1 ? "xs:pb-8 pb-6" : "",
                  ].join(" ")}
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex size-8 xs:size-10 shrink-0 items-center justify-center rounded-full border-2 border-fd-primary/90 bg-fd-background font-mono text-xs font-bold text-fd-primary/90">
                    {s.step}
                  </div>
                  <div className="xs:pt-2.5 pt-1">
                    <span className="font-medium text-fd-foreground text-sm xs:text-base">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/docs"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-fd-primary transition-opacity hover:opacity-75"
              >
                Ver guía completa
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: code block */}
          <CodeBlock
            keepBackground={false}
            title="quick-start.ts"
            icon={
              <div className="[&_svg]:size-3.5">
                <svg viewBox="0 0 24 24" aria-label="TypeScript">
                  <path
                    d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            }
          >
            <Pre className="text-xs">{highlighted}</Pre>
          </CodeBlock>
        </div>
      </section>

      <footer className="w-full border-t border-fd-border">
        <div className="grid mx-auto max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3 py-9 px-6">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/factus-js.webp"
                alt="factus-js logo"
                width={24}
                height={24}
                className="size-6 object-contain"
                unoptimized
              />
              <span className="text-sm font-semibold tracking-tight text-fd-foreground">
                factus-js
              </span>
            </div>
            <p className="text-xs text-fd-muted-foreground">
              JavaScript SDK para la API de Factus.
            </p>
          </div>

          {/* Docs */}
          <nav aria-labelledby="footer-docs">
            <h3
              id="footer-docs"
              className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground"
            >
              Documentación
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/docs" className="hover:text-fd-foreground">
                  Guía SDK
                </Link>
              </li>
              <li>
                <a
                  href={FACTUS_API_DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fd-foreground"
                >
                  API oficial de Factus
                </a>
              </li>
            </ul>
          </nav>

          {/* Community / Links */}
          <nav aria-labelledby="footer-links">
            <h3
              id="footer-links"
              className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground"
            >
              Enlaces
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={FACTUS_WEB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fd-foreground"
                >
                  Sitio oficial de Factus
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sbetav/factus-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fd-foreground"
                >
                  Repositorio en GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="h-px w-full bg-fd-border" />

        <div className="px-6 mx-auto max-w-5xl">
          <div className="flex flex-col gap-2 py-4.5 text-xs items-center sm:items-start text-fd-muted-foreground sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} factus-js. Licencia MIT.</p>

            <p>
              Hecho con <span className="text-[11px]">❤️</span> por{" "}
              <a
                href="https://github.com/sbetav"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-fd-foreground"
              >
                sbetav
              </a>
            </p>

            <p>
              *No es un producto oficial de{" "}
              <a
                href={FACTUS_WEB}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Factus
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
