import OrderHistoryProductInfo from '@/components/card/myPage/orderHistory/OrderHistoryProductInfo';

interface IOrderHistoryCard {
  imageUrl: string;
  orderDate: string;
  name: string;
  color: string;
  price: number;
}

/**
 * @description 주문내역 카드 컴포넌트
 */
const OrderHistoryCard = ({ imageUrl, orderDate, name, color, price }: IOrderHistoryCard) => {
  return (
    <div className="order-history-card-container">
      {/* 상품 정보 컴포넌트 */}
      <OrderHistoryProductInfo imageUrl={imageUrl} orderDate={orderDate} name={name} color={color} price={price} />
      {/* 버튼 컴포넌트 */}
      {/* <OrderHistoryAction /> */}
    </div>
  );
};

export default OrderHistoryCard;
