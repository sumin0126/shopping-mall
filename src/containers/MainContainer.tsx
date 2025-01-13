import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import router from 'next/router';

import { useRecoilState } from 'recoil';

import { productApi } from '@/apis/products';
import MainProductList from '@/components/card/mainProduct/MainProductList';
import { PATHNAME } from '@/constants/pathname';
import { headerOpaqueState } from '@/stores/header';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 메인 컨테이너
 */
const MainContainer = () => {
  const [, setIsOpaque] = useRecoilState(headerOpaqueState);
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

  // 첫 렌더링 시에 isOpaque의 상태를 업데이트해주는 함수
  useEffect(() => {
    setIsOpaque(false);
  }, []);

  // window에 스크롤 이벤트 걸어서 header 배경을 변경해주는 함수
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        // 배경이미지 높이를 변수에 저장
        const imageHeight = imageRef.current.offsetHeight;
        // 스크롤 위치가 배경이미지 높이 + 120px을 초과했는지 확인
        // 초과했다면 setIsOpaque(true)로 업데이트
        setIsOpaque(window.scrollY + 120 > imageHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // MainContainer 컴포넌트가 언마운트될때 처리
    return () => {
      // setIsOpaque(true)를 업데이트함으로써 다른 페이지에서는 헤더바 배경이 흰색임
      setIsOpaque(true);
      window.removeEventListener('scroll', handleScroll);
    };
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
        <Image src="/img/brandstory/brandstory2.png" alt="mainImg" fill style={{ objectFit: 'cover' }} />
      </div>

      <MainProductList products={bestProducts.data} category="Best" isSlider={true} />
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
