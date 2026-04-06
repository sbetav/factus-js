type Primitive = string | number | boolean | undefined;

export interface HttpSpyCall {
  method: "get" | "post" | "patch" | "put" | "delete" | "postForm";
  path: string;
  payload?: unknown;
}

export interface HttpSpy {
  calls: HttpSpyCall[];
  client: {
    get: (
      path: string,
      params?: Record<string, Primitive>,
      signal?: AbortSignal,
    ) => Promise<unknown>;
    post: (
      path: string,
      body?: unknown,
      signal?: AbortSignal,
    ) => Promise<unknown>;
    patch: (
      path: string,
      body?: unknown,
      signal?: AbortSignal,
    ) => Promise<unknown>;
    put: (
      path: string,
      body?: unknown,
      signal?: AbortSignal,
    ) => Promise<unknown>;
    delete: (path: string, signal?: AbortSignal) => Promise<unknown>;
    postForm: (
      path: string,
      formData: FormData,
      signal?: AbortSignal,
    ) => Promise<unknown>;
  };
}

export function createHttpSpy(returnValue: unknown = { ok: true }): HttpSpy {
  const calls: HttpSpyCall[] = [];

  return {
    calls,
    client: {
      get: async (path, params, _signal) => {
        calls.push({ method: "get", path, payload: params });
        return returnValue;
      },
      post: async (path, body, _signal) => {
        calls.push({ method: "post", path, payload: body });
        return returnValue;
      },
      patch: async (path, body, _signal) => {
        calls.push({ method: "patch", path, payload: body });
        return returnValue;
      },
      put: async (path, body, _signal) => {
        calls.push({ method: "put", path, payload: body });
        return returnValue;
      },
      delete: async (path, _signal) => {
        calls.push({ method: "delete", path });
        return returnValue;
      },
      postForm: async (path, formData, _signal) => {
        calls.push({ method: "postForm", path, payload: formData });
        return returnValue;
      },
    },
  };
}
