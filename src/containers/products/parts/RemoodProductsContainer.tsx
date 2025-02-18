import { useState, useEffect } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/list/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 상품 - 리무드 컨테이너
 */
const RemoodProductsContainer = () => {
  const [remoodProducts, setRemoodProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 remood인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'REMOOD_BAG',
      })
      .then(res => {
        setRemoodProducts(res);
      });
  }, []);

  if (
    !remoodProducts ||
    !remoodProducts.data ||
    (Array.isArray(remoodProducts.data) && remoodProducts.data.length === 0)
  ) {
    return <p>상품이 없습니다</p>;
  }
  return (
    <>
      <NewArrivalList products={remoodProducts.data} />
    </>
  );
};

export default RemoodProductsContainer;
