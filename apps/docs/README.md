# @factus-js/docs

Documentation app for `factus-js`, built with Next.js and Fumadocs.

## Environment variables

| Variable                                | Description                                                                                                                                                                                                                                             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                  | Public URL without trailing slash, for example `https://factusjs.vercel.app`. Sets `metadataBase` and absolute `og:image`. If not defined, it falls back to `VERCEL_PROJECT_PRODUCTION_URL`, then `VERCEL_URL`. Local default: `http://localhost:3000`. |
| `NEXT_PUBLIC_GITHUB_USER`               | GitHub user or organization for "Open on GitHub" links. Default: `sbetav`.                                                                                                                                                                              |
| `NEXT_PUBLIC_GITHUB_REPO`               | Repository name for "Open on GitHub" links. Default: `factus-js`.                                                                                                                                                                                       |
| `NEXT_PUBLIC_GITHUB_BRANCH`             | Branch used for source links. Default: `main`.                                                                                                                                                                                                          |
| `NEXT_PUBLIC_DOCS_CONTENT_PATH_IN_REPO` | Path from repository root to docs content folder (for example `apps/docs/content/docs`). Default uses this value.                                                                                                                                       |

Template: copy [`.env.example`](.env.example) to `.env.local` and adjust as needed.

## Run locally

From the monorepo root:

```bash
pnpm install
pnpm --filter @factus-js/docs dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm --filter @factus-js/docs dev
pnpm --filter @factus-js/docs build
pnpm --filter @factus-js/docs start
pnpm --filter @factus-js/docs lint
pnpm --filter @factus-js/docs format
pnpm --filter @factus-js/docs types:check
```

## Main structure

| Path                      | Description                        |
| ------------------------- | ---------------------------------- |
| `content/docs`            | MDX content for SDK documentation. |
| `app/docs`                | Documentation routes and layout.   |
| `app/(home)`              | Landing page and public pages.     |
| `app/api/search/route.ts` | Search endpoint.                   |
| `lib/source.ts`           | Content adapter (`loader()`).      |
| `public/og.png`           | Shared OG image (1200x630).        |
| `source.config.ts`        | Fumadocs MDX configuration.        |

## Recommended contribution flow

1. Create or edit files in `content/docs`.
2. Validate locally with `pnpm --filter @factus-js/docs dev`.
3. Run checks before opening a PR:

```bash
pnpm --filter @factus-js/docs lint
pnpm --filter @factus-js/docs types:check
pnpm --filter @factus-js/docs build
```

## References

- [Fumadocs](https://fumadocs.dev)
- [Next.js](https://nextjs.org/docs)
