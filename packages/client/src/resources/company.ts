import type {
  Company,
  UpdateCompanyInput,
  UploadCompanyLogoResponse,
  ApiResponse,
} from "@factus-js/types";
import type { HttpClient } from "../http-client";

export class CompanyResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get the current company's profile data.
   * GET /v1/companies
   */
  get(): Promise<ApiResponse<Company>> {
    return this.http.get("/v1/companies");
  }

  /**
   * Update the current company's profile data.
   * PUT /v1/companies
   */
  update(input: UpdateCompanyInput): Promise<ApiResponse<Company>> {
    return this.http.put("/v1/companies", input);
  }

  /**
   * Upload a company logo (PNG, JPG, or JPEG).
   * POST /v1/companies/upload-logo
   *
   * Note: The API returns { url_log: string } (not url_logo) — see UploadCompanyLogoResponse.
   */
  uploadLogo(
    image: File | Blob,
  ): Promise<ApiResponse<UploadCompanyLogoResponse>> {
    const formData = new FormData();
    formData.append("image", image);
    return this.http.postForm("/v1/companies/upload-logo", formData);
  }
}
