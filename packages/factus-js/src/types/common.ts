export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface ApiError {
  code: number;
  message: string;
  detail: string;
  api_version: string;
}

export interface ErrorResponse {
  status: string;
  errors: ApiError[];
}

/**
 * Error response shape returned by the API for validation failures (typically 422).
 *
 * ```json
 * {
 *   "status": "Validation error",
 *   "message": "El documento contiene errores de validación",
 *   "data": {
 *     "message": "El documento contiene errores de validación",
 *     "errors": {
 *       "FAK24": "Regla: FAK24, Rechazo: No está informado el DV del NIT"
 *     }
 *   }
 * }
 * ```
 */
export interface ValidationErrorResponse {
  status: string;
  message: string;
  data: {
    message: string;
    errors: Record<string, string>;
  };
}

export interface PaginationLink {
  url: string | null;
  label: string | number;
  active: boolean;
  page?: number;
}

export interface PaginatedData<T> {
  data: T[];
  pagination: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    links: PaginationLink[];
  };
}

export interface ListParams<TFilter> {
  filter?: TFilter;
  page?: number;
  per_page?: number;
}
