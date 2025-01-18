import Image from 'next/image';

interface IOrderHistoryProductInfo {
  imageUrl: string;
  orderDate: string;
  name: string;
  color: string;
  price: number;
}

/**
 * @description 주문내역 상품정보 컴포넌트
 *
 * @param imageUrl - 주문한 상품 대표이미지 url
 * @param orderDate - 주문 날짜
 * @param name - 상품명
 * @param color - 상품 컬러
 * @param price - 상품 가격
 */
const OrderHistoryProductInfo = ({ imageUrl, orderDate, name, color, price }: IOrderHistoryProductInfo) => {
  return (
    <div className="order-history-product-info-container">
      {/* 주문한 상품 대표이미지 */}
      <div className="image-wrapper">
        <Image src={imageUrl} alt={imageUrl} width={150} height={150} style={{ objectFit: 'cover' }} />
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
