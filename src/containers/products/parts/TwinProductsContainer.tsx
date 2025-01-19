import { useState, useEffect } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/list/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 상품 - 트윈 컨테이너
 */
const TwinProductsContainer = () => {
  const [twinProducts, setTwinProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 twin인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'TWIN_BAG',
      })
      .then(res => {
        setTwinProducts(res);
      });
  }, []);

  if (!twinProducts || !twinProducts.data) {
    return;
  }
  return (
    <>
      <NewArrivalList products={twinProducts.data} />
    </>
  );
};

export default TwinProductsContainer;
