import Slider from 'react-slick';

import Image from 'next/image';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface IImagesProps {
  images: string[];
}

/**
 * @description 상품 대표이미지 슬라이더 컴포넌트
 *
 * @param images - 대표이미지 URL들을 담은 배열
 */
const ProductImageSlider = ({ images }: IImagesProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-image-slider-container">
      <Slider {...settings}>
        {images.map(src => (
          <div className="slider-wrapper" key={src}>
            <div className="image-wrapper">
              <Image src={src} alt="img" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImageSlider;
