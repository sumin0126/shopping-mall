import { useState, useEffect } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 전체상품 컨테이너
 */
const AllItemsContainer = () => {
  const [products, setProducts] = useState<IProductResponse>();

  // api로부터 상품의 데이터를 가져오는 함수
  useEffect(() => {
    productApi.getProducts().then(res => {
      setProducts(res);
    });
  }, []);

  if (!products || !products.data) {
    return;
  }

  return (
    <>
      <NewArrivalList products={products.data} />
    </>
  );
};

export default AllItemsContainer;
