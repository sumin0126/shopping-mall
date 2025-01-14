import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProps {
  id: number;
  img: string;
}

interface IBrandStorySlider {
  BrandStoryImage: IProps[];
}

/**
 * @description 브랜드스토리 이미지슬라이더 컴포넌트
 *
 * @param img - 이미지 아이디
 * @param img - 이미지
 */
const BrandStorySlider = ({ BrandStoryImage }: IBrandStorySlider) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="brand-story-slider">
      <Slider {...settings}>
        {BrandStoryImage.map(image => (
          <div key={image.id} className="slider-card-wrapper">
            <Image src={image.img} alt="brandStorySliderImg" fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandStorySlider;
