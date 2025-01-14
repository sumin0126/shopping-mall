import { useState } from 'react';

import Image from 'next/image';

import { useSetRecoilState } from 'recoil';

import { wishProductState } from '@/stores/wishProduct';

interface ICartProduct {
  name: string;
  color: string;
  price: number;
  imageUrl: string;
  id: number;
}

/**
 * @description 장바구니 아이템 컴포넌트
 *
 * @param id - 상품아이디
 * @param name - 상품명
 * @param color - 상품색상
 * @param price - 상품가격
 * @param imageUrl - 상품이미지
 */
const CartProduct = ({ name, color, price, imageUrl, id }: ICartProduct) => {
  const [productCount, setProductCount] = useState(1);
  const setWishList = useSetRecoilState(wishProductState);

  // 빼기 버튼 클릭 시, 수량을 1씩 빼주는 함수
  const minusProductCount = () => {
    productCount > 1 ? setProductCount(productCount - 1) : setProductCount(1);
  };

  // 더하기 버튼 클릭 시, 수량을 1씩 더해주는 함수
  const plusProductCount = () => {
    setProductCount(productCount + 1);
  };

  // remove 버튼 클릭 시, 장바구니에서 상품을 삭제하는 함수
  const handleClickDeleteProduct = () => {
    setWishList(wishList => wishList.filter(product => product.id !== id));
  };

  return (
    <div className="cart-product-container">
      {/* 체크 박스 */}
      <input type="checkbox" className="check-box" />

      {/* 상품 이미지 */}
      <Image src={imageUrl} alt="cartImg" width={220} height={220} style={{ objectFit: 'cover' }} />

      {/* 상품 정보 */}
      <div className="product-info">
        <p className="name-color">
          {name} - {color}
        </p>
        <p className="price">
          {price.toLocaleString('ko-KR')}
          <span>원</span>
        </p>
        <button onClick={handleClickDeleteProduct}>remove</button>
      </div>

      {/* 상품 수량 */}
      <div className="product-quantity">
        <button className="minus-button" onClick={minusProductCount}>
          -
        </button>
        <p>{productCount}</p>
        <button className="plus-button" onClick={plusProductCount}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
