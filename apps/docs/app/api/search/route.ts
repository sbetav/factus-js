import { source } from "@/lib/source";
import type { StructuredData } from "fumadocs-core/mdx-plugins";
import { createFromSource } from "fumadocs-core/search/server";

/**
 * Cleans structured content to show rendered text instead of raw MDX/component props.
 * TypeTable and similar components produce content with prop names, nested TypeTable JSX,
 * and object syntax. This extracts only human-readable Spanish descriptions.
 */
function cleanStructuredContent(content: string): string {
  let text = content.trim();
  if (!text) return "";

  // 1. Remove nested <TypeTable ... /> blocks (innermost first, repeat until none left)
  // Match innermost by requiring no <TypeTable inside the block
  let prev = "";
  while (prev !== text) {
    prev = text;
    text = text.replace(/<TypeTable(?:(?!<TypeTable)[\s\S])*?\/>/g, " ");
  }
  // Also remove unclosed <TypeTable> fragments
  text = text.replace(/<TypeTable[\s\S]*/g, " ");

  // 2. Extract quoted strings that contain Spanish (descriptions) - most reliable
  const spanishQuotedRegex = /["']([^"']*[áéíóúñÁÉÍÓÚÑüÜ][^"']*)["']/g;
  const quotedDescriptions = [...text.matchAll(spanishQuotedRegex)].map((m) =>
    m[1].trim(),
  );

  // 3. Remove code/structure noise to isolate unquoted Spanish text
  let reduced = text
    .replace(/\btype:\s*["'][^"']*["']/gi, " ")
    .replace(/\brequired:\s*(true|false)/gi, " ")
    .replace(/\b(description|type|required)\s*:\s*(\(|\{|\[)?/gi, " ")
    .replace(
      /\b(params|filter|page|per_page|name|number|eventType|input|identification|first_name|last_name|dv|job_title|organization_department)\s*:\s*/gi,
      " ",
    )
    .replace(/\{\s*|\s*\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // 4. Extract unquoted Spanish phrases (min 15 chars, contains accented char)
  const unquotedSpanishRegex = /[áéíóúñÁÉÍÓÚÑüÜ\w\s,.]{15,}/g;
  const unquotedMatches = reduced.match(unquotedSpanishRegex) ?? [];
  const unquotedDescriptions = unquotedMatches
    .map((s) =>
      s
        .replace(
          /\b(type|required|params|filter|string|number|false|true|ListParams|CountryFilters)\b/gi,
          "",
        )
        .trim(),
    )
    .filter((s) => s.length >= 15 && /[áéíóúñÁÉÍÓÚÑ]/.test(s));

  // 5. Combine and deduplicate; never return raw content with TypeTable/code structure
  const allDescriptions = [...quotedDescriptions, ...unquotedDescriptions];
  const unique = [...new Set(allDescriptions)];

  return unique.join(" ").trim();
}

export const { GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "spanish",
  search: {
    threshold: 0.7,
  },
  buildIndex: async (page) => {
    const pageData = page.data as {
      structuredData?: StructuredData | (() => Promise<StructuredData>);
      load?: () => Promise<{ structuredData: StructuredData }>;
    };
    let structuredData: StructuredData | undefined;
    if ("structuredData" in pageData && pageData.structuredData) {
      structuredData =
        typeof pageData.structuredData === "function"
          ? await pageData.structuredData()
          : pageData.structuredData;
    } else if ("load" in pageData && typeof pageData.load === "function") {
      structuredData = (await pageData.load()).structuredData;
    }

    if (!structuredData) {
      throw new Error("Cannot find structured data from page.");
    }

    const { headings, contents } = structuredData;
    const cleanedContents = contents
      .map((c) => ({
        heading: c.heading,
        content: cleanStructuredContent(c.content),
      }))
      .filter((c) => c.content.length > 0);

    return {
      title: page.data.title ?? page.url.split("/").pop() ?? page.url,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: {
        headings,
        contents: cleanedContents,
      },
    };
  },
});
