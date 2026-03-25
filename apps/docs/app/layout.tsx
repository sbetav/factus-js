import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { getOgImageAbsoluteUrl, getSiteUrl } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "factus-js — JavaScript SDK para la API de Factus",
  },
  description:
    "JavaScript/TypeScript SDK para emitir facturas electrónicas, notas crédito y documentos soporte a través de la API de Factus. Integración con la DIAN en Colombia.",
  keywords: [
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
    "notas crédito",
    "documentos soporte",
    "facturación electrónica Colombia",
    "integración API",
    "electronic invoicing",
  ],
  openGraph: {
    siteName: "factus-js",
    locale: "es_CO",
    type: "website",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: "factus-js",
              description:
                "SDK de JavaScript/TypeScript para la API de facturación electrónica Factus. Emite facturas electrónicas, notas crédito y documentos soporte validados ante la DIAN en Colombia.",
              codeRepository: "https://github.com/sbetav/factus-js",
              programmingLanguage: ["TypeScript", "JavaScript"],
              runtimePlatform: "Node.js",
              license: "https://opensource.org/licenses/MIT",
              url: getSiteUrl(),
              author: {
                "@type": "Person",
                name: "sbetav",
                url: "https://github.com/sbetav",
              },
              about: {
                "@type": "SoftwareApplication",
                name: "Factus",
                url: "https://www.factus.com.co/",
                applicationCategory: "BusinessApplication",
                description: "API de facturación electrónica DIAN Colombia",
              },
            }),
          }}
        />
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
