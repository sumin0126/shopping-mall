import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import AccessoryProductsContainer from '@/containers/products/parts/AccessoryProductsContainer';
import CloProductsContainer from '@/containers/products/parts/CloProductsContainer';
import MinimalProductsContainer from '@/containers/products/parts/MinimalProductsContainer';
import RemoodProductsContainer from '@/containers/products/parts/RemoodProductsContainer';
import TwinProductsContainer from '@/containers/products/parts/TwinProductsContainer';

/**
 * @description 상품 컨테이너
 */
const ProductsContainer = () => {
  // URL의 CategoryCode 값을 저장하는 상태
  const [categoryCode, setCategoryCode] = useState('');

  const router = useRouter();

  // URL의 CategoryCode 값이 변경될때마다 CategoryCode를 string으로 변환해서 상태에 저장
  useEffect(() => {
    setCategoryCode(router.query.categoryCode as string);
  }, [router.query.categoryCode]);

  return (
    <>
      {categoryCode === 'MINIMAL_BAG' && <MinimalProductsContainer />}
      {categoryCode === 'CLO_BAG' && <CloProductsContainer />}
      {categoryCode === 'REMOOD_BAG' && <RemoodProductsContainer />}
      {categoryCode === 'TWIN_BAG' && <TwinProductsContainer />}
      {categoryCode === 'ACCESSORY' && <AccessoryProductsContainer />}
    </>
  );
};

export default ProductsContainer;
