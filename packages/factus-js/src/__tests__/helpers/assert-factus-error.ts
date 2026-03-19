import { expect } from "vitest";
import { FactusError } from "../../client/error";

export async function expectFactusError(
  promise: Promise<unknown>,
  allowedStatusCodes: number[] = [400, 401, 403, 404, 405, 409, 422, 429, 500],
): Promise<FactusError> {
  try {
    await promise;
    throw new Error("Expected FactusError but promise resolved");
  } catch (error) {
    expect(error).toBeInstanceOf(FactusError);
    const factusError = error as FactusError;
    expect(allowedStatusCodes).toContain(factusError.statusCode);
    return factusError;
  }
}
