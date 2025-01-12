import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description twin bag 컨테이너
 */
const TwinContainer = () => {
  const [products, setProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 twin인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'TWIN_BAG',
      })
      .then(res => {
        setProducts(res);
      });
  }, []);

  if (!products || !products.data) {
    return;
  }

  // 임시 데이터
  // const products = [
  //   { id: 1, imageUrl: '/img/twin/twin1.jpeg', name: 'twin mini', color: 'ivory', price: 240000 },
  //   { id: 2, imageUrl: '/img/twin/twin2.jpeg', name: 'twin bag', color: 'ivory', price: 280000 },
  //   { id: 3, imageUrl: '/img/twin/twin3.jpeg', name: 'twin mini', color: 'soho pink', price: 240000 },
  //   { id: 4, imageUrl: '/img/twin/twin4.jpeg', name: 'twin mini', color: 'gray beige', price: 240000 },
  //   { id: 5, imageUrl: '/img/twin/twin5.jpg', name: 'twin mini', color: 'black', price: 240000 },
  //   { id: 6, imageUrl: '/img/twin/twin6.jpg', name: 'twin bag', color: 'soho pink', price: 280000 },
  //   { id: 7, imageUrl: '/img/twin/twin7.jpg', name: 'twin bag', color: 'lemon', price: 280000 },
  //   { id: 8, imageUrl: '/img/twin/twin8.jpg', name: 'twin bag', color: 'red wine', price: 280000 },
  //   { id: 9, imageUrl: '/img/twin/twin9.jpg', name: 'twin bag', color: 'gray beige', price: 280000 },
  //   { id: 10, imageUrl: '/img/twin/twin10.jpg', name: 'twin bag', color: 'black', price: 280000 },
  //   { id: 11, imageUrl: '/img/twin/twin11.jpeg', name: 'twin mini', color: 'red wine', price: 240000 },
  // ];
  return (
    <>
      <NewArrivalList products={products.data} />
    </>
  );
};

export default TwinContainer;
