import type { ApiError } from "../types";

export class FactusError extends Error {
  readonly statusCode: number;
  readonly errors: ApiError[];
  /**
   * DIAN validation rule violations returned by the API (typically on 422 responses).
   *
   * Keys are DIAN rule codes and values are the rejection descriptions. Example:
   * ```json
   * {
   *   "FAK24": "Regla: FAK24, Rechazo: No está informado el DV del NIT"
   * }
   * ```
   */
  readonly validationErrors: Record<string, string> | null;

  constructor(
    message: string,
    options: {
      statusCode: number;
      errors?: ApiError[];
      validationErrors?: Record<string, string> | null;
      cause?: unknown;
    },
  ) {
    super(message, { cause: options.cause });
    this.name = "FactusError";
    this.statusCode = options.statusCode;
    this.errors = options.errors ?? [];
    this.validationErrors = options.validationErrors ?? null;
    Object.setPrototypeOf(this, FactusError.prototype);
  }
}
