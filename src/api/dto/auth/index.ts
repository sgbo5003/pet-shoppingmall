export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  address: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
  id: number;
  email: string;
  name: string;
  adminYn: string;
  address: string;
  point: number;
}
