import OrderHistoryProductInfo from '@/components/card/myPage/orderHistory/OrderHistoryProductInfo';

interface IOrderHistoryCard {
  productId: number;
  imageUrl: string;
  orderDate: string;
  name: string;
  color: string;
  price: number;
}

/**
 * @description 주문내역 카드 컴포넌트
 *
 * @param imageUrl - 주문한 상품 대표이미지 url
 * @param orderDate - 주문 날짜
 * @param name - 상품명
 * @param color - 상품 컬러
 * @param price - 상품 가격
 * @param productId - 상품 아이디
 */
const OrderHistoryCard = ({ productId, imageUrl, orderDate, name, color, price }: IOrderHistoryCard) => {
  return (
    <div className="order-history-card-container">
      {/* 상품 정보 컴포넌트 */}
      <OrderHistoryProductInfo
        productId={productId}
        imageUrl={imageUrl}
        orderDate={orderDate}
        name={name}
        color={color}
        price={price}
      />
    </div>
  );
};

export default OrderHistoryCard;
