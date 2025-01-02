import axios from 'axios';

import type { IProductRequest, IProductResponse } from '@/apis/products/type';

// 상품의 데이터를 가져오는 함수
export const productApi = {
  getProducts: (params?: IProductRequest) => {
    return axios.get<IProductResponse>('http://43.201.96.112/products', { params }).then(res => res.data);
  },
};
