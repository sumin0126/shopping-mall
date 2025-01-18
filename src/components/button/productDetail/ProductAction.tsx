import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';

import { PATHNAME } from '@/constants/pathname';
import { wishProductState } from '@/stores/wishProduct';

import type { IProduct } from '@/apis/products/type';

interface IProductAction {
  product: IProduct;
}

/**
 * @description 상품 상세페이지 버튼 컴포넌트
 */
const ProductAction = ({ product }: IProductAction) => {
  const [isLogin, setIsLogin] = useState(false);
  const [wishList, setWishList] = useRecoilState(wishProductState);

  const router = useRouter();

  // 로컬스토리지에서 isLogin 상태 가져오기
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    setIsLogin(loginStatus === 'true');
  }, []);

  // cart 버튼 클릭 시, 로그인 유무 확인 후 장바구니에 상품 담아주는 함수
  const handleClickLikeProduct = () => {
    // 로그인 유/무 확인
    if (!isLogin) {
      alert('로그인 후 이용해주세요!');
      router.push(PATHNAME.LOGIN);
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      color: product.color,
      category: product.category,
      isNew: product.isNew,
      isBest: product.isBest,
      description: product.description,
    };

    // 장바구니에 담으려는 상품이 중복됐는지 확인하는 함수
    const isDuplicate = wishList.some(product => product.id === item.id);

    // 중복된 상품이 아니라면 장바구니에 해당 상품의 데이터를 업데이트
    if (!isDuplicate) {
      setWishList([...wishList, item]);
    }
  };

  return (
    <div className="product-action-container">
      <button className="buy">BUY NOW</button>
      <button className="cart" onClick={handleClickLikeProduct}>
        CART
      </button>
    </div>
  );
};

export default ProductAction;
