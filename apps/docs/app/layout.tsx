import { getOgImageAbsoluteUrl, getSiteUrl } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "components/structured-data";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const ogImageUrl = getOgImageAbsoluteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: "%s | factus-js",
    default: "factus-js | SDK JavaScript y TypeScript para Factus API",
  },
  description:
    "Factus SDK para JavaScript y TypeScript. Integra Factus API en Node.js para emitir facturas electrónicas, notas crédito y documentos soporte validados ante la DIAN en Colombia.",
  keywords: [
    "Factus SDK",
    "Factus API",
    "factus js",
    "factusjs",
    "sdk factus",
    "api factus",
    "facturación electrónica",
    "factura electrónica",
    "DIAN",
    "Colombia",
    "API",
    "SDK",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Factus",
    "factus-js",
    "sdk javascript factus",
    "sdk typescript factus",
    "notas crédito",
    "documentos soporte",
    "facturación electrónica Colombia",
    "integración API",
    "electronic invoicing",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "factus-js",
    locale: "es_CO",
    type: "website",
    title: "factus-js | SDK JavaScript y TypeScript para Factus API",
    description:
      "Factus SDK para JavaScript y TypeScript. Integra Factus API en Node.js para emitir facturas electrónicas, notas crédito y documentos soporte.",
    url: "/",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "factus-js — JavaScript SDK para la API de facturación electrónica Factus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "factus-js | SDK JavaScript y TypeScript para Factus API",
    description:
      "Factus SDK para JavaScript y TypeScript con autenticación automática, tipado estricto y soporte para facturación electrónica DIAN.",
    images: [ogImageUrl],
  },
  verification: {
    google: "VtR1sa2X3WgAFpn6RPNd3xhrtzS0ba7cxAqITuskuOY",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${geistMono.variable} ${geist.className}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <StructuredData />
        <RootProvider
          i18n={{
            // Keep the locale name aligned with the current search index language
            // (your `/api/search` handler is configured for `spanish`).
            locale: "spanish",
            locales: [{ name: "Español", locale: "spanish" }],
            translations: {
              search: "Buscar",
              searchNoResult: "No se encontraron resultados",
              toc: "En esta página",
              tocNoHeadings: "Sin encabezados",
              lastUpdate: "Última actualización",
              chooseLanguage: "Elegir un idioma",
              nextPage: "Página siguiente",
              previousPage: "Página anterior",
              chooseTheme: "Tema",
              editOnGithub: "Editar en GitHub",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
