import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { getOgImageAbsoluteUrl, getSiteUrl } from "@/lib/site";

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
    "JavaScript/TypeScript SDK para emitir facturas electrónicas, notas crédito y documentos soporte a través de la API de Factus.",
  openGraph: {
    siteName: "factus-js",
    locale: "es_CO",
    type: "website",
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
    images: [ogImageUrl],
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
        <RootProvider
          i18n={{
            // Keep the locale name aligned with the current search index language
            // (your `/api/search` handler is configured for `english`).
            locale: "english",
            locales: [{ name: "Español", locale: "english" }],
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
    </html>
  );
}
