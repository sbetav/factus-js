# factus-js

## Tests

### 1) Unit tests (default)

Run the full test command:

```bash
pnpm --filter factus-js test
```

By default, sandbox integration tests are skipped unless enabled in env.

### 2) Sandbox tests (optional)

Copy env template and fill values:

```bash
cp .env.example .env.local
```

In `packages/factus-js/.env.local`:

```env
RUN_SANDBOX_TESTS=true
FACTUS_CLIENT_ID=...
FACTUS_CLIENT_SECRET=...
FACTUS_USERNAME=...
FACTUS_PASSWORD=...
```

Then run tests:

```bash
pnpm --filter factus-js test
```

The sandbox suite logs endpoint groups expected to fail in sandbox:

- `ℹ️` permission-limited endpoints
- `❓` not-testable endpoints
