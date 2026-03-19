import { HttpClient } from "../../client/http-client";
import { FactusError } from "../../client/error";
import {
  createMockFetch,
  jsonResponse,
  parseJsonBody,
} from "../helpers/fetch-mock";

const config = {
  clientId: "client-id",
  clientSecret: "client-secret",
  username: "user@example.com",
  password: "secret",
  environment: "sandbox" as const,
};

describe("HttpClient", () => {
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  test("logs in and performs authenticated GET with query params", async () => {
    const mock = createMockFetch([
      jsonResponse({
        access_token: "token-1",
        refresh_token: "refresh-1",
        token_type: "Bearer",
        expires_in: 3600,
      }),
      jsonResponse({ data: [{ number: "SETP990000203" }] }),
    ]);

    globalThis.fetch = mock.fetch;
    const http = new HttpClient(config);

    const response = await http.get<{ data: Array<{ number: string }> }>(
      "/v1/bills",
      { "filter[number]": "SETP99", page: 1, per_page: 15 },
    );

    expect(response.data[0].number).toBe("SETP990000203");

    expect(mock.calls).toHaveLength(2);
    expect(mock.calls[0].url).toBe(
      "https://api-sandbox.factus.com.co/oauth/token",
    );
    expect(mock.calls[0].init?.method).toBe("POST");
    expect(parseJsonBody(mock.calls[0].init?.body)).toEqual({
      grant_type: "password",
      client_id: "client-id",
      client_secret: "client-secret",
      username: "user@example.com",
      password: "secret",
    });

    expect(mock.calls[1].url).toBe(
      "https://api-sandbox.factus.com.co/v1/bills?filter%5Bnumber%5D=SETP99&page=1&per_page=15",
    );
    expect(mock.calls[1].init?.method).toBe("GET");
    expect(mock.calls[1].init?.headers).toMatchObject({
      Authorization: "Bearer token-1",
      Accept: "application/json",
    });
  });

  test("sends JSON body for POST requests", async () => {
    const mock = createMockFetch([
      jsonResponse({
        access_token: "token-1",
        refresh_token: "refresh-1",
        token_type: "Bearer",
        expires_in: 3600,
      }),
      jsonResponse({ ok: true }),
    ]);

    globalThis.fetch = mock.fetch;
    const http = new HttpClient(config);
    const payload = { reference_code: "I3", numbering_range_id: 8 };

    await http.post("/v1/bills/validate", payload);

    expect(mock.calls).toHaveLength(2);
    expect(mock.calls[1].init?.method).toBe("POST");
    expect(mock.calls[1].init?.headers).toMatchObject({
      "Content-Type": "application/json",
    });
    expect(parseJsonBody(mock.calls[1].init?.body)).toEqual(payload);
  });

  test("uses refresh token when expired token exists", async () => {
    const mock = createMockFetch([
      jsonResponse({
        access_token: "token-1",
        refresh_token: "refresh-1",
        token_type: "Bearer",
        expires_in: 1,
      }),
      jsonResponse({ data: [] }),
      jsonResponse({
        access_token: "token-2",
        refresh_token: "refresh-2",
        token_type: "Bearer",
        expires_in: 3600,
      }),
      jsonResponse({ data: [] }),
    ]);

    globalThis.fetch = mock.fetch;
    const http = new HttpClient(config);

    await http.get("/v1/subscriptions");
    await http.get("/v1/subscriptions");

    expect(mock.calls[2].url).toBe(
      "https://api-sandbox.factus.com.co/oauth/token",
    );
    expect(parseJsonBody(mock.calls[2].init?.body)).toEqual({
      grant_type: "refresh_token",
      client_id: "client-id",
      client_secret: "client-secret",
      refresh_token: "refresh-1",
    });
  });

  test("throws FactusError with parsed API payload", async () => {
    const mock = createMockFetch([
      jsonResponse({
        access_token: "token-1",
        refresh_token: "refresh-1",
        token_type: "Bearer",
        expires_in: 3600,
      }),
      jsonResponse(
        {
          status: "error",
          errors: [
            {
              code: 123,
              message: "Forbidden endpoint",
              detail: "No permissions in sandbox",
              api_version: "v1",
            },
          ],
        },
        403,
      ),
    ]);

    globalThis.fetch = mock.fetch;
    const http = new HttpClient(config);

    try {
      await http.get("/v1/company/logo");
      throw new Error("Expected request to throw FactusError");
    } catch (error) {
      const factusError = error as FactusError;
      expect(factusError).toBeInstanceOf(FactusError);
      expect(factusError.statusCode).toBe(403);
      expect(factusError.message).toBe("Forbidden endpoint");
      expect(factusError.errors[0].detail).toBe("No permissions in sandbox");
    }
  });

  test("throws FactusError with statusText when JSON parsing fails", async () => {
    const mock = createMockFetch([
      jsonResponse({
        access_token: "token-1",
        refresh_token: "refresh-1",
        token_type: "Bearer",
        expires_in: 3600,
      }),
      new Response("Internal error", {
        status: 500,
        statusText: "Internal Server Error",
      }),
    ]);

    globalThis.fetch = mock.fetch;
    const http = new HttpClient(config);

    await expect(http.get("/v1/bills")).rejects.toBeInstanceOf(FactusError);
  });

  test("returns undefined for 204 No Content", async () => {
    const mock = createMockFetch([
      jsonResponse({
        access_token: "token-1",
        refresh_token: "refresh-1",
        token_type: "Bearer",
        expires_in: 3600,
      }),
      new Response(null, { status: 204 }),
    ]);

    globalThis.fetch = mock.fetch;
    const http = new HttpClient(config);

    const result = await http.delete<undefined>(
      "/v1/bills/destroy/reference/X",
    );
    expect(result).toBeUndefined();
  });
});
