import OrderHistoryList from '@/components/list/OrderHistoryList';

/**
 * @description 마이페이지 - 주문내역 컨테이너
 */
const OrderHistoryContainer = () => {
  // 임시 데이터
  const orderHistoryData = [
    {
      id: 1,
      imageUrl: '/img/accessory/accessory1.jpg',
      orderDate: '2024.01.19',
      name: 'FUR Large',
      color: 'shakerato (LIMITED)',
      price: 95000,
    },
    {
      id: 2,
      imageUrl: '/img/accessory/accessory3.jpg',
      orderDate: '2024.01.19',
      name: 'FUR Large',
      color: 'shakerato (LIMITED)',
      price: 40000,
    },
  ];

  return (
    <div className="order-history-container">
      <p className="title">주문/배송 내역</p>
      <OrderHistoryList orderHistoryData={orderHistoryData} />
    </div>
  );
};

export default OrderHistoryContainer;
