import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import classNames from 'classnames';

import { productApi } from '@/apis/products';
import ProductDetailHeader from '@/components/card/productDetail/ProductDetailHeader';
import ProductDetailInfo from '@/components/card/productDetail/ProductDetailInfo';
import ProductDetailMain from '@/components/card/productDetail/ProductDetailMain';

import type { IProduct } from '@/apis/products/type';

// 버튼 상태 텍스트
const BUTTON_STATES = {
  DETAIL: 'DETAIL',
  INFO: 'INFO',
};

/**
 * @description 상품 상세 컨테이너
 */
const ProductDetailContainer = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(BUTTON_STATES.DETAIL);

  const router = useRouter();

  const { id } = router.query;

  // api 호출을 통해 해당 id의 상품 데이터 가져오는 함수
  useEffect(() => {
    if (id) {
      const numberId = Number(id); // id를 숫자로 변환
      productApi.getProduct({ id: numberId }).then(res => {
        setProduct(res);
      });
    }
  }, [id]);

  // 버튼 클릭 시 버튼의 상태를 업데이트 해주는 함수
  const handleClickButton = (button: string) => {
    setActiveButton(button);
  };

  // 상품 메인이미지 데이터
  const ProductImage = [
    '/img/productdetail/productdetailmain1.jpg',
    '/img/productdetail/productdetailmain1-2.jpg',
    '/img/productdetail/productdetailmain1-3.jpg',
    '/img/productdetail/productdetailmain1-4.jpg',
  ];

  if (!product) {
    return;
  }

  return (
    <div className="product-detail-container">
      {/* 상품 정보 */}
      <ProductDetailHeader product={product} />

      {/* 상품 이미지와 정보를 나눠주는 버튼들 */}
      <div className="main-button">
        <button
          className={classNames('detail', {
            active: activeButton === BUTTON_STATES.DETAIL,
          })}
          onClick={() => handleClickButton(BUTTON_STATES.DETAIL)}
        >
          DETAIL
        </button>
        <button
          className={`info ${activeButton === BUTTON_STATES.INFO ? 'active' : ''}`}
          onClick={() => handleClickButton(BUTTON_STATES.INFO)}
        >
          INFO
        </button>
      </div>

      {/* 상품 메인 이미지들 */}
      {activeButton === 'DETAIL' && <ProductDetailMain ProductImage={ProductImage} />}

      {/* 상품 상세 정보 */}
      {activeButton === 'INFO' && <ProductDetailInfo product={product} />}
    </div>
  );
};

export default ProductDetailContainer;
