import Image from 'next/image';
import router from 'next/router';
import { useRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

import MainProductList from '@/components/card/mainProduct/MainProductList';
import { headerOpaqueState } from '@/stores/header';

/**
 * @description 메인 컨테이너
 */
const MainContainer = () => {
  const [isOpaque, setIsOpaque] = useRecoilState(headerOpaqueState);
  const imageRef = useRef<HTMLDivElement>(null);

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
    router.push('/lookbook');
  };

  return (
    <div className="main-container">
      <div className="main-img" ref={imageRef}>
        <Image src="/img/main.png" alt="mainImg" fill style={{ objectFit: 'cover' }} />
      </div>

      <MainProductList MainProducts={BestProducts} category="Best" isSlider={true} />
      <MainProductList MainProducts={NewProducts} category="New" isSlider={false} />

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
