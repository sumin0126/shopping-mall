import { useEffect, useState } from 'react';

import { cartApi } from '@/apis/carts';
import CartSummary from '@/components/card/cart/CartSummary';
import CartProductList from '@/components/list/CartProductList';
import AlertModal from '@/components/modal/AlertModal';

import type { ICartResponse } from '@/apis/carts/type';

/**
 * @description 장바구니 컨테이너
 */
const CartContainer = () => {
  const [wishList, setWishList] = useState<ICartResponse[]>([]);
  const [productCounts, setProductCounts] = useState<{ [id: number]: number }>({});
  const [isAlertOpenModal, setIsAlertOpenModal] = useState(false);

  // API 호출은 통한 장바구니 상품 조회
  useEffect(() => {
    cartApi.getCarts().then(res => {
      const products = res.data;
      setWishList(products);

      // 상품별 초기 수량 상태를 구하는 함수
      const initialCounts = products.reduce<{ [id: number]: number }>((sum, product) => {
        sum[product.productId] = product.quantity;
        return sum;
      }, {});
      setProductCounts(initialCounts);
    });
  }, []);

  // API 호출을 통한 장바구니 상품 삭제
  const handleClickDeleteProduct = (productId: number) => {
    cartApi.deleteCart(productId).then(() => {
      setWishList(prev => prev.filter(item => item.productId !== productId));
    });
    setIsAlertOpenModal(true);
  };

  // 상품의 수량을 업데이트해주는 함수
  const updateProductCount = (productId: number, quantity: number) => {
    cartApi.postCarts({ productId, quantity }).then(res => {
      console.log('상품 수량 업데이트', res);
    });

    setProductCounts(prev => ({ ...prev, [productId]: quantity }));
  };

  return (
    <div className="cart-container">
      {/* 상품목록과 총 금액 */}
      <div className="cart-main">
        <CartProductList
          wishList={wishList}
          productCounts={productCounts}
          updateProductCount={updateProductCount}
          handleClickDeleteProduct={handleClickDeleteProduct}
        />
        <CartSummary wishList={wishList} productCounts={productCounts} />
      </div>

      {/* 상품 삭제 안내 모달 */}
      {isAlertOpenModal && (
        <AlertModal modalTitle="상품이 삭제되었습니다 !" handleClickConfirm={() => setIsAlertOpenModal(false)} />
      )}
    </div>
  );
};

export default CartContainer;
