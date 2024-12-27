import Image from 'next/image';

import MainProductList from '@/components/card/mainProduct/MainProductList';
import router from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { headerOpaqueState } from '@/stores/header';

const MainContainer = () => {
  const [isOpaque, setIsOpaque] = useRecoilState(headerOpaqueState);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpaque(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        // 이미지 높이만큼 스크롤됐는지 확인
        const imageHeight = imageRef.current.offsetHeight;
        setIsOpaque(window.scrollY + 120 > imageHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      setIsOpaque(true);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 임시 데이터
  const BestProducts = [
    { id: 1, img: '/img/bestItem.png', itemName: 'FUR', itemColor: 'cappuccino' },
    { id: 2, img: '/img/bestItem2.png', itemName: 'FUR', itemColor: 'shakerato' },
    { id: 3, img: '/img/bestItem3.png', itemName: 'clo pouch keyring', itemColor: 'wine' },
    { id: 4, img: '/img/bestItem4.png', itemName: 'clo soft', itemColor: 'black bell' },
  ];

  const NewProducts = [
    { id: 1, img: '/img/newItem.jpg', itemName: 'tobo L', itemColor: 'brick' },
    { id: 2, img: '/img/newItem2.jpg', itemName: 'tobo bag', itemColor: 'brick' },
    { id: 3, img: '/img/newItem3.jpg', itemName: 'tobo L', itemColor: 'sand' },
    { id: 4, img: '/img/newItem4.jpg', itemName: 'clo circle', itemColor: 'black bell' },
    { id: 5, img: '/img/newItem.jpg', itemName: 'tobo L', itemColor: 'brick' },
    { id: 6, img: '/img/newItem2.jpg', itemName: 'tobo bag', itemColor: 'brick' },
    { id: 7, img: '/img/newItem3.jpg', itemName: 'tobo L', itemColor: 'sand' },
    { id: 8, img: '/img/newItem4.jpg', itemName: 'clo circle', itemColor: 'black bell' },
  ];

  // 클릭 시 룩북 페이지로 이동하는 함수
  const handleClickLookBook = () => {
    router.push('/lookbook');
  };

  return (
    <div className="main-container">
      <div className="main-img" ref={imageRef}>
        <Image src="/img/main.png" alt="mainImg" fill style={{ objectFit: 'cover' }} />
      </div>

      <MainProductList MainProducts={BestProducts} title="Best" isSlider={true} />
      <MainProductList MainProducts={NewProducts} title="New" isSlider={false} />

      <div className="lookBook-wrapper">
        <div className="lookBook-banner-img">
          <Image src="/img/lookBook.jpeg" alt="lookBookImg" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <button onClick={handleClickLookBook}>LOOK BOOK</button>
      </div>
    </div>
  );
};

export default MainContainer;
