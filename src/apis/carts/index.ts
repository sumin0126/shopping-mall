import { baseAxios } from '@/utils/axiosInstance';

import type { ICartListResponse, ICartRequest } from '@/apis/carts/type';

export const cartApi = {
  // 장바구니에 있는 상품 조회
  getCarts: () => {
    return baseAxios.get<ICartListResponse>('/carts').then(res => res.data);
  },

  // 장바구니에 상품 추가
  postCarts: (params: ICartRequest) => {
    const { productId, quantity } = params;
    return baseAxios.post<boolean>(`/carts?productId=${productId}&quantity=${quantity}`).then(res => res.data);
  },

  // 장바구니에서 상품 삭제
  deleteCart: (params: number) => {
    return baseAxios.delete<boolean>(`/carts/${params}`).then(res => res.data);
  },
};
