import { useRecoilValue } from 'recoil';

import CartSummary from '@/components/card/cart/CartSummary';
import CartProductList from '@/components/list/CartProductList';
import { wishProductState } from '@/stores/wishProduct';

/**
 * @description 장바구니 컨테이너
 */
const CartContainer = () => {
  // 장바구니에 담긴 상품 목록들
  const wishList = useRecoilValue(wishProductState);

  return (
    <div className="cart-container">
      {/* 상품목록과 총 금액 */}
      <div className="cart-main">
        <CartProductList wishList={wishList} />
        <CartSummary wishList={wishList} />
      </div>
    </div>
  );
};

export default CartContainer;
