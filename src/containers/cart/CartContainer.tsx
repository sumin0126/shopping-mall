import { useState } from 'react';

import CartSummary from '@/components/card/cart/CartSummary';
import CartProductList from '@/components/list/CartProductList';

/**
 * @description 장바구니 컨테이너
 */
const CartContainer = () => {
  const [productCounts, setProductCounts] = useState<{ [id: number]: number }>({
    1: 1,
    2: 1,
  });

  // 장바구니 임시 데이터
  const wishList = [
    {
      id: 1,
      name: 'clo soft',
      color: 'leopard',
      price: 190000,
      imageUrl: '/img/clo/clo6.jpg',
    },
    {
      id: 2,
      name: 'strap flip flop',
      color: 'suede black',
      price: 230000,
      imageUrl: '/img/allitems/allitems11.jpg',
    },
  ];

  // 상품의 수량을 업데이트해주는 함수
  const updateProductCount = (id: number, count: number) => {
    setProductCounts(prev => ({ ...prev, [id]: count }));
  };

  return (
    <div className="cart-container">
      {/* 상품목록과 총 금액 */}
      <div className="cart-main">
        <CartProductList wishList={wishList} productCounts={productCounts} updateProductCount={updateProductCount} />
        <CartSummary wishList={wishList} productCounts={productCounts} />
      </div>
    </div>
  );
};

export default CartContainer;
