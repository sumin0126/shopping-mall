import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';

import AlertModal from '@/components/modal/AlertModal';
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [wishList, setWishList] = useRecoilState(wishProductState);

  const router = useRouter();

  // 로컬스토리지에서 isLogin 상태 가져오기
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    setIsLogin(loginStatus === 'true');
  }, []);

  // cart 버튼 클릭 시, 로그인 유무 확인 후 장바구니에 상품 담아주는 함수
  const handleClickLikeProduct = () => {
    // 로그인 상태 확인
    if (!isLogin) {
      setIsOpenModal(true);
      return;
    }

    // 장바구니에 담으려는 상품이 중복됐는지 확인하는 함수
    const isDuplicate = wishList.some(item => item.id === product.id);

    // 중복된 상품이 아니라면 장바구니에 해당 상품의 데이터를 업데이트
    if (!isDuplicate) {
      setWishList([...wishList, product]);
    }
  };

  // buy 버튼 클릭 시, 결제 페이지로 이동하는 함수
  const handleClickPayment = () => {
    // 로그인 상태 확인
    if (!isLogin) {
      setIsOpenModal(true);
      return;
    }

    router.push(PATHNAME.PAYMENT);
  };

  return (
    <div className="product-action-container">
      <button className="buy" onClick={handleClickPayment}>
        BUY NOW
      </button>
      <button className="cart" onClick={handleClickLikeProduct}>
        CART
      </button>

      {/* 모달 */}
      {isOpenModal && (
        <AlertModal
          modalTitle="로그인 후 이용해주세요 !"
          handleClickConfirm={() => {
            setIsOpenModal(false);
            router.push(PATHNAME.LOGIN);
          }}
        />
      )}
    </div>
  );
};

export default ProductAction;
