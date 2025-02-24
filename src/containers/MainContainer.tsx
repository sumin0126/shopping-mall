import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import router from 'next/router';

import { productApi } from '@/apis/products';
import MainProductList from '@/components/list/MainProductList';
import { PATHNAME } from '@/constants/pathname';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 메인 컨테이너
 */
const MainContainer = () => {
  const [bestProducts, setBestProducts] = useState<IProductResponse>();
  const [newProducts, setNewProducts] = useState<IProductResponse>();

  const imageRef = useRef<HTMLDivElement>(null);

  // api 호출을 통해 best 상품 데이터만 가져오는 함수
  useEffect(() => {
    productApi.getBestProducts().then(res => {
      setBestProducts(res);
    });
  }, []);

  // api 호출을 통해 new 상품 데이터만 가져오는 함수
  useEffect(() => {
    productApi.getNewProducts().then(res => {
      setNewProducts(res);
    });
  }, []);

  // 클릭 시 룩북 페이지로 이동하는 함수
  const handleClickLookBook = () => {
    router.push(PATHNAME.LOOKBOOK);
  };

  if (!bestProducts?.data || !newProducts?.data) {
    return;
  }

  return (
    <div className="main-container">
      <div className="main-img" ref={imageRef}>
        <Image src="/img/brandstory/brandstory3.png" alt="mainImg" fill style={{ objectFit: 'cover' }} />
      </div>

      <MainProductList products={bestProducts.data} category="Best" isSlider={true} isVisibleList={true} />
      <MainProductList products={newProducts.data} category="New" isSlider={false} />

      <div className="lookBook-wrapper">
        <div className="lookBook-banner-img">
          <Image src="/img/brandstory/brandstory4.png" alt="lookBookImg" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <button onClick={handleClickLookBook}>LOOK BOOK</button>
      </div>
    </div>
  );
};

export default MainContainer;
