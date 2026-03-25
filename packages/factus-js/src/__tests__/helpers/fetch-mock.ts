export interface MockCall {
  url: string;
  init?: RequestInit;
}

export interface MockFetchController {
  calls: MockCall[];
  fetch: typeof fetch;
}

export function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function textResponse(body: string, status = 200): Response {
  return new Response(body, { status });
}

export function createMockFetch(queue: Response[]): MockFetchController {
  const calls: MockCall[] = [];

  const fetchImpl: typeof fetch = async (input, init) => {
    const url = typeof input === "string" ? input : input.toString();
    calls.push({ url, init });

    const next = queue.shift();
    if (!next) {
      throw new Error(`No mock response left for ${url}`);
    }
    return next;
  };

  return {
    calls,
    fetch: fetchImpl,
  };
}

export function parseJsonBody(body: BodyInit | null | undefined): unknown {
  if (typeof body !== "string") return undefined;
  return JSON.parse(body);
}

export function parseFormBody(
  body: BodyInit | null | undefined,
): Record<string, string> | undefined {
  if (!(body instanceof URLSearchParams)) return undefined;
  return Object.fromEntries(body.entries());
}
