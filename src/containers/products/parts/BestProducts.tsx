import React, { useEffect } from 'react';

import axios from 'axios';

import { productApi } from '@/apis/products';

const BestProducts = () => {
  useEffect(() => {
    productApi.getProducts({ category: 'CLO_BAG' });
  }, []);
  return <div></div>;
};

export default BestProducts;
