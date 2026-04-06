# Contributing

This repo is organized as a monorepo (pnpm + Turborepo):

- `packages/factus-js`: the publishable npm SDK
- `apps/docs`: Next.js documentation site

## Quickstart (local)

1. Install dependencies:
   - `pnpm install`
2. Run the dev servers:
   - `pnpm dev`

## Verification before opening a PR

Run these from the repo root:

- `pnpm lint`
- `pnpm check-types`
- `pnpm test` (or `pnpm --filter factus-js test`)

## Docs

The docs site lives in `apps/docs`. If your PR changes SDK behavior or public APIs, please also update the relevant docs/MDX pages where appropriate.

If you update `packages/factus-js/CHANGELOG.md`, regenerate the docs changelog page and commit the result:

```bash
pnpm --filter @factus-js/docs generate:changelog
```

This updates `apps/docs/content/docs/changelog.mdx`, which is committed so deploys stay read-only.

## Agent context (from official docs)

To generate local markdown context from the official Factus docs (`https://developers.factus.com.co/`):

```bash
pnpm --filter factus-js docs:sync
```

The script tries to use `wget` mirror mode and falls back to a Node.js crawler when `wget` is not available. It also trims long base64 payloads into placeholders like `[TRIMMED_BASE64_12345_CHARS]` to keep context size manageable.

Output folders:

- `packages/factus-js/.external-factus-docs/`
- `packages/factus-js/.external-factus-mirror/`

## Releases

Releases are automated using Changesets. Contributors typically only need to submit code changes and versioning/publishing is handled in CI/CD.

The release workflow also verifies that the committed docs changelog matches `packages/factus-js/CHANGELOG.md`.
