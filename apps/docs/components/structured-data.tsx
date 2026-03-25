import { getSiteUrl } from "@/lib/site";
import { FC } from "react";

const StructuredData: FC = () => {
  return (
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
  );
};

export default StructuredData;
