import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/list/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 상품 - 미니멀 컨테이너
 */
const MinimalProductsContainer = () => {
  const [minimalProducts, setMinimalProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 minimal인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'MINIMAL_BAG',
      })
      .then(res => setMinimalProducts(res));
  }, []);

  if (!minimalProducts || !minimalProducts.data) {
    return;
  }

  return (
    <>
      <NewArrivalList products={minimalProducts.data} />
    </>
  );
};

export default MinimalProductsContainer;
