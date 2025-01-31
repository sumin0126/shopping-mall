import { useState } from 'react';

import router from 'next/router';

import CartProduct from '@/components/card/cart/CartProduct';
import AlertModal from '@/components/modal/AlertModal';
import { PATHNAME } from '@/constants/pathname';

interface IProducts {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  color?: string;
}

interface ICartProductList {
  wishList: IProducts[];
  productCounts: { [id: number]: number };
  updateProductCount: (id: number, count: number) => void;
}

/**
 * @description 장바구니 아이템 목록 컴포넌트
 *
 * @param wishList - 장바구니에 담긴 모든 상품의 배열
 */
const CartProductList = ({ wishList, productCounts, updateProductCount }: ICartProductList) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isAlertOpenModal, setIsAlertOpenModal] = useState(false);

  // 체크박스 상태가 변경될때마다 상태를 변경해주는 함수
  const handleChangeCheckBox = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems(prev => [...prev, id]);
    } else {
      setSelectedItems(prev => prev.filter(itemId => itemId !== id));
    }
  };

  // 선택상품주문시 실행되는 함수
  const handleClickSelectItems = () => {
    if (selectedItems.length === 0) {
      setIsAlertOpenModal(true);
    } else {
      const selectedProducts = wishList.filter(product => selectedItems.includes(product.id));
      console.log(selectedProducts);

      router.push(PATHNAME.PAYMENT);
    }
  };

  // 전체상품주문시 실행되는 함수
  const handleClickAllItems = () => {
    console.log(wishList);
    router.push(PATHNAME.PAYMENT);
  };

  return (
    <div className="cart-product-list-container">
      {/* 헤더 */}
      <div className="cart-header">
        <p>CART({wishList.length})</p>
      </div>

      {/* 상품 목록 */}
      {wishList.length > 0 ? (
        wishList.map(product => (
          <CartProduct
            key={product.id}
            id={product.id}
            name={product.name}
            color={product.color || ''}
            price={product.price}
            imageUrl={product.imageUrl}
            onChange={handleChangeCheckBox}
            count={productCounts[product.id] || 1}
            updateCount={updateProductCount}
          />
        ))
      ) : (
        <p className="wish-list-info">장바구니가 비어 있습니다.</p>
      )}

      {/* 버튼 */}
      {wishList.length > 0 && (
        <div className="button-container">
          <button onClick={handleClickSelectItems}>선택상품주문</button>
          <button onClick={handleClickAllItems}>전체상품주문</button>
        </div>
      )}

      {/* 주문 모달 */}
      {isAlertOpenModal && (
        <AlertModal
          modalTitle="선택한 상품이 없습니다 !"
          handleClickConfirm={() => {
            setIsAlertOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default CartProductList;
