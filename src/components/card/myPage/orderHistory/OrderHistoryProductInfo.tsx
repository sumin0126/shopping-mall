import router from 'next/router';

import { PATHNAME } from '@/constants/pathname';

interface IOrderHistoryProductInfo {
  imageUrl: string;
  orderDate: string;
  name: string;
  color: string;
  price: number;
  productId: number;
}

/**
 * @description 주문내역 상품정보 컴포넌트
 *
 * @param imageUrl - 주문한 상품 대표이미지 url
 * @param orderDate - 주문 날짜
 * @param name - 상품명
 * @param color - 상품 컬러
 * @param price - 상품 가격
 * @param productId - 상품 아이디
 */
const OrderHistoryProductInfo = ({ imageUrl, orderDate, name, color, price, productId }: IOrderHistoryProductInfo) => {
  // 썸네일 클릭 시, 상품 상세페이지로 이동하는 함수
  const handleClickProductDetail = (productId: number) => {
    router.push({
      pathname: PATHNAME.PRODUCT_DETAIL,
      query: { id: productId },
    });
  };

  return (
    <div className="order-history-product-info-container">
      {/* 주문한 상품 대표이미지 */}
      <div className="image-wrapper">
        <img src={imageUrl} alt={imageUrl} onClick={() => handleClickProductDetail(productId)} />
      </div>

      {/* 주문한 상품 정보 */}
      <div className="product-info-wrapper">
        <p className="order-date">{orderDate}</p>
        <p className="product-name-color">
          {name} {color}
        </p>
        <p className="product-price">{price.toLocaleString('ko-KR')}원</p>
      </div>
    </div>
  );
};

export default OrderHistoryProductInfo;
