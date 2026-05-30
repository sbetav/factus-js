import type {
  ApiResponse,
  Company,
  UpdateCompanyInput,
  UploadCompanyLogoResponse,
} from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";

export class CompanyModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get the current company's profile data.
   * GET /v2/companies
   */
  get(options?: RequestOptions): Promise<ApiResponse<Company>> {
    return this.http.get("/v2/companies", undefined, options?.signal);
  }

  /**
   * Update the current company's profile data.
   * PUT /v2/companies
   */
  update(
    input: UpdateCompanyInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<Company>> {
    return this.http.put("/v2/companies", input, options?.signal);
  }

  /**
   * Upload a company logo (PNG, JPG, or JPEG).
   * POST /v2/companies/logo
   */
  uploadLogo(
    image: File | Blob,
    options?: RequestOptions,
  ): Promise<ApiResponse<UploadCompanyLogoResponse>> {
    const formData = new FormData();
    formData.append("image", image);
    return this.http.postForm("/v2/companies/logo", formData, options?.signal);
  }
}
