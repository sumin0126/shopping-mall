import type { PRODUCT_CATEGORY } from '@/constants/products';

export type TProductCategory = (typeof PRODUCT_CATEGORY)[keyof typeof PRODUCT_CATEGORY];

/** 전체 상품 목록 조회 (카테고리 필터링 가능) Request */
export interface IProductsRequest {
  categoryCode?: TProductCategory;
}

export interface IProduct {
  /** 상품 고유 번호 */
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: TProductCategory;
  isNew: boolean;
  isBest: boolean;
  description?: string;
  color?: string;
}

/** 전체 상품 목록 조회 (카테고리 필터링 가능) Response */
export interface IProductResponse {
  data: IProduct[];
}

/** 단일 상품 */
export interface IProductRequest {
  id: number;
}
