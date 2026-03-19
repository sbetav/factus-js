import type {
  Municipality,
  MunicipalityFilters,
  Country,
  CountryFilters,
  ListParams,
  Tribute,
  TributeFilters,
  MeasurementUnit,
  MeasurementUnitFilters,
  Acquirer,
  AcquirerFilters,
  ApiResponse,
} from "../../types";
import type { HttpClient } from "../http-client";
import { buildListQueryParams } from "../list-params";

export class CatalogModule {
  constructor(private readonly http: HttpClient) {}

  // ---------------------------------------------------------------------------
  // Municipalities
  // ---------------------------------------------------------------------------

  /**
   * List all municipalities, optionally filtered by name.
   * GET /v1/municipalities
   */
  listMunicipalities(
    params?: ListParams<MunicipalityFilters>,
  ): Promise<ApiResponse<Municipality[]>> {
    return this.http.get("/v1/municipalities", buildListQueryParams(params));
  }

  // ---------------------------------------------------------------------------
  // Countries
  // ---------------------------------------------------------------------------

  /**
   * List all countries, optionally filtered by name.
   * GET /v1/countries
   */
  listCountries(
    params?: ListParams<CountryFilters>,
  ): Promise<ApiResponse<Country[]>> {
    return this.http.get("/v1/countries", buildListQueryParams(params));
  }

  // ---------------------------------------------------------------------------
  // Tributes (taxes)
  // ---------------------------------------------------------------------------

  /**
   * List all tribute (tax) codes, optionally filtered by name.
   * GET /v1/tributes/products
   */
  listTributes(filters?: TributeFilters): Promise<ApiResponse<Tribute[]>> {
    return this.http.get(
      "/v1/tributes/products",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  // ---------------------------------------------------------------------------
  // Measurement Units
  // ---------------------------------------------------------------------------

  /**
   * List all measurement units, optionally filtered by name.
   * GET /v1/measurement-units
   */
  listMeasurementUnits(
    filters?: MeasurementUnitFilters,
  ): Promise<ApiResponse<MeasurementUnit[]>> {
    return this.http.get(
      "/v1/measurement-units",
      filters as Record<string, string | number | boolean | undefined>,
    );
  }

  // ---------------------------------------------------------------------------
  // Acquirers (customers lookup)
  // ---------------------------------------------------------------------------

  /**
   * Look up an acquirer (existing customer) by their identification.
   * GET /v1/dian/acquirer
   */
  getAcquirer(filters: AcquirerFilters): Promise<ApiResponse<Acquirer>> {
    return this.http.get(
      "/v1/dian/acquirer",
      filters as unknown as Record<
        string,
        string | number | boolean | undefined
      >,
    );
  }
}
