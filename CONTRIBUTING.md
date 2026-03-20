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

## Releases

Releases are automated using Changesets. Contributors typically only need to submit code changes and versioning/publishing is handled in CI/CD.
