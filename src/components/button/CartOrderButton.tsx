interface ICartOrderButtonProps {
  handleClickSelectItems: () => void;
  handleClickAllItems: () => void;
}

/**
 * @description 장바구니 컨테이너에서 사용하는 버튼 컴포넌트
 *
 * @param handleClickSelectItems - 선택 상품 주문 함수
 * @param handleClickAllItems - 전체 상품 주문 함수
 */
const CartOrderButton = ({ handleClickSelectItems, handleClickAllItems }: ICartOrderButtonProps) => {
  return (
    <div className="button-container">
      <button onClick={handleClickSelectItems}>선택상품주문</button>
      <button onClick={handleClickAllItems}>전체상품주문</button>
    </div>
  );
};

export default CartOrderButton;
