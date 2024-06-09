export interface ProductRequest {
  name: string;
  img: File[];
  company: string;
  origin: string;
  category1Id: number;
  category2Id: number;
  price: number;
}
export interface newProductListResponse {
  id: string;
  name: string;
  img1: string;
  price: number;
}
