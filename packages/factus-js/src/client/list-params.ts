import type { ListParams } from "../types";

type QueryValue = string | number | boolean | undefined;

export function buildListQueryParams<TFilter extends object>(
  params?: ListParams<TFilter>,
): Record<string, QueryValue> | undefined {
  if (!params) return undefined;

  const query: Record<string, QueryValue> = {};

  if (params.filter) {
    for (const [key, value] of Object.entries(params.filter) as Array<
      [string, QueryValue]
    >) {
      query[`filter[${key}]`] = value;
    }
  }

  query.page = params.page;
  query.per_page = params.per_page;

  return query;
}

/**
 * Flattens a plain filter object directly into query params (no `filter[key]`
 * wrapping). Used for catalog endpoints that accept bare query strings.
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
