import { useState } from 'react';

import Image from 'next/image';

interface ICartProduct {
  id: number;
  productId: number;
  name: string;
  color: string;
  price: number;
  imageUrl: string;
  onChange: (id: number, isChecked: boolean) => void;
  count: number;
  updateCount: (productId: number, quantity: number) => void;
  onClickProduct: (productId: number) => void;
  deleteProduct: (productId: number) => void;
}

/**
 * @description 장바구니 아이템 컴포넌트
 *
 * @param id - 장바구니 ID
 * @param productId - 상품 ID
 * @param name - 상품명
 * @param color - 상품색상
 * @param price - 상품가격
 * @param imageUrl - 상품이미지
 * @param onClickProduct - 상품 클릭 이벤트
 */
const CartProduct = ({
  name,
  color,
  price,
  imageUrl,
  id,
  productId,
  onChange,
  count,
  updateCount,
  onClickProduct,
  deleteProduct,
}: ICartProduct) => {
  const [isChecked, setIsChecked] = useState(false);

  // 빼기 버튼 클릭 시, 수량을 1씩 빼주는 함수
  const minusProductCount = () => {
    const newCount = count > 1 ? count - 1 : 1;
    updateCount(productId, newCount);
  };

  // 더하기 버튼 클릭 시, 수량을 1씩 더해주는 함수
  const plusProductCount = () => {
    const newCount = count + 1;
    updateCount(productId, newCount);
  };

  // // remove 버튼 클릭 시, 장바구니에서 상품을 삭제하는 함수
  // const handleClickDeleteProduct = () => {
  //   setWishList(wishList => wishList.filter(product => product.id !== id));
  // };

  // 체크박스 클릭 시, 상태 업데이트
  const handleClickCheckBox = () => {
    setIsChecked(!isChecked);
    onChange(id, !isChecked);
  };

  return (
    <div className="cart-product-container">
      {/* 체크 박스 */}
      <input type="checkbox" className="check-box" onClick={handleClickCheckBox} />

      {/* 상품 이미지 */}
      <Image
        src={imageUrl}
        className="product-img"
        alt="cartImg"
        width={220}
        height={220}
        style={{ objectFit: 'cover' }}
        onClick={() => onClickProduct(productId)}
      />

      {/* 상품 정보 */}
      <div className="product-info">
        <p className="name-color" onClick={() => onClickProduct(productId)}>
          {name} - {color}
        </p>
        <p className="price">
          {price.toLocaleString('ko-KR')}
          <span>원</span>
        </p>
        <button onClick={() => deleteProduct(productId)}>remove</button>
      </div>

      {/* 상품 수량 */}
      <div className="product-quantity">
        <button className="minus-button" onClick={minusProductCount}>
          -
        </button>
        <p>{count}</p>
        <button className="plus-button" onClick={plusProductCount}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
