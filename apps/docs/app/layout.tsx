import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://factus-js.vercel.app"),
  title: {
    template: "%s | factus-js",
    default: "factus-js — SDK de JavaScript para la API de Factus",
  },
  description:
    "SDK de JavaScript/TypeScript para emitir facturas electrónicas, notas crédito y documentos soporte a través de la API de Factus desde Node.js.",
  openGraph: {
    siteName: "factus-js",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
