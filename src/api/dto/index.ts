export interface ErrorDto {
  errorCode: number;
  errorMessage: string;
  errors: { [key: string]: string }[];
}
