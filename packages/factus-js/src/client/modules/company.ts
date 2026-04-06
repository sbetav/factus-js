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
   * GET /v1/company
   */
  get(options?: RequestOptions): Promise<ApiResponse<Company>> {
    return this.http.get("/v1/company", undefined, options?.signal);
  }

  /**
   * Update the current company's profile data.
   * PUT /v1/company
   */
  update(
    input: UpdateCompanyInput,
    options?: RequestOptions,
  ): Promise<ApiResponse<Company>> {
    return this.http.put("/v1/company", input, options?.signal);
  }

  /**
   * Upload a company logo (PNG, JPG, or JPEG).
   * POST /v1/company/logo
   *
   * Note: The API returns { url_log: string } (not url_logo) — see UploadCompanyLogoResponse.
   */
  uploadLogo(
    image: File | Blob,
    options?: RequestOptions,
  ): Promise<ApiResponse<UploadCompanyLogoResponse>> {
    const formData = new FormData();
    formData.append("image", image);
    return this.http.postForm("/v1/company/logo", formData, options?.signal);
  }
}
