import { getSiteUrl } from "@/lib/site";
import { FC } from "react";

const StructuredData: FC = () => {
  const siteUrl = getSiteUrl();

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "factus-js",
      alternateName: ["Factus SDK", "factus js", "factusjs"],
      url: siteUrl,
      inLanguage: "es-CO",
      description:
        "Documentación y SDK de JavaScript y TypeScript para integrar Factus API en Node.js.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "factus-js",
      url: siteUrl,
      logo: `${siteUrl}/factus-js.webp`,
      sameAs: ["https://github.com/sbetav/factus-js"],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "@id": `${siteUrl}/#software`,
      name: "factus-js",
      alternateName: ["Factus SDK", "factus js"],
      description:
        "SDK de JavaScript y TypeScript para Factus API. Permite emitir facturas electrónicas, notas crédito y documentos soporte validados ante la DIAN en Colombia.",
      codeRepository: "https://github.com/sbetav/factus-js",
      programmingLanguage: ["TypeScript", "JavaScript"],
      runtimePlatform: "Node.js",
      license: "https://opensource.org/licenses/MIT",
      url: siteUrl,
      author: {
        "@type": "Person",
        name: "sbetav",
        url: "https://github.com/sbetav",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: {
        "@type": "SoftwareApplication",
        name: "Factus",
        url: "https://www.factus.com.co/",
        applicationCategory: "BusinessApplication",
        description: "API de facturación electrónica DIAN Colombia",
      },
    },
  ];

  return <script type="application/ld+json">{JSON.stringify(graph)}</script>;
};

export default StructuredData;
