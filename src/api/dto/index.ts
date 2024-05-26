export interface ErrorDto {
  errorCode: number;
  errorMessage: string;
  errors: { [key: string]: string }[];
}
export interface CategoryAllResponse {
  id: number;
  name: string;
}
