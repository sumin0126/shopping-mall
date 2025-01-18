import OrderHistoryCard from '@/components/card/myPage/orderHistory/OrderHistoryCard';

interface IProps {
  id: number;
  imageUrl: string;
  orderDate: string;
  name: string;
  color: string;
  price: number;
}

interface IOrderHistoryList {
  orderHistoryData: IProps[];
}

/**
 * @description 주문내역 목록 컴포넌트
 *
 * @param orderHistoryData - 주문내역 정보
 */
const OrderHistoryList = ({ orderHistoryData }: IOrderHistoryList) => {
  return (
    <div className="order-history-list-container">
      {orderHistoryData.map(data => (
        <OrderHistoryCard
          key={data.id}
          imageUrl={data.imageUrl}
          orderDate={data.orderDate}
          name={data.name}
          color={data.color}
          price={data.price}
        />
      ))}
    </div>
  );
};

export default OrderHistoryList;
