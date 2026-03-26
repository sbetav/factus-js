import { FactusError } from "../../client/error";

// ---------------------------------------------------------------------------
// Result collector — accumulates per-method outcomes and prints a summary
// ---------------------------------------------------------------------------

export type MethodResult =
  | { status: "ok" }
  | { status: "expected-error"; error: FactusError }
  | { status: "unexpected-error"; error: unknown };

export const results = new Map<string, MethodResult>();

export function formatError(error: unknown): string {
  if (error instanceof FactusError) {
    const parts: string[] = [`${error.statusCode} — ${error.message}`];
    if (error.errors.length > 0) {
      parts.push(`errors: ${JSON.stringify(error.errors, null, 2)}`);
    }
    if (error.validationErrors) {
      parts.push(
        `validationErrors: ${JSON.stringify(error.validationErrors, null, 2)}`,
      );
    }
    return parts.join("\n    ");
  }
  return String(error);
}

export function printResults(): void {
  const maxName = Math.max(...[...results.keys()].map((k) => k.length));

  for (const [name, result] of results) {
    const padded = name.padEnd(maxName);
    switch (result.status) {
      case "ok":
        console.log(`  OK    ${padded}`);
        break;
      case "expected-error":
        console.log(`  WARN  ${padded}  ${formatError(result.error)}`);
        break;
      case "unexpected-error":
        console.log(`  FAIL  ${padded}  ${formatError(result.error)}`);
        break;
    }
  }
}

// ---------------------------------------------------------------------------
// Test helpers
// ---------------------------------------------------------------------------

export async function run(name: string, call: Promise<unknown>): Promise<void> {
  try {
    const result = await call;
    expect(result).not.toBeUndefined();
    results.set(name, { status: "ok" });
  } catch (error) {
    results.set(name, { status: "unexpected-error", error });
    throw error;
  }
}

export async function runAllowConflict(
  name: string,
  call: Promise<unknown>,
  allowedStatusCodes: number[] = [409],
): Promise<void> {
  try {
    const result = await call;
    expect(result).not.toBeUndefined();
    results.set(name, { status: "ok" });
  } catch (error) {
    if (
      error instanceof FactusError &&
      allowedStatusCodes.includes(error.statusCode)
    ) {
      results.set(name, { status: "expected-error", error });
      return;
    }
    results.set(name, { status: "unexpected-error", error });
    throw error;
  }
}

export async function runExpectError(
  name: string,
  call: Promise<unknown>,
  allowedStatusCodes: number[] = [400, 401, 403, 404, 405, 409, 422, 429, 500],
): Promise<void> {
  try {
    await call;
    const error = new Error("Expected FactusError but promise resolved");
    results.set(name, { status: "unexpected-error", error });
    throw error;
  } catch (error) {
    if (error instanceof FactusError) {
      expect(allowedStatusCodes).toContain(error.statusCode);
      results.set(name, { status: "expected-error", error });
      return;
    }
    throw error;
  }
}

/**
 * Create a document that is expected to fail validation but still be persisted
 * server-side (e.g. with invalid identification data). The API will throw a
 * FactusError, but the document is created regardless, which allows us to
 * subsequently delete it.
 *
 * The error is swallowed and logged to the results as an expected-error.
 * If the call somehow succeeds, that's also fine — we log it as ok.
 */
export async function createInvalid(
  name: string,
  call: Promise<unknown>,
): Promise<void> {
  try {
    await call;
    return;
  } catch (error) {
    if (error instanceof FactusError) {
      // Expected — the doc is persisted with validation errors.
      return;
    }
    results.set(name, { status: "unexpected-error", error });
    throw error;
  }
}
