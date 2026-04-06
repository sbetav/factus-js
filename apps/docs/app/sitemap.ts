import { getSiteUrl } from "@/lib/site";
import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

const BASE = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = source.getPages().map((page) => ({
    url: `${BASE}${page.url}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    lastModified,
  }));

  return [
    {
      url: `${BASE}/`,
      changeFrequency: "weekly",
      priority: 1.0,
      lastModified,
    },
    {
      url: `${BASE}/docs`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified,
    },
    ...pages,
  ];
}
