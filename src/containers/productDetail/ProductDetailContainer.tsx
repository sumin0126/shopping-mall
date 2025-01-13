import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

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

  // 서버로부터 해당 id의 데이터 가져오는 함수
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

  // 상품 사이즈 데이터
  const ProductSize = {
    width: 54,
    height: 30,
    strap: 60,
    weight: 505,
  };

  if (!product) {
    return;
  }

  // IProps 타입으로 변환
  const productData = {
    imageUrl: Array.isArray(product.imageUrl) ? product.imageUrl : [product.imageUrl || ''],
    name: product.name || '',
    color: product.color || '',
    price: product.price || 0,
    texture: product.texture || '',
    description: product.description || '',
  };

  return (
    <div className="product-detail-container">
      {/* 상품 정보 */}
      <ProductDetailHeader product={productData} />

      {/* 상품 이미지와 정보를 나눠주는 버튼들 */}
      <div className="main-button">
        <button
          className={`detail ${activeButton === BUTTON_STATES.DETAIL ? 'active' : ''}`}
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
      {activeButton === 'INFO' && <ProductDetailInfo ProductSize={ProductSize} />}
    </div>
  );
};

export default ProductDetailContainer;
