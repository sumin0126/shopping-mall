import { useRecoilValue } from 'recoil';

import { wishProductCountState } from '@/stores/wishProductCount';

interface IProducts {
  id: number;
  price: number;
}

interface ICartSummary {
  wishList: IProducts[];
}

/**
 * @description 장바구니 합계금액 컴포넌트
 *
 * @param wishList - 장바구니에 담긴 모든 상품의 배열
 */
const CartSummary = ({ wishList }: ICartSummary) => {
  // 모든 상품의 수량이 담겨있는 객체
  const productCounts = useRecoilValue(wishProductCountState);

  // 장바구니에 담겨있는 총 상품금액
  const productPrice = wishList.reduce((sum, product) => {
    const count = productCounts[product.id] || 1;
    return sum + product.price * count;
  }, 0);

  // 상품금액에 따른 배송비 (5만원 이상 무료배송)
  const shippingPrice = wishList.length > 0 ? (productPrice >= 50000 ? 0 : 3000) : 0;

  // 총 합계금액
  const totalProductPrice = shippingPrice + productPrice;

  return (
    <div className="cart-summary-container">
      {/* 배송비 */}
      <div className="shipping-price">
        <p>배송비</p>
        <p className="price">
          {shippingPrice.toLocaleString('ko-KR')}
          <span>원</span>
        </p>
      </div>

      {/* 총 상품금액 */}
      <div className="product-price">
        <p>총 상품금액</p>
        <p className="price">
          {productPrice.toLocaleString('ko-KR')}
          <span>원</span>
        </p>
      </div>

      {/* 총 합계금액 */}
      <div className="total-price">
        <p>총 합계금액</p>
        <p className="price">
          {totalProductPrice.toLocaleString('ko-KR')}
          <span>원</span>
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
