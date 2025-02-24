import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/list/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 상품 - 악세서리 컨테이너
 */
const AccessoryProductsContainer = () => {
  const [accessoryProducts, setAccessoryProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 accessory인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'ACCESSORY',
      })
      .then(res => {
        setAccessoryProducts(res);
      });
  }, []);

  if (
    !accessoryProducts ||
    !accessoryProducts.data ||
    (Array.isArray(accessoryProducts.data) && accessoryProducts.data.length === 0)
  ) {
    return <p className="no-product-message">해당 카테고리 상품이 없습니다</p>;
  }
  return (
    <>
      <NewArrivalList products={accessoryProducts.data} />
    </>
  );
};

export default AccessoryProductsContainer;
