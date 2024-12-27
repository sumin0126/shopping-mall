import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProduct {
  id: number;
  img: string;
  itemName: string;
  itemColor: string;
}

interface IMainProductSliderProps {
  MainProducts: IProduct[];
}

const MainProductSlider = ({ MainProducts }: IMainProductSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {MainProducts.map(product => (
          <div key={product.id} className="slider-card-wrapper">
            <div className="img-box">
              <Image src={product.img} alt="itemImg" width={300} height={300} style={{ objectFit: 'cover' }} />
            </div>
            <div className="product-info">
              <p className="product-name">{product.itemName}</p>
              <p className="product-color">{product.itemColor}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainProductSlider;