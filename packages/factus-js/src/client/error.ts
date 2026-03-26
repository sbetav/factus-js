export class FactusError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly errors: Array<{
      code: number;
      message: string;
      detail: string;
      api_version: string;
    }>,
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
    public readonly validationErrors: Record<string, string> | null = null,
  ) {
    super(message);
    this.name = "FactusError";
    Object.setPrototypeOf(this, FactusError.prototype);
  }
}
