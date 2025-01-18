/**
 * @description 주문내역 버튼 컴포넌트
 */
const OrderHistoryAction = () => {
  return (
    <div className="order-history-action-container">
      <button className="exchange-return-btn">교환/반품 신청</button>
      <button className="delivery-check-btn">배송조회</button>
    </div>
  );
};

export default OrderHistoryAction;
