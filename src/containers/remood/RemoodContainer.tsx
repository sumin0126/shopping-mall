import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description remood bag 컨테이너
 */
const RemoodContainer = () => {
  const [products, setProducts] = useState<IProductResponse>();

  // api 호출을 통해 카테고리가 remood인 데이터만 가져오는 함수
  useEffect(() => {
    productApi
      .getProducts({
        categoryCode: 'REMOOD_BAG',
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
  //   { id: 1, imageUrl: '/img/remood/remood1.jpg', name: 'remood L', color: 'low gray', price: 460000 },
  //   { id: 2, imageUrl: '/img/remood/remood2.jpg', name: 'remood L', color: 'black', price: 460000 },
  //   { id: 3, imageUrl: '/img/remood/remood3.jpg', name: 'remood L', color: 'deep pink', price: 460000 },
  //   { id: 4, imageUrl: '/img/remood/remood4.jpg', name: 'remood L', color: 'beige', price: 460000 },
  //   { id: 5, imageUrl: '/img/remood/remood5.jpg', name: 'remood L', color: 'brown', price: 460000 },
  //   { id: 6, imageUrl: '/img/remood/remood6.jpg', name: 'remood L', color: 'silver', price: 460000 },
  //   {
  //     id: 7,
  //     imageUrl: '/img/remood/remood7.jpg',
  //     name: 'remood mini',
  //     color: 'champagne gold',
  //     price: 290000,
  //   },
  //   { id: 8, imageUrl: '/img/remood/remood8.jpg', name: 'remood mini', color: 'black', price: 260000 },
  //   { id: 9, imageUrl: '/img/remood/remood9.jpg', name: 'remood mini', color: 'deep pink', price: 260000 },
  //   {
  //     id: 10,
  //     imageUrl: '/img/remood/remood10.jpg',
  //     name: 'remood mini',
  //     color: 'silver',
  //     price: 260000,
  //   },
  //   {
  //     id: 11,
  //     imageUrl: '/img/remood/remood11.jpg',
  //     name: '3 way remood M',
  //     color: 'deep pink',
  //     price: 340000,
  //   },
  //   { id: 12, imageUrl: '/img/remood/remood12.jpg', name: '3 way remood M', color: 'brown', price: 340000 },
  //   { id: 13, imageUrl: '/img/remood/remood13.jpg', name: '3 way remood M', color: 'beige', price: 340000 },
  //   { id: 14, imageUrl: '/img/remood/remood14.jpg', name: '3 way remood M', color: 'white', price: 340000 },
  //   { id: 15, imageUrl: '/img/remood/remood15.jpg', name: 'remood mini', color: 'brown', price: 260000 },
  //   { id: 16, imageUrl: '/img/remood/remood16.jpg', name: '3 way remood M', color: 'black', price: 340000 },
  // ];

  return (
    <div>
      <NewArrivalList products={products.data} />
    </div>
  );
};

export default RemoodContainer;
