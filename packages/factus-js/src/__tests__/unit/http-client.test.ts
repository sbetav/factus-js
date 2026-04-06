import { describe, expect, test, vi } from "vitest";
import { FactusClient } from "../../client/client";
import { FactusError } from "../../client/error";
import { HttpClient } from "../../client/http-client";
import {
    jsonResponse,
    parseFormBody,
    parseJsonBody,
} from "../helpers/fetch-mock";

const config = {
  clientId: "client-id",
  clientSecret: "client-secret",
  username: "user@example.com",
  password: "secret",
  environment: "sandbox" as const,
};

const authResponse = (n = 1) =>
  jsonResponse({
    access_token: `token-${n}`,
    refresh_token: `refresh-${n}`,
    token_type: "Bearer",
    expires_in: 3600,
  });

describe("HttpClient", () => {
  // vitest unstubGlobals: true (in vitest.config.ts) handles cleanup automatically

  test("logs in and performs authenticated GET with query params", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse())
      .mockResolvedValueOnce(
        jsonResponse({ data: [{ number: "SETP990000203" }] }),
      );

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    const response = await http.get<{ data: Array<{ number: string }> }>(
      "/v1/bills",
      { "filter[number]": "SETP99", page: 1, per_page: 15 },
    );

    expect(response.data[0].number).toBe("SETP990000203");

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch.mock.calls[0][0]).toBe(
      "https://api-sandbox.factus.com.co/oauth/token",
    );
    expect(mockFetch.mock.calls[0][1]?.method).toBe("POST");
    expect(parseFormBody(mockFetch.mock.calls[0][1]?.body)).toEqual({
      grant_type: "password",
      client_id: "client-id",
      client_secret: "client-secret",
      username: "user@example.com",
      password: "secret",
    });

    expect(mockFetch.mock.calls[1][0]).toBe(
      "https://api-sandbox.factus.com.co/v1/bills?filter%5Bnumber%5D=SETP99&page=1&per_page=15",
    );
    expect(mockFetch.mock.calls[1][1]?.method).toBe("GET");
    expect(mockFetch.mock.calls[1][1]?.headers).toMatchObject({
      Authorization: "Bearer token-1",
      Accept: "application/json",
    });
  });

  test("sends JSON body for POST requests", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse())
      .mockResolvedValueOnce(jsonResponse({ ok: true }));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);
    const payload = { reference_code: "I3", numbering_range_id: 8 };

    await http.post("/v1/bills/validate", payload);

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch.mock.calls[1][1]?.method).toBe("POST");
    expect(mockFetch.mock.calls[1][1]?.headers).toMatchObject({
      "Content-Type": "application/json",
    });
    expect(parseJsonBody(mockFetch.mock.calls[1][1]?.body)).toEqual(payload);
  });

  test("uses refresh token when expired token exists", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(
        jsonResponse({
          access_token: "token-1",
          refresh_token: "refresh-1",
          token_type: "Bearer",
          expires_in: 1, // expires immediately (after 60 s buffer → negative)
        }),
      )
      .mockResolvedValueOnce(jsonResponse({ data: [] }))
      .mockResolvedValueOnce(authResponse(2))
      .mockResolvedValueOnce(jsonResponse({ data: [] }));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    await http.get("/v1/subscriptions");
    await http.get("/v1/subscriptions");

    expect(mockFetch.mock.calls[2][0]).toBe(
      "https://api-sandbox.factus.com.co/oauth/token",
    );
    expect(parseFormBody(mockFetch.mock.calls[2][1]?.body)).toEqual({
      grant_type: "refresh_token",
      client_id: "client-id",
      client_secret: "client-secret",
      refresh_token: "refresh-1",
    });
  });

  test("retries request once on 401 with fresh token", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse(1))
      .mockResolvedValueOnce(new Response(null, { status: 401 }))
      .mockResolvedValueOnce(authResponse(2))
      .mockResolvedValueOnce(jsonResponse({ data: [] }));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    const result = await http.get<{ data: unknown[] }>("/v1/bills");

    expect(result.data).toEqual([]);
    // 4 calls: initial auth + 401 request + re-auth + retry request
    expect(mockFetch).toHaveBeenCalledTimes(4);
    expect(mockFetch.mock.calls[2][0]).toContain("/oauth/token");
    expect(mockFetch.mock.calls[3][0]).toContain("/v1/bills");
    // Second request uses the fresh token
    expect(mockFetch.mock.calls[3][1]?.headers).toMatchObject({
      Authorization: "Bearer token-2",
    });
  });

  test("does not retry 401 a second time (no infinite loop)", async () => {
    // All calls after the initial auth return 401, so:
    // call 1: /oauth/token → authResponse(1) OK
    // call 2: /v1/bills → 401, triggers retry
    // call 3: /oauth/token → 401 (re-auth fails → FactusError thrown)
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse(1))
      .mockResolvedValue(new Response(null, { status: 401 }));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    await expect(http.get("/v1/bills")).rejects.toBeInstanceOf(FactusError);
    // auth + first request (401) + re-auth attempt (also 401, throws)
    expect(mockFetch).toHaveBeenCalledTimes(3);
  });

  test("deduplicates concurrent auth requests", async () => {
    // Use mockImplementation so each call gets a fresh Response body
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse(1))
      .mockImplementation(() => Promise.resolve(jsonResponse({ data: [] })));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    await Promise.all([
      http.get("/v1/bills"),
      http.get("/v1/bills"),
      http.get("/v1/bills"),
    ]);

    const authCalls = mockFetch.mock.calls.filter((c) =>
      String(c[0]).includes("/oauth/token"),
    );
    expect(authCalls).toHaveLength(1);
  });

  test("throws FactusError with parsed API payload", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse())
      .mockResolvedValueOnce(
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
      );

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    await expect(http.get("/v1/company/logo")).rejects.toSatisfy(
      (e: unknown) => {
        const err = e as FactusError;
        return (
          err instanceof FactusError &&
          err.statusCode === 403 &&
          err.message === "Forbidden endpoint" &&
          err.errors[0].detail === "No permissions in sandbox" &&
          err.validationErrors === null
        );
      },
    );
  });

  test("throws FactusError with validation error data", async () => {
    const validationPayload = {
      status: "Validation error",
      message: "El documento contiene errores de validación",
      data: {
        message: "El documento contiene errores de validación",
        errors: {
          FAK24: "Regla: FAK24, Rechazo: No está informado el DV del NIT",
          FAK26: "Regla: FAK26, Rechazo: Otro error de validación",
        },
      },
    };

    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse())
      .mockResolvedValueOnce(jsonResponse(validationPayload, 422));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    await expect(
      http.post("/v1/bills/validate", { reference_code: "X" }),
    ).rejects.toSatisfy((e: unknown) => {
      const err = e as FactusError;
      return (
        err instanceof FactusError &&
        err.statusCode === 422 &&
        err.message === "El documento contiene errores de validación" &&
        err.errors.length === 0 &&
        err.validationErrors?.FAK24?.includes("No está informado el DV") ===
          true &&
        err.validationErrors?.FAK26?.includes("Otro error de validación") ===
          true
      );
    });
  });

  test("throws FactusError with statusText when JSON parsing fails", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse())
      .mockResolvedValueOnce(
        new Response("Internal error", {
          status: 500,
          statusText: "Internal Server Error",
        }),
      );

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    await expect(http.get("/v1/bills")).rejects.toSatisfy((e: unknown) => {
      const err = e as FactusError;
      return (
        err instanceof FactusError &&
        err.statusCode === 500 &&
        err.message === "Internal Server Error" &&
        err.errors.length === 0 &&
        err.validationErrors === null
      );
    });
  });

  test("returns undefined for 204 No Content", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(authResponse())
      .mockResolvedValueOnce(new Response(null, { status: 204 }));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    const result = await http.delete<undefined>(
      "/v1/bills/destroy/reference/X",
    );
    expect(result).toBeUndefined();
  });

  test("throws FactusError on authentication failure", async () => {
    const mockFetch = vi
      .fn()
      .mockResolvedValueOnce(new Response("invalid_client", { status: 401 }));

    vi.stubGlobal("fetch", mockFetch);
    const http = new HttpClient(config);

    await expect(http.get("/v1/bills")).rejects.toSatisfy((e: unknown) => {
      const err = e as FactusError;
      return (
        err instanceof FactusError &&
        err.statusCode === 401 &&
        err.message.includes("Authentication failed")
      );
    });
  });
});

describe("FactusClient constructor validation", () => {
  test("throws when clientId is missing", () => {
    expect(
      () =>
        new FactusClient({
          clientId: "",
          clientSecret: "s",
          username: "u",
          password: "p",
        }),
    ).toThrow("clientId is required");
  });

  test("throws when clientSecret is missing", () => {
    expect(
      () =>
        new FactusClient({
          clientId: "c",
          clientSecret: "",
          username: "u",
          password: "p",
        }),
    ).toThrow("clientSecret is required");
  });

  test("throws when username is missing", () => {
    expect(
      () =>
        new FactusClient({
          clientId: "c",
          clientSecret: "s",
          username: "",
          password: "p",
        }),
    ).toThrow("username is required");
  });

  test("throws when password is missing", () => {
    expect(
      () =>
        new FactusClient({
          clientId: "c",
          clientSecret: "s",
          username: "u",
          password: "",
        }),
    ).toThrow("password is required");
  });
});
