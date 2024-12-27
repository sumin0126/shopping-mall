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

const BrandStorySlider = ({ BrandStoryImage }: IBrandStorySlider) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='brand-story-slider'>
      <Slider {...settings}>
        {BrandStoryImage.map((image) => (
          <div key={image.id} className='slider-card-wrapper'>
            <Image src={image.img} alt='brandStorySliderImg' fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandStorySlider;
