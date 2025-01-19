import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import AccessoryPtoductsContainer from '@/containers/products/parts/AccessoryPtoductsContainer';
import CloProductsContainer from '@/containers/products/parts/CloProductsContainer';
import MinimalProductsContainer from '@/containers/products/parts/MinimalProductsContainer';
import RemoodProductsContainer from '@/containers/products/parts/RemoodProductsContainer';
import TwinProductsContainer from '@/containers/products/parts/TwinProductsContainer';

/**
 * @description 상품 컨테이너
 */
const ProductsContainer = () => {
  const [categoryCode, setCategoryCode] = useState('');

  const router = useRouter();

  useEffect(() => {
    setCategoryCode(router.query.categoryCode as string);
  }, [router.query.categoryCode]);

  return (
    <>
      {/* 신상품, 전체상품은 어떻게 가져와야하는지 모르겠음 */}
      {categoryCode === 'MINIMAL_BAG' && <MinimalProductsContainer />}
      {categoryCode === 'CLO_BAG' && <CloProductsContainer />}
      {categoryCode === 'REMOOD_BAG' && <RemoodProductsContainer />}
      {categoryCode === 'TWIN_BAG' && <TwinProductsContainer />}
      {categoryCode === 'ACCESSORY' && <AccessoryPtoductsContainer />}
    </>
  );
};

export default ProductsContainer;
