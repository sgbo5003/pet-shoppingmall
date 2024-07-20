export interface ErrorDto {
  errorCode: number;
  errorMessage: string;
  errors: { [key: string]: string }[];
}
export interface CategoryAllResponse {
  id: number;
  name: string;
}
export interface UserWalletResponse {
  id: number;
  point: number;
  UserId: number;
}
export const initUserWalletResponse = {
  id: 0,
  point: 0,
  UserId: 0,
};
export interface UserWalletPointUpdate {
  point: string;
}
