import { baseAxios } from '@/utils/axiosInstance';

import type { IProductsRequest, IProductResponse, IProductRequest, IProduct } from '@/apis/products/type';

// 상품의 데이터를 가져오는 함수
export const productApi = {
  // 전체상품 가져오는 함수
  getProducts: (params?: IProductsRequest) => {
    return baseAxios.get<IProductResponse>('/products', { params }).then(res => res.data);
  },

  // 신상품만 가져오는 함수
  getNewProducts: () => {
    return baseAxios.get<IProductResponse>('/products/new').then(res => res.data);
  },

  // 베스트 상품만 가져오는 함수
  getBestProducts: () => {
    return baseAxios.get<IProductResponse>('/products/best').then(res => res.data);
  },

  // 해당 아이디의 상품 데이터만 가져오는 함수
  getProduct: (params: IProductRequest) => {
    return baseAxios.get<IProduct>(`/products/${params.id}`).then(res => res.data);
  },
};
