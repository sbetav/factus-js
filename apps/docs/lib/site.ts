/**
 * Canonical site URL for metadata, sitemap, and OG resolution.
 * Set `NEXT_PUBLIC_SITE_URL` on Vercel (e.g. https://factusjs.vercel.app).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

/** GitHub repo for nav links and “Abrir en GitHub” (override via env on Vercel if needed). */
export const gitConfig = {
  user: process.env.NEXT_PUBLIC_GITHUB_USER ?? "sbetav",
  repo: process.env.NEXT_PUBLIC_GITHUB_REPO ?? "factus-js",
  branch: process.env.NEXT_PUBLIC_GITHUB_BRANCH ?? "main",
};

/**
 * Path from repo root to the MDX `content/docs` dir (monorepo: apps/docs/content/docs).
 */
export const docsContentPathInRepo =
  process.env.NEXT_PUBLIC_DOCS_CONTENT_PATH_IN_REPO ?? "apps/docs/content/docs";

export function getGithubDocsBlobUrl(pagePath: string): string {
  const base = `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}`;
  const dir = docsContentPathInRepo.replace(/\/$/, "");
  const rel = pagePath.replace(/^\//, "");
  return `${base}/${dir}/${rel}`;
}
