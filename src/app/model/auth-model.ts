export interface UserDetails {
  _id: string;
  username: string;
  exp: number;
  iat: number;
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  account: string;
  password: string;
  name?: string;
}