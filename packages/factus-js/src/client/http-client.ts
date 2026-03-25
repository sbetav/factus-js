import type { TokenResponse, LoginInput, RefreshTokenInput } from "../types";
import { FactusError } from "./error";

export interface FactusClientConfig {
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  /**
   * Use 'sandbox' for the test environment or 'production' for live.
   * Defaults to 'production'.
   */
  environment?: "sandbox" | "production";
  /**
   * Override the base URL entirely (useful for testing / proxies).
   * When provided, the `environment` option is ignored.
   */
  baseUrl?: string;
}

export const BASE_URLS = {
  sandbox: "https://api-sandbox.factus.com.co",
  production: "https://api.factus.com.co",
} as const;

interface TokenState {
  accessToken: string;
  refreshToken: string;
  /** Unix timestamp (ms) at which the access token expires */
  expiresAt: number;
}

/** @internal */
export class HttpClient {
  private readonly baseUrl: string;
  private readonly config: FactusClientConfig;
  private tokenState: TokenState | null = null;
  private pendingAuth: Promise<string> | null = null;

  constructor(config: FactusClientConfig) {
    this.config = config;
    this.baseUrl =
      config.baseUrl ?? BASE_URLS[config.environment ?? "production"];
  }

  // ---------------------------------------------------------------------------
  // Auth
  // ---------------------------------------------------------------------------

  private async fetchToken(
    body: LoginInput | RefreshTokenInput,
  ): Promise<TokenState> {
    const formBody = new URLSearchParams();
    for (const [key, value] of Object.entries(body)) {
      formBody.set(key, String(value));
    }

    const response = await fetch(`${this.baseUrl}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: formBody,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new FactusError(
        `Authentication failed: ${text}`,
        response.status,
        [],
      );
    }

    const data = (await response.json()) as TokenResponse;
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      // Subtract 60 s of buffer so we refresh slightly before actual expiry
      expiresAt: Date.now() + (data.expires_in - 60) * 1000,
    };
  }

  async login(): Promise<void> {
    this.tokenState = await this.fetchToken({
      grant_type: "password",
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      username: this.config.username,
      password: this.config.password,
    });
  }

  private async refreshToken(): Promise<void> {
    if (!this.tokenState) {
      return this.login();
    }
    try {
      this.tokenState = await this.fetchToken({
        grant_type: "refresh_token",
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        refresh_token: this.tokenState.refreshToken,
      });
    } catch {
      // If refresh fails, fall back to a full login
      return this.login();
    }
  }

  private async doAuth(): Promise<string> {
    if (this.tokenState?.refreshToken) {
      await this.refreshToken();
    } else {
      await this.login();
    }
    return this.tokenState!.accessToken;
  }

  private async ensureAuth(): Promise<string> {
    if (this.tokenState && Date.now() < this.tokenState.expiresAt) {
      return this.tokenState.accessToken;
    }

    // Deduplicate concurrent auth requests
    if (!this.pendingAuth) {
      this.pendingAuth = this.doAuth().finally(() => {
        this.pendingAuth = null;
      });
    }
    return this.pendingAuth;
  }

  // ---------------------------------------------------------------------------
  // Core request helpers
  // ---------------------------------------------------------------------------

  async request<T>(
    method: string,
    path: string,
    options: {
      params?: Record<string, string | number | boolean | undefined>;
      body?: unknown;
      formData?: FormData;
    } = {},
  ): Promise<T> {
    const token = await this.ensureAuth();

    let url = `${this.baseUrl}${path}`;
    if (options.params) {
      const qs = new URLSearchParams();
      for (const [k, v] of Object.entries(options.params)) {
        if (v !== undefined) qs.set(k, String(v));
      }
      const str = qs.toString();
      if (str) url += `?${str}`;
    }

    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };

    let fetchBody: BodyInit | undefined;
    if (options.formData) {
      fetchBody = options.formData;
      // Do NOT set Content-Type — the browser / fetch sets it automatically with boundary
    } else if (options.body !== undefined) {
      headers["Content-Type"] = "application/json";
      fetchBody = JSON.stringify(options.body);
    }

    const response = await fetch(url, {
      method,
      headers,
      body: fetchBody,
    });

    if (!response.ok) {
      let errorPayload: {
        status: string;
        errors: Array<{
          code: number;
          message: string;
          detail: string;
          api_version: string;
        }>;
      } | null = null;
      try {
        errorPayload = await response.json();
      } catch {
        // ignore JSON parse errors
      }
      const message = errorPayload?.errors?.[0]?.message ?? response.statusText;
      throw new FactusError(
        message,
        response.status,
        errorPayload?.errors ?? [],
      );
    }

    // Some endpoints return 204 No Content
    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  }

  get<T>(
    path: string,
    params?: Record<string, string | number | boolean | undefined>,
  ): Promise<T> {
    return this.request<T>("GET", path, { params });
  }

  post<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>("POST", path, { body });
  }

  patch<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>("PATCH", path, { body });
  }

  put<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>("PUT", path, { body });
  }

  delete<T>(path: string): Promise<T> {
    return this.request<T>("DELETE", path);
  }

  postForm<T>(path: string, formData: FormData): Promise<T> {
    return this.request<T>("POST", path, { formData });
  }
}
