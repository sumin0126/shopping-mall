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
  const [products, setProducts] = useState<IProductResponse>();

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    productApi.getBestProducts().then(res => {
      setProducts(res);
    });
  }, []);

  // 임시 데이터
  // const BestProducts = [
  //   { id: 1, img: '/img/bestItem/bestItem.png', itemName: 'FUR', itemColor: 'cappuccino' },
  //   { id: 2, img: '/img/bestItem/bestItem2.png', itemName: 'FUR', itemColor: 'shakerato' },
  //   { id: 3, img: '/img/bestItem/bestItem3.png', itemName: 'clo pouch keyring', itemColor: 'wine' },
  //   { id: 4, img: '/img/bestItem/bestItem4.png', itemName: 'clo soft', itemColor: 'black bell' },
  // ];

  // 임시 데이터
  // const NewProducts = [
  //   { id: 1, img: '/img/newarrival/newarrival.jpg', itemName: 'FUR', itemColor: 'cappuccino' },
  //   {
  //     id: 2,
  //     img: '/img/newarrival/newarrival2.jpg',
  //     itemName: 'FUR Large',
  //     itemColor: 'shakerato (LIMITED)',
  //   },
  //   {
  //     id: 3,
  //     img: '/img/newarrival/newarrival3.jpg',
  //     itemName: 'clo circle',
  //     itemColor: 'snow blue (LIMITED)',
  //   },
  //   {
  //     id: 4,
  //     img: '/img/newarrival/newarrival4.jpg',
  //     itemName: 'clo circle',
  //     itemColor: 'butter cream (LIMITED)',
  //   },
  //   { id: 5, img: '/img/newarrival/newarrival5.jpg', itemName: 'FUR', itemColor: 'shakerato' },
  //   { id: 6, img: '/img/newarrival/newarrival6.jpg', itemName: 'tobo L', itemColor: 'sand' },
  //   { id: 7, img: '/img/newarrival/newarrival7.jpg', itemName: 'tobo bag', itemColor: 'brick' },
  //   { id: 8, img: '/img/newarrival/newarrival8.jpg', itemName: 'tobo L', itemColor: 'brick' },
  // ];

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

  if (!products || !products.data) {
    return;
  }

  return (
    <div className="main-container">
      <div className="main-img" ref={imageRef}>
        <Image src="/img/brandstory/brandstory2.png" alt="mainImg" fill style={{ objectFit: 'cover' }} />
      </div>

      <MainProductList products={products.data} category="Best" isSlider={true} />
      <MainProductList products={products.data} category="New" isSlider={false} />

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
