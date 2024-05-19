export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
  email: string;
  name: string;
}
