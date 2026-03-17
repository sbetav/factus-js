import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const BASE = "https://factus-js.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages().map((page) => ({
    url: `${BASE}${page.url}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/docs`, changeFrequency: "weekly", priority: 0.9 },
    ...pages,
  ];
}
