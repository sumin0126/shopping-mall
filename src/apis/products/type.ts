import type { PRODUCT_CATEGORY } from '@/constants/products';

export type TProductCategory = (typeof PRODUCT_CATEGORY)[keyof typeof PRODUCT_CATEGORY];

/** 전체 상품 목록 조회 (카테고리 필터링 가능) Request */
export interface IProductRequest {
  category?: TProductCategory;
}

export interface IProduct {
  /** 상품 고유 번호 */
  id: number;
  name: string;
  price: number;
  image_url: string;
  category_name?: TProductCategory;
  description?: string;
  color?: string;
  is_new?: boolean;
  is_best?: boolean;
}

/** 전체 상품 목록 조회 (카테고리 필터링 가능) Response */
export interface IProductResponse {
  data: IProduct[];
}
