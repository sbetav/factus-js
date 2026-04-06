import { getMDXComponents } from "@/components/mdx";
import { ViewOptionsPopover } from "@/components/view-options-popover";
import {
    getGithubDocsBlobUrl,
    getOgImageAbsoluteUrl,
    getSiteUrl,
} from "@/lib/site";
import { source } from "@/lib/source";
import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
    MarkdownCopyButton,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

function DocsStructuredData({
  title,
  description,
  pageUrl,
  slug,
}: {
  title: string;
  description: string;
  pageUrl: string;
  slug?: string[];
}) {
  const siteUrl = getSiteUrl();
  const pathParts = (slug ?? []).filter(
    (part): part is string => typeof part === "string" && part.length > 0,
  );
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Documentación",
      item: `${siteUrl}/docs`,
    },
    ...pathParts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 3,
      name: part
        .split("-")
        .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
        .join(" "),
      item: `${siteUrl}/docs/${pathParts.slice(0, index + 1).join("/")}`,
    })),
  ];

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: title,
      description,
      inLanguage: "es-CO",
      url: pageUrl,
      author: {
        "@type": "Person",
        name: "sbetav",
        url: "https://github.com/sbetav",
      },
      publisher: {
        "@type": "Organization",
        name: "factus-js",
        url: siteUrl,
      },
      about: ["Factus API", "Factus SDK", "JavaScript", "TypeScript"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    },
  ];

  return <script type="application/ld+json">{JSON.stringify(graph)}</script>;
}

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const description =
    page.data.description ??
    "Documentación de factus-js para integrar Factus API en JavaScript y TypeScript.";

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsStructuredData
        title={page.data.title}
        description={description}
        pageUrl={new URL(page.url, `${getSiteUrl()}/`).href}
        slug={params.slug}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={`${page.url}.mdx`}>
          Copiar Markdown
        </MarkdownCopyButton>
        <ViewOptionsPopover
          markdownUrl={`${page.url}.mdx`}
          githubUrl={getGithubDocsBlobUrl(page.path)}
        >
          Abrir
        </ViewOptionsPopover>
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const siteUrl = getSiteUrl();
  const ogImageUrl = getOgImageAbsoluteUrl();
  const description =
    page.data.description ??
    "Documentación de factus-js para integrar Factus API en JavaScript y TypeScript.";

  return {
    title: page.data.title,
    description,
    keywords: [
      page.data.title,
      "Factus SDK",
      "Factus API",
      "factus js",
      "factusjs",
      "SDK JavaScript",
      "SDK TypeScript",
    ],
    alternates: {
      canonical: new URL(page.url, `${siteUrl}/`).href,
    },
    openGraph: {
      title: page.data.title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "factus-js",
        },
      ],
      url: page.url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description,
      images: [ogImageUrl],
    },
  };
}
