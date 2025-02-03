import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/list/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 신상품 컨테이너
 */
const NewArrivalContainer = () => {
  const [products, setProducts] = useState<IProductResponse>();

  // api 호출을 통해 신상품 데이터만 가져오는 함수
  useEffect(() => {
    productApi.getNewProducts().then(res => {
      setProducts(res);
    });
  }, []);

  // if (!products || !products.data) {
  //   return console.log('상품이 없습니다');
  // }

  return (
    <div className="new-arrival-container">
      {!products || !products.data ? <p>상품이 없습니다.</p> : <NewArrivalList products={products.data} />}
    </div>
  );
};

export default NewArrivalContainer;
