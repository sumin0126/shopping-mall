import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description minimal bag 컨테이너
 */
const MinimalContainer = () => {
  const [products, setProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 minimal인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'MINIMAL_BAG',
      })
      .then(res => setProducts(res));
  }, []);

  if (!products || !products.data) {
    return;
  }

  // 임시 데이터
  // const products = [
  //   { id: 1, imageUrl: '/img/minimal/minimal1.jpg', name: 'ari bag', color: 'pale peach', price: 170000 },
  //   { id: 2, imageUrl: '/img/minimal/minimal2.jpg', name: 'ari bag', color: 'black', price: 170000 },
  //   { id: 3, imageUrl: '/img/minimal/minimal3.jpg', name: 'ari bag', color: 'cream pink', price: 170000 },
  //   { id: 4, imageUrl: '/img/minimal/minimal4.jpg', name: 'berca bag', color: 'skin beige', price: 130000 },
  //   { id: 5, imageUrl: '/img/minimal/minimal5.jpg', name: 'berca bag', color: 'rouge pink', price: 130000 },
  //   { id: 6, imageUrl: '/img/minimal/minimal6.jpg', name: 'ari bag', color: 'ivory', price: 170000 },
  //   { id: 7, imageUrl: '/img/minimal/minimal7.jpg', name: 'ari bag', color: 'lemon butter', price: 170000 },
  //   { id: 8, imageUrl: '/img/minimal/minimal8.jpg', name: 'berca bag', color: 'lake blue', price: 130000 },
  //   { id: 9, imageUrl: '/img/minimal/minimal9.jpg', name: 'berca bag', color: 'butter ivory', price: 130000 },
  //   { id: 10, imageUrl: '/img/minimal/minimal10.jpg', name: 'berca bag', color: 'black', price: 130000 },
  //   { id: 11, imageUrl: '/img/minimal/minimal11.jpg', name: 'berca bag', color: 'french red', price: 130000 },
  // ];
  return (
    <>
      <NewArrivalList products={products.data} />
    </>
  );
};

export default MinimalContainer;
