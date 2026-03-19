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
