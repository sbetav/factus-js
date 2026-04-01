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
  title: "factus-js — JavaScript SDK para la API de Factus",
  description:
    "Emite facturas electrónicas, notas crédito y documentos soporte directamente desde Node.js. SDK totalmente tipado con TypeScript.",
  alternates: {
    canonical: new URL("/", siteUrl).href,
  },
  openGraph: {
    title: "factus-js — JavaScript SDK para la API de Factus",
    description:
      "Emite facturas electrónicas, notas crédito y documentos soporte directamente desde Node.js. SDK totalmente tipado con TypeScript.",
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
    title: "factus-js — JavaScript SDK para la API de Factus",
    description:
      "Emite facturas electrónicas, notas crédito y documentos soporte directamente desde Node.js. SDK totalmente tipado con TypeScript.",
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
const FACTUS_API_DOCS = "https://developers.factus.com.co/";

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
    <main
      className="flex flex-col items-center w-full overflow-x-hidden"
      style={{ fontFamily: "Tahoma, Verdana, Arial, sans-serif", background: "#d4d0c8" }}
    >
      {/* ── MARQUEE BANNER ─────────────────────────────────── */}
      <div
        className="w-full overflow-hidden"
        style={{
          background: "linear-gradient(to right, #000080, #1084d0)",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "3px 0",
          borderBottom: "2px solid #003",
        }}
      >
        <marquee scrollamount="3">
          🌟 factus-js v{VERSION} ya disponible — Facturación electrónica para Node.js con soporte TypeScript completo — Descárgalo hoy mismo — Compatible con entornos sandbox y producción 🌟
        </marquee>
      </div>

      {/* ── HERO WINDOW ────────────────────────────────────── */}
      <section className="relative w-full max-w-5xl mx-auto px-4 pt-6 pb-8">
        {/* Window chrome */}
        <div
          className="w-full"
          style={{
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            background: "#d4d0c8",
            boxShadow: "2px 2px 0 #000",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-2 py-1"
            style={{
              background: "linear-gradient(to right, #000080, #1084d0)",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            <div className="flex items-center gap-2">
              {/* tiny icon */}
              <span style={{ fontSize: "10px" }}>📦</span>
              <span>factus-js — SDK para Factus</span>
            </div>
            <div className="flex items-center gap-1">
              {["_", "□", "✕"].map((ch) => (
                <button
                  key={ch}
                  aria-hidden
                  type="button"
                  style={{
                    width: "17px",
                    height: "15px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    lineHeight: "1",
                    background: "#d4d0c8",
                    border: "1px solid",
                    borderColor: "#ffffff #808080 #808080 #ffffff",
                    cursor: "default",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {ch}
                </button>
              ))}
            </div>
          </div>

          {/* Menu bar */}
          <div
            className="flex items-center gap-0 px-1"
            style={{
              borderBottom: "1px solid #808080",
              fontSize: "12px",
              background: "#d4d0c8",
            }}
          >
            {["Archivo", "Editar", "Ver", "Ayuda"].map((item) => (
              <span
                key={item}
                className="px-3 py-0.5 cursor-default"
                style={{ fontSize: "12px" }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Toolbar */}
          <div
            className="flex items-center gap-1 px-2 py-1"
            style={{
              borderBottom: "1px solid #808080",
              background: "#d4d0c8",
            }}
          >
            {["◀ Atrás", "▶ Adelante", "⬆ Arriba", "🔍 Buscar"].map((btn) => (
              <button
                key={btn}
                type="button"
                style={{
                  fontSize: "11px",
                  padding: "1px 8px",
                  background: "#d4d0c8",
                  border: "1px solid",
                  borderColor: "#ffffff #808080 #808080 #ffffff",
                  cursor: "default",
                  whiteSpace: "nowrap",
                }}
              >
                {btn}
              </button>
            ))}
            <div
              className="flex-1 flex items-center ml-2"
              style={{
                border: "1px solid",
                borderColor: "#808080 #ffffff #ffffff #808080",
                background: "#ffffff",
                padding: "1px 4px",
                fontSize: "11px",
              }}
            >
              <span style={{ color: "#666" }}>Dirección:</span>
              <span className="ml-2" style={{ color: "#00f" }}>
                https://factus-js.vercel.app/
              </span>
            </div>
          </div>

          {/* Hero content inside window */}
          <div className="p-6 flex flex-col items-center text-center" style={{ background: "#ffffff" }}>
            {/* Logo */}
            <div className="mb-4 flex items-center justify-center">
              <div
                style={{
                  border: "2px solid",
                  borderColor: "#ffffff #808080 #808080 #ffffff",
                  padding: "8px",
                  background: "#d4d0c8",
                  display: "inline-block",
                }}
              >
                <Image
                  src="/factus-js.webp"
                  alt="factus-js"
                  width={72}
                  height={72}
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Version badge */}
            <div
              className="mb-4 inline-flex items-center gap-2 px-3 py-1"
              style={{
                border: "1px solid",
                borderColor: "#808080 #ffffff #ffffff #808080",
                background: "#d4d0c8",
                fontSize: "11px",
                fontWeight: "bold",
                color: "#000080",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  background: "#00aa00",
                  border: "1px inset #006600",
                }}
              />
              v{VERSION} · factus-js
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#000080",
                marginBottom: "12px",
                fontFamily: "Tahoma, Verdana, Arial, sans-serif",
              }}
            >
              <span style={{ color: "#cc0000" }}>JavaScript</span> SDK para la API de{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#000080",
                  color: "#000080",
                }}
              >
                Factus
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                maxWidth: "520px",
                fontSize: "13px",
                lineHeight: "1.6",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Emite facturas electrónicas, notas crédito, documentos soporte y más
              directamente desde tu aplicación de Node.js.
            </p>

            {/* CTAs — classic Win2k buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <Link
                href="/docs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  fontFamily: "Tahoma, Verdana, Arial, sans-serif",
                  background: "#d4d0c8",
                  color: "#000",
                  border: "2px solid",
                  borderColor: "#ffffff #808080 #808080 #ffffff",
                  textDecoration: "none",
                  cursor: "pointer",
                  boxShadow: "1px 1px 0 #000",
                }}
              >
                Comenzar ahora
                <ArrowRight style={{ width: "12px", height: "12px" }} />
              </Link>
              <a
                href="https://github.com/sbetav/factus-js"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  fontFamily: "Tahoma, Verdana, Arial, sans-serif",
                  background: "#d4d0c8",
                  color: "#000",
                  border: "2px solid",
                  borderColor: "#ffffff #808080 #808080 #ffffff",
                  textDecoration: "none",
                  cursor: "pointer",
                  boxShadow: "1px 1px 0 #000",
                }}
              >
                <GitHubIcon style={{ width: "13px", height: "13px" }} />
                GitHub
              </a>
            </div>

            {/* Install tabs */}
            <div className="w-full max-w-lg">
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
          </div>

          {/* Status bar */}
          <div
            className="flex items-center gap-3 px-2 py-0.5"
            style={{
              borderTop: "1px solid #808080",
              background: "#d4d0c8",
              fontSize: "11px",
              color: "#000",
            }}
          >
            <div
              className="flex-1"
              style={{
                border: "1px solid",
                borderColor: "#808080 #ffffff #ffffff #808080",
                padding: "0 4px",
              }}
            >
              Listo
            </div>
            <div
              style={{
                border: "1px solid",
                borderColor: "#808080 #ffffff #ffffff #808080",
                padding: "0 8px",
              }}
            >
              Internet
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES WINDOW ────────────────────────────────── */}
      <section className="w-full max-w-5xl px-4 pb-6">
        <div
          style={{
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            background: "#d4d0c8",
            boxShadow: "2px 2px 0 #000",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center px-2 py-1"
            style={{
              background: "linear-gradient(to right, #000080, #1084d0)",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            <span style={{ fontSize: "10px", marginRight: "6px" }}>⚡</span>
            Características principales — factus-js
          </div>

          <div className="p-4">
            {/* Section header as dialog-style box */}
            <div
              className="mb-4 px-3 py-2 text-center"
              style={{
                border: "1px solid",
                borderColor: "#808080 #ffffff #ffffff #808080",
                background: "#d4d0c8",
              }}
            >
              <p style={{ fontSize: "10px", color: "#000080", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>
                Características principales
              </p>
              <p style={{ fontSize: "16px", fontWeight: "bold", color: "#000080", marginTop: "2px" }}>
                Diseñado para la experiencia del desarrollador
              </p>
              <p style={{ fontSize: "12px", color: "#444", marginTop: "4px" }}>
                Un SDK que se quita del camino y te deja concentrarte en tu producto.
              </p>
            </div>

            {/* Feature cards as Win2k group boxes */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className={f.wide ? "md:col-span-2" : "md:col-span-1"}
                    style={{
                      border: "2px solid",
                      borderColor: "#808080 #ffffff #ffffff #808080",
                      background: "#d4d0c8",
                      padding: "12px",
                      position: "relative",
                    }}
                  >
                    {/* Raised icon box */}
                    <div
                      className="flex items-center justify-center mb-3"
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "2px solid",
                        borderColor: "#ffffff #808080 #808080 #ffffff",
                        background: "#d4d0c8",
                      }}
                    >
                      <Icon style={{ width: "16px", height: "16px", color: "#000080" }} aria-hidden />
                    </div>
                    <h3 style={{ fontSize: "12px", fontWeight: "bold", color: "#000080", marginBottom: "6px" }}>
                      {f.title}
                    </h3>
                    <p style={{ fontSize: "11px", lineHeight: "1.5", color: "#333" }}>
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICKSTART WINDOW ──────────────────────────────── */}
      <section className="w-full max-w-5xl px-4 pb-6">
        <div
          style={{
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            background: "#d4d0c8",
            boxShadow: "2px 2px 0 #000",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center px-2 py-1"
            style={{
              background: "linear-gradient(to right, #000080, #1084d0)",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            <span style={{ fontSize: "10px", marginRight: "6px" }}>📄</span>
            Integración rápida — Asistente de configuración
          </div>

          <div className="p-4 grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Left: timeline as wizard steps */}
            <div>
              {/* Wizard-style header */}
              <div
                className="mb-4 px-3 py-2"
                style={{
                  borderBottom: "1px solid #808080",
                  background: "#ece9d8",
                }}
              >
                <p style={{ fontSize: "10px", color: "#000080", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>
                  Integración rápida
                </p>
                <p style={{ fontSize: "16px", fontWeight: "bold", color: "#000080", marginTop: "2px" }}>
                  Emite tu primera factura en minutos
                </p>
              </div>
              <p style={{ fontSize: "12px", color: "#333", lineHeight: "1.6", marginBottom: "16px" }}>
                Sin boilerplate, sin configuración compleja. Configura tus
                credenciales, instancia el cliente y empieza a operar.
              </p>

              {/* Steps as wizard numbered list */}
              <div className="flex flex-col gap-2">
                {steps.map((s, i) => (
                  <div
                    key={s.step}
                    className="flex items-center gap-3"
                    style={{
                      border: "1px solid",
                      borderColor: "#808080 #ffffff #ffffff #808080",
                      background: i === 0 ? "#ece9d8" : "#d4d0c8",
                      padding: "8px 10px",
                    }}
                  >
                    {/* Step number circle */}
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "#000080",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: "bold",
                        flexShrink: 0,
                        fontFamily: "Courier New, monospace",
                      }}
                    >
                      {s.step}
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: i === 0 ? "bold" : "normal", color: "#000" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/docs"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "4px 16px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    fontFamily: "Tahoma, Verdana, Arial, sans-serif",
                    background: "#d4d0c8",
                    color: "#000",
                    border: "2px solid",
                    borderColor: "#ffffff #808080 #808080 #ffffff",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "1px 1px 0 #000",
                  }}
                >
                  Ver guía completa
                  <ArrowRight style={{ width: "11px", height: "11px" }} />
                </Link>
              </div>
            </div>

            {/* Right: code block in a Win2k terminal-style panel */}
            <div>
              <div
                style={{
                  border: "2px solid",
                  borderColor: "#808080 #ffffff #ffffff #808080",
                  background: "#000000",
                }}
              >
                {/* Terminal title bar */}
                <div
                  className="flex items-center justify-between px-2 py-0.5"
                  style={{
                    background: "linear-gradient(to right, #000080, #1084d0)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  <span>📄 quick-start.ts — Bloc de notas</span>
                  <div className="flex gap-1">
                    {["_", "□", "✕"].map((ch) => (
                      <button
                        key={ch}
                        aria-hidden
                        type="button"
                        style={{
                          width: "14px",
                          height: "12px",
                          fontSize: "9px",
                          background: "#d4d0c8",
                          border: "1px solid",
                          borderColor: "#ffffff #808080 #808080 #ffffff",
                          cursor: "default",
                          color: "#000",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1,
                        }}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
                <CodeBlock
                  keepBackground={false}
                  title=""
                  icon={
                    <div className="[&_svg]:size-3.5">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  }
                >
                  <Pre className="text-xs">{highlighted}</Pre>
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER AS TASKBAR-INSPIRED PANEL ───────────────── */}
      <footer
        className="w-full"
        style={{
          borderTop: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          background: "#d4d0c8",
          marginTop: "8px",
        }}
      >
        {/* Footer top area */}
        <div
          className="grid mx-auto max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3 py-6 px-4"
        >
          {/* Brand */}
          <div className="flex flex-col gap-2">
            {/* Win2k-style group label */}
            <div
              className="flex items-center gap-2 mb-1 px-2 py-1"
              style={{
                border: "1px solid",
                borderColor: "#808080 #ffffff #ffffff #808080",
                background: "#d4d0c8",
              }}
            >
              <Image
                src="/factus-js.webp"
                alt="factus-js logo"
                width={20}
                height={20}
                className="object-contain"
                unoptimized
              />
              <span style={{ fontSize: "12px", fontWeight: "bold", color: "#000080" }}>
                factus-js
              </span>
            </div>
            <p style={{ fontSize: "11px", color: "#444" }}>
              JavaScript SDK para la API de Factus.
            </p>
          </div>

          {/* Docs */}
          <nav aria-labelledby="footer-docs">
            <div
              className="mb-2"
              style={{
                borderBottom: "1px solid #808080",
                paddingBottom: "2px",
              }}
            >
              <h3
                id="footer-docs"
                style={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", color: "#000080", letterSpacing: "1px" }}
              >
                Documentación
              </h3>
            </div>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/docs"
                  style={{ fontSize: "12px", color: "#0000cc", textDecoration: "underline" }}
                >
                  Guía SDK
                </Link>
              </li>
              <li>
                <a
                  href={FACTUS_API_DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "12px", color: "#0000cc", textDecoration: "underline" }}
                >
                  API oficial de Factus
                </a>
              </li>
            </ul>
          </nav>

          {/* Links */}
          <nav aria-labelledby="footer-links">
            <div
              className="mb-2"
              style={{
                borderBottom: "1px solid #808080",
                paddingBottom: "2px",
              }}
            >
              <h3
                id="footer-links"
                style={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", color: "#000080", letterSpacing: "1px" }}
              >
                Enlaces
              </h3>
            </div>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href={FACTUS_WEB}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "12px", color: "#0000cc", textDecoration: "underline" }}
                >
                  Sitio oficial de Factus
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sbetav/factus-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "12px", color: "#0000cc", textDecoration: "underline" }}
                >
                  Repositorio en GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Taskbar-like bottom bar */}
        <div
          style={{
            borderTop: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            background: "#d4d0c8",
          }}
        >
          <div
            className="flex flex-col gap-1 py-3 px-4 items-center sm:items-start text-center sm:text-left sm:flex-row sm:justify-between"
            style={{ fontSize: "11px", color: "#444", maxWidth: "1024px", margin: "0 auto" }}
          >
            <p>© {new Date().getFullYear()} factus-js. Licencia MIT.</p>

            <p>
              Hecho con ❤️ por{" "}
              <a
                href="https://github.com/sbetav"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0000cc", textDecoration: "underline" }}
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
                style={{ color: "#0000cc", textDecoration: "underline" }}
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
