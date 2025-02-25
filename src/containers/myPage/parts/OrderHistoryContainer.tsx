import { useEffect, useState } from 'react';

import OrderHistoryList from '@/components/list/OrderHistoryList';

export interface IOrder {
  id: number;
  imageUrl: string;
  orderDate: string;
  name: string;
  color: string;
  price: number;
}

/**
 * @description 마이페이지 - 주문내역 컨테이너
 */
const OrderHistoryContainer = () => {
  const [orderHistoryData, setOrderHistoryData] = useState<IOrder[]>([]);

  useEffect(() => {
    const currentOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    setOrderHistoryData(currentOrders);
  }, []);

  return (
    <div className="order-history-container">
      <p className="title">주문/배송 내역</p>
      {orderHistoryData.length > 0 ? (
        <OrderHistoryList orderHistoryData={orderHistoryData} />
      ) : (
        <div className="noti-wrapper">
          <p className="noti-title">주문한 상품이 없습니다</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryContainer;
