import { useState, useEffect } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/list/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 상품 - 클로 컨테이너
 */
const CloProductsContainer = () => {
  const [cloProducts, setCloProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 clo인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'CLO_BAG',
      })
      .then(res => {
        setCloProducts(res);
      });
  }, []);

  if (!cloProducts || !cloProducts.data) {
    return;
  }
  return (
    <>
      <NewArrivalList products={cloProducts.data} />
    </>
  );
};

export default CloProductsContainer;
