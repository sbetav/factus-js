import {
  buildListQueryParams,
  buildSimpleQueryParams,
} from "../../client/list-params";

describe("query parameter builders", () => {
  test("returns undefined when no parameters are provided", () => {
    expect(buildListQueryParams()).toBeUndefined();
    expect(buildSimpleQueryParams()).toBeUndefined();
  });

  test("flattens nested filters and omits nullish values", () => {
    const query = buildListQueryParams({
      filter: {
        status: "1",
        customer: {
          document: "123",
          email: undefined,
        },
        ignored: null,
      },
      page: 2,
      per_page: 25,
    } as never);

    expect(query).toEqual({
      "filter[status]": "1",
      "filter[customer][document]": "123",
      page: 2,
      per_page: 25,
    });
  });

  test("builds pagination without filters", () => {
    expect(buildListQueryParams({ page: 3, per_page: 50 })).toEqual({
      page: 3,
      per_page: 50,
    });
  });

  test("builds simple parameters while omitting undefined values", () => {
    expect(
      buildSimpleQueryParams({
        identification_number: "123",
        active: false,
        omitted: undefined,
      }),
    ).toEqual({
      identification_number: "123",
      active: false,
    });
  });
});
