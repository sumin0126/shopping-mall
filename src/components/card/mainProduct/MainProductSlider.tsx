import Slider from 'react-slick';

import Image from 'next/image';
import { useRouter } from 'next/router';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { PATHNAME } from '@/constants/pathname';

import type { IProduct } from '@/apis/products/type';

interface IMainProductSliderProps {
  products: IProduct[];
}

/**
 * @description 메인상품 이미지슬라이더 컴포넌트
 *
 * @param products - 상품 데이터들
 */
const MainProductSlider = ({ products }: IMainProductSliderProps) => {
  const router = useRouter();

  // 슬라이더 기본 셋팅
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

  // 상품 대표이미지 클릭 시 상품 상세페이지로 이동하는 함수
  const handleClickProduct = (productId: number) => {
    router.push({
      pathname: PATHNAME.PRODUCT_DETAIL,
      query: { id: productId },
    });
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="slider-card-wrapper" onClick={() => handleClickProduct(product.id)}>
            <div className="img-box">
              <Image src={product.imageUrl} alt="itemImg" width={300} height={300} style={{ objectFit: 'cover' }} />
            </div>
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-color">{product.color}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainProductSlider;
