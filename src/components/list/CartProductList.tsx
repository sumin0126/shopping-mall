import { useState } from 'react';

import router from 'next/router';

import CartOrderButton from '@/components/button/CartOrderButton';
import CartProduct from '@/components/card/cart/CartProduct';
import AlertModal from '@/components/modal/AlertModal';
import { PATHNAME } from '@/constants/pathname';

import type { ICartResponse } from '@/apis/carts/type';

interface ICartProductList {
  wishList: ICartResponse[];
  productCounts: { [id: number]: number };
  updateProductCount: (productId: number, quantity: number) => void;
  handleClickDeleteProduct: (productId: number) => void;
}

/**
 * @description 장바구니 아이템 목록 컴포넌트
 *
 * @param wishList - 장바구니에 담긴 모든 상품의 배열
 */
const CartProductList = ({
  wishList,
  productCounts,
  updateProductCount,
  handleClickDeleteProduct,
}: ICartProductList) => {
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
      return;
    }

    // 선택된 상품의 id만 추출
    const selectedProductId = wishList
      .filter(product => selectedItems.includes(product.productId))
      .map(product => product.productId);

    if (selectedProductId.length > 0) {
      router.push({
        pathname: PATHNAME.PAYMENT,
        query: { productId: selectedProductId.join(',') },
      });
    }
  };

  // 전체상품주문시 실행되는 함수
  const handleClickAllItems = () => {
    const allProductId = wishList.map(product => product.productId);

    if (allProductId.length > 0) {
      router.push({
        pathname: PATHNAME.PAYMENT,
        query: { productId: allProductId.join(',') },
      });
    }
  };

  // 상품명, 썸네일 클릭 시
  const handleClickProduct = (productId: number) => {
    router.push({
      pathname: PATHNAME.PRODUCT_DETAIL,
      query: { id: productId },
    });
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
            key={product.productId}
            id={product.productId}
            productId={product.productId}
            name={product.productName}
            color={product.productColor || ''}
            price={product.productPrice}
            imageUrl={product.productImageUrl}
            onChange={handleChangeCheckBox}
            count={productCounts[product.productId] || 1}
            updateCount={updateProductCount}
            onClickProduct={handleClickProduct}
            deleteProduct={handleClickDeleteProduct}
          />
        ))
      ) : (
        <p className="wish-list-info">장바구니가 비어 있습니다.</p>
      )}

      {/* 버튼 */}
      {wishList.length > 0 &&
        // <div className="button-container">
        //   <button onClick={handleClickSelectItems}>선택상품주문</button>
        //   <button onClick={handleClickAllItems}>전체상품주문</button>
        // </div>
        CartOrderButton({ handleClickSelectItems, handleClickAllItems })}

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
