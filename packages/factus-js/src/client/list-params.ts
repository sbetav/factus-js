import type { ListParams } from "../types";

type QueryValue = string | number | boolean | undefined;

function appendQueryValue(
  query: Record<string, QueryValue>,
  key: string,
  value: unknown,
): void {
  if (value === undefined || value === null) return;

  if (typeof value === "object" && !Array.isArray(value)) {
    for (const [nestedKey, nestedValue] of Object.entries(
      value as Record<string, unknown>,
    )) {
      appendQueryValue(query, `${key}[${nestedKey}]`, nestedValue);
    }
    return;
  }

  query[key] = value as QueryValue;
}

export function buildListQueryParams<TFilter extends object>(
  params?: ListParams<TFilter>,
): Record<string, QueryValue> | undefined {
  if (!params) return undefined;

  const query: Record<string, QueryValue> = {};

  if (params.filter) {
    for (const [key, value] of Object.entries(params.filter) as Array<
      [string, unknown]
    >) {
      appendQueryValue(query, `filter[${key}]`, value);
    }
  }

  query.page = params.page;
  query.per_page = params.per_page;

  return query;
}

/**
 * Flattens a plain filter object directly into query params (no `filter[key]`
 * wrapping). Used for endpoints that accept bare query strings.
 */
export function buildSimpleQueryParams<T extends object>(
  obj?: T,
): Record<string, QueryValue> | undefined {
  if (!obj) return undefined;
  const params: Record<string, QueryValue> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) params[key] = value as QueryValue;
  }
  return params;
}
