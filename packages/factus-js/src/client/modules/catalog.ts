import type {
    Acquirer,
    AcquirerFilters,
    ApiResponse,
    Country,
    CountryFilters,
    ListParams,
    MeasurementUnit,
    MeasurementUnitFilters,
    Municipality,
    MunicipalityFilters,
    Tribute,
    TributeFilters,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";
import { buildListQueryParams, buildSimpleQueryParams } from "../list-params";

export class CatalogModule {
  constructor(private readonly http: HttpClient) {}

  // ---------------------------------------------------------------------------
  // Municipalities
  // ---------------------------------------------------------------------------

  /**
   * List all municipalities, optionally filtered by name.
   * GET /v1/municipalities
   *
   * Note: uses `filter[name]=...` query format (Laravel-style).
   */
  listMunicipalities(
    params?: ListParams<MunicipalityFilters>,
    options?: RequestOptions,
  ): Promise<ApiResponse<Municipality[]>> {
    return this.http.get(
      "/v1/municipalities",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  // ---------------------------------------------------------------------------
  // Countries
  // ---------------------------------------------------------------------------

  /**
   * List all countries, optionally filtered by name.
   * GET /v1/countries
   *
   * Note: uses `filter[name]=...` query format (Laravel-style).
   */
  listCountries(
    params?: ListParams<CountryFilters>,
    options?: RequestOptions,
  ): Promise<ApiResponse<Country[]>> {
    return this.http.get(
      "/v1/countries",
      buildListQueryParams(params),
      options?.signal,
    );
  }

  // ---------------------------------------------------------------------------
  // Tributes (taxes)
  // ---------------------------------------------------------------------------

  /**
   * List all tribute (tax) codes, optionally filtered by name.
   * GET /v1/tributes/products
   *
   * Note: uses bare `name=...` query format (not Laravel-style).
   */
  listTributes(
    filters?: TributeFilters,
    options?: RequestOptions,
  ): Promise<ApiResponse<Tribute[]>> {
    return this.http.get(
      "/v1/tributes/products",
      buildSimpleQueryParams(filters),
      options?.signal,
    );
  }

  // ---------------------------------------------------------------------------
  // Measurement Units
  // ---------------------------------------------------------------------------

  /**
   * List all measurement units, optionally filtered by name.
   * GET /v1/measurement-units
   *
   * Note: uses bare `name=...` query format (not Laravel-style).
   */
  listMeasurementUnits(
    filters?: MeasurementUnitFilters,
    options?: RequestOptions,
  ): Promise<ApiResponse<MeasurementUnit[]>> {
    return this.http.get(
      "/v1/measurement-units",
      buildSimpleQueryParams(filters),
      options?.signal,
    );
  }

  // ---------------------------------------------------------------------------
  // Acquirers (customers lookup)
  // ---------------------------------------------------------------------------

  /**
   * Look up an acquirer (existing customer) by their identification.
   * GET /v1/dian/acquirer
   */
  getAcquirer(
    filters: AcquirerFilters,
    options?: RequestOptions,
  ): Promise<ApiResponse<Acquirer>> {
    return this.http.get(
      "/v1/dian/acquirer",
      buildSimpleQueryParams(filters),
      options?.signal,
    );
  }
}
