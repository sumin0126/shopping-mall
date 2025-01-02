import BrandStoryInfo from '@/components/card/brandStory/BrandStoryInfo';
import BrandStorySlider from '@/components/card/brandStory/BrandStorySlider';
import { headerOpaqueState } from '@/stores/header';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

/**
 * @description 브랜드 스토리 컨테이너
 */
const BrandStoryContainer = () => {
  const [isOpaque, setIsOpaque] = useRecoilState(headerOpaqueState);

  // 임시 데이터
  const BrandStoryImage = [
    { id: 1, img: '/img/brandstory/brandstory2.png' },
    { id: 2, img: '/img/brandstory/brandstory3.png' },
    { id: 3, img: '/img/brandstory/brandstory4.png' },
    { id: 4, img: '/img/brandstory/brandstory5.png' },
  ];

  // 첫 렌더링 시에 isOpaque의 상태를 업데이트해주는 함수
  useEffect(() => {
    setIsOpaque(true);
  }, []);

  return (
    <div className="brand-story-container">
      <BrandStoryInfo />
      <BrandStorySlider BrandStoryImage={BrandStoryImage} />
    </div>
  );
};

export default BrandStoryContainer;
