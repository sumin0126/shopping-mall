import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import BestProducts from '@/containers/products/parts/BestProducts';
import NewProducts from '@/containers/products/parts/NewProducts';

const ProductsContainer = () => {
  const [tab, setTab] = useState('');

  const router = useRouter();

  const category = router.query as unknown as string;

  useEffect(() => {
    setTab(category);
  }, [category]);

  return (
    <>
      {tab === 'new' && <NewProducts />}
      {tab === 'best' && <BestProducts />}
    </>
  );
};

export default ProductsContainer;
