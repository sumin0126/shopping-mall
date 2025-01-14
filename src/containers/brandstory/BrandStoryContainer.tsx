import BrandStoryInfo from '@/components/card/brandStory/BrandStoryInfo';
import BrandStorySlider from '@/components/slider/BrandStorySlider';

/**
 * @description 브랜드 스토리 컨테이너
 */
const BrandStoryContainer = () => {
  // 임시 데이터
  const BrandStoryImage = [
    { id: 1, img: '/img/brandstory/brandstory2.png' },
    { id: 2, img: '/img/brandstory/brandstory3.png' },
    { id: 3, img: '/img/brandstory/brandstory4.png' },
    { id: 4, img: '/img/brandstory/brandstory5.png' },
  ];

  return (
    <div className="brand-story-container">
      <BrandStoryInfo />
      <BrandStorySlider BrandStoryImage={BrandStoryImage} />
    </div>
  );
};

export default BrandStoryContainer;
