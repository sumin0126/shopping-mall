import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import classNames from 'classnames';

import { productApi } from '@/apis/products';
import ProductDetailHeader from '@/components/card/productDetail/ProductDetailHeader';
import ProductDetailInfo from '@/components/card/productDetail/ProductDetailInfo';
import ProductDetailMain from '@/components/card/productDetail/ProductDetailMain';

import type { IProduct } from '@/apis/products/type';

// 읽기전용으로 TAB을 정의해줌
const TAB = {
  DETAIL: 'DETAIL',
  INFO: 'INFO',
} as const;

// 딱 TAB에있는 DETAIL과 INFO만 사용하기위해
type TTabType = (typeof TAB)[keyof typeof TAB];

/**
 * @description 상품 상세 컨테이너
 */
const ProductDetailContainer = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [currentTab, setCurrentTab] = useState<TTabType | null>(TAB.DETAIL);

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
  const handleClickTab = (tab: TTabType) => {
    setCurrentTab(tab);
  };

  // 상품 메인이미지 목데이터
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
      {/* 상세페이지 헤더 */}
      <ProductDetailHeader product={product} />

      {/* Detail, Info 버튼들 */}
      <div className="main-button">
        <button
          className={classNames('detail', {
            active: currentTab === TAB.DETAIL,
          })}
          onClick={() => handleClickTab(TAB.DETAIL)}
        >
          DETAIL
        </button>
        <button
          className={classNames('info', {
            active: currentTab === TAB.INFO,
          })}
          onClick={() => handleClickTab(TAB.INFO)}
        >
          INFO
        </button>
      </div>

      {/* 상품 메인 이미지들 */}
      {currentTab === TAB.DETAIL && <ProductDetailMain ProductImage={ProductImage} />}
      {/* 상품 상세 정보 */}
      {currentTab === TAB.INFO && <ProductDetailInfo product={product} />}
    </div>
  );
};

export default ProductDetailContainer;
