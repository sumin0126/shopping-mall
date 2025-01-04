import { useState } from 'react';

import ProductDetailHeader from '@/components/card/productDetail/ProductDetailHeader';

/**
 * @description 상품 상세 컨테이너
 */
const ProductDetailContainer = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  // 버튼 클릭 시 버튼의 상태를 업데이트 해주는 함수
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveButton(e.currentTarget.textContent);
  };

  // 임시 데이터
  const products = [
    {
      image_url: ['/img/productdetail/productdetail1.jpg', '/img/productdetail/productdetail1-2.jpg'],
      name: 'FUR LARGE',
      color: 'SHAKERATO (LIMITED)',
      price: 95000,
      texture: 'ECO FUR',
      description:
        '미닛뮤트 퍼 라지 샤케라또 컬러입니다. 고중량 프리미엄 에코 퍼로 풍성함과 자연스러운 투톤이 매력적인 원단입니다. 타 원단에 비해 털빠짐이 적어 의류 소재에 구애받지 않고 편하게 사용 가능합니다. 군더더기 없이 미니멀한 디자인으로 노트북 포함 많은 짐이 들어가며, 추운 겨울 포근함을 극대화 시켜줍니다.',
    },
  ];

  return (
    <div className="product-detail-container">
      <ProductDetailHeader products={products} />

      <div className="main-button">
        <button className={`detail ${activeButton === 'DETAIL' ? 'active' : ''}`} onClick={handleClickButton}>
          DETAIL
        </button>
        <button className={`info ${activeButton === 'INFO' ? 'active' : ''}`} onClick={handleClickButton}>
          INFO
        </button>
      </div>
    </div>
  );
};

export default ProductDetailContainer;