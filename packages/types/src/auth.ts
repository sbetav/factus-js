export interface TokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface LoginInput {
  grant_type: "password";
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
}

export interface RefreshTokenInput {
  grant_type: "refresh_token";
  client_id: string;
  client_secret: string;
  refresh_token: string;
}
