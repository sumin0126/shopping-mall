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

  if (!cloProducts || !cloProducts.data || (Array.isArray(cloProducts.data) && cloProducts.data.length === 0)) {
    return <p className="no-product-message">해당 카테고리 상품이 없습니다</p>;
  }
  return (
    <>
      <NewArrivalList products={cloProducts.data} />
    </>
  );
};

export default CloProductsContainer;
