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

To generate local markdown context from the official Factus docs, run this command from the repo root:

```bash
pnpm sync-factus-docs
```

The script opens an interactive version selector:

- `v1`: `https://developers.factus.com.co/v1`
- `v2`: `https://developers.factus.com.co/`

The script uses a Node.js crawler that follows every reachable documentation page under the selected docs URL. It extracts the page content and convert it to Markdown, also it trims long base64 payloads to keep context size manageable.

Output folders:

- Markdown snapshots: `factus-docs/v1/` and `factus-docs/v2/`
- Temporary site mirrors: `.temp/factus-docs-mirror-v1/` and `.temp/factus-docs-mirror-v2/`

### Docs findings (`factus-docs/v2-findings.md`)

`factus-docs/v2-findings.md` tracks ambiguities, inconsistencies, and likely typos found in the synced Factus **v2** mirror, plus the matching **SDK decision** for each item.

When you sync docs or change SDK behavior from official docs:

1. Diff `factus-docs/v2/` against the previous snapshot.
2. Check whether any open finding is now fixed (or newly introduced).
3. Update `factus-docs/v2-findings.md` in the same PR when you resolve, reopen, or add an item.
4. Prefer the working rule at the top of that file when Factus docs disagree (field tables → examples → broader docs → prose).

## Releases

Releases are automated using Changesets. Contributors typically only need to submit code changes and versioning/publishing is handled in CI/CD.

The release workflow also verifies that the committed docs changelog matches `packages/factus-js/CHANGELOG.md`.
