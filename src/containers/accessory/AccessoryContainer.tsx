import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/list/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 악세서리 컨테이너
 */
const AccessoryContainer = () => {
  const [products, setProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 accessory인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'ACCESSORY',
      })
      .then(res => {
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

export default AccessoryContainer;
