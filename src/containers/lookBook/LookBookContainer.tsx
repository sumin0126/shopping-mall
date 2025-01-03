import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import LookBookList from '@/components/card/lookBook/LookBookList';
import { headerOpaqueState } from '@/stores/header';

/**
 * @description 룩북 컨테이너
 */
const LookBookContainer = () => {
  const [isOpaque, setIsOpaque] = useRecoilState(headerOpaqueState);

  // 임시 데이터
  const LookBookImages = [
    { id: 1, img: '/img/lookbook/lookbook1.jpg' },
    { id: 2, img: '/img/lookbook/lookbook2.jpg' },
    { id: 3, img: '/img/lookbook/lookbook3.jpg' },
    { id: 4, img: '/img/lookbook/lookbook4.jpg' },
    { id: 5, img: '/img/lookbook/lookbook5.jpg' },
    { id: 6, img: '/img/lookbook/lookbook6.jpg' },
    { id: 7, img: '/img/lookbook/lookbook7.jpg' },
    { id: 8, img: '/img/lookbook/lookbook8.jpg' },
    { id: 9, img: '/img/lookbook/lookbook9.jpg' },
    { id: 10, img: '/img/lookbook/lookbook10.jpg' },
    { id: 11, img: '/img/lookbook/lookbook11.jpg' },
    { id: 12, img: '/img/lookbook/lookbook12.jpg' },
    { id: 13, img: '/img/lookbook/lookbook13.jpg' },
    { id: 14, img: '/img/lookbook/lookbook14.png' },
    { id: 15, img: '/img/lookbook/lookbook15.jpg' },
  ];

  // 첫 렌더링 시에 isOpaque의 상태를 업데이트해주는 함수
  useEffect(() => {
    setIsOpaque(true);
  }, []);

  return (
    <div className="look-book-container">
      <LookBookList LookBookImages={LookBookImages} />
    </div>
  );
};

export default LookBookContainer;
