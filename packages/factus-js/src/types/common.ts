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
