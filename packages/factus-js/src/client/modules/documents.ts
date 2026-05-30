import type { DownloadDocumentXmlResponse } from "../../types";
import type { HttpClient, RequestOptions } from "../http-client";

export class DocumentsModule {
  constructor(private readonly http: HttpClient) {}

  /**
   * Download the document XML as a base64-encoded string,
   * including the associated file name.
   * GET /v2/documents/{trackId}/download-xml
   */
  downloadXml(
    trackId: string,
    options?: RequestOptions,
  ): Promise<DownloadDocumentXmlResponse> {
    return this.http.get(
      `/v2/documents/${trackId}/download-xml`,
      undefined,
      options?.signal,
    );
  }
}
