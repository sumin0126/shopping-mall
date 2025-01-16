import React, { useEffect } from 'react';

import { productApi } from '@/apis/products';

const BestProducts = () => {
  useEffect(() => {
    productApi.getProducts({ categoryCode: 'CLO_BAG' });
  }, []);
  return <div></div>;
};

export default BestProducts;
