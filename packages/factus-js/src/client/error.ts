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
  ) {
    super(message);
    this.name = "FactusError";
    Object.setPrototypeOf(this, FactusError.prototype);
  }
}
