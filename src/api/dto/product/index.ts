export interface ProductRequest {
  name: string;
  img: File[];
  company: string;
  origin: string;
  category1Id: number;
  category2Id: number;
  regular_price: number;
  price: number;
  delivery_fee: number;
}
export interface newProductListResponse {
  id: string;
  name: string;
  img1: string;
  regular_price: number;
  price: number;
  delivery_fee: number;
}

export interface ProductDetailResponse {
  id: number;
  name: string;
  img1: string;
  img2: string | null;
  img3: string | null;
  imgFiles: string[];
  company: string;
  origin: string;
  Category1Id: number;
  Category2Id: number;
  regular_price: number;
  price: number;
  delivery_fee: number;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
  UserId: number;
}

export const initProductDetailResponse = {
  id: 0,
  name: "",
  img1: "",
  img2: null,
  img3: null,
  imgFiles: [],
  company: "",
  origin: "",
  Category1Id: 0,
  Category2Id: 0,
  regular_price: 0,
  price: 0,
  delivery_fee: 0,
  createdAt: "",
  deletedAt: null,
  updatedAt: null,
  UserId: 0,
};
