import BrandStoryInfo from '@/components/card/brandstory/BrandStoryInfo';
import BrandStorySlider from '@/components/card/brandstory/BrandStorySlider';

const BrandStoryContainer = () => {
  // 임시 데이터
  const BrandStoryImage = [
    { id: 1, img: '/img/brandstory2.png' },
    { id: 2, img: '/img/brandstory3.png' },
    { id: 3, img: '/img/brandstory4.png' },
    { id: 4, img: '/img/brandstory5.png' },
  ];

  return (
    <div className="brand-story-container">
      <BrandStoryInfo />
      <BrandStorySlider BrandStoryImage={BrandStoryImage} />
    </div>
  );
};

export default BrandStoryContainer;
