import { useState, useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { cartApi } from '@/apis/carts';
import AlertModal from '@/components/modal/AlertModal';
import ConfirmModal from '@/components/modal/ConfirmModal';
import { PATHNAME } from '@/constants/pathname';

import type { IProduct } from '@/apis/products/type';

interface IProductDetailHeaderProps {
  product: IProduct;
}

/**
 * @description 상품 상세 헤더 컴포넌트
 *
 * @param product - 상품 정보
 */
const ProductDetailHeader = ({ product }: IProductDetailHeaderProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAlertOpenModal, setIsAlertOpenModal] = useState(false);
  const [isConfirmOpenModal, setIsConfirmOpenModal] = useState(false);
  const [isDuplicateModal, setIsDuplicateModal] = useState(false);

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
      setIsAlertOpenModal(true);
      return;
    }

    // 장바구니 API 요청 파라미터
    const productId = product.id;
    const quantity = 1;

    // API 요청을 통해 장바구니에 상품 추가
    cartApi.postCarts({ productId, quantity }).then(res => {
      console.log('장바구니 추가 응답', res);
      setIsConfirmOpenModal(true);
    });
  };

  // buy 버튼 클릭 시, 결제 페이지로 이동하는 함수
  const handleClickPayment = () => {
    // 로그인 상태 확인
    if (!isLogin) {
      setIsAlertOpenModal(true);
      return;
    }

    router.push(PATHNAME.PAYMENT);
  };
  return (
    <div className="product-detail-header">
      <div className="product-thumbnail">
        <Image src={product.imageUrl} alt={product.imageUrl} width={480} height={480} style={{ objectFit: 'cover' }} />
      </div>

      <div className="info-action-wrapper">
        {/* 상품 정보들 */}
        <div className="product-info-container">
          <div className="name">{product.name}</div>
          <div className="color">{product.color}</div>
          {/* <div className="texture">{product.texture}</div> */}
          <div className="price">{product.price.toLocaleString('ko-KR')}</div>
          <div className="description">{product.description}</div>
        </div>

        {/* 구매하기, 찜하기 버튼들 */}
        <div className="product-action-container">
          <button className="buy" onClick={handleClickPayment}>
            BUY NOW
          </button>
          <button className="cart" onClick={handleClickLikeProduct}>
            CART
          </button>

          {/* 로그인 모달 */}
          {isAlertOpenModal && (
            <AlertModal
              modalTitle="로그인 후 이용해주세요 !"
              handleClickConfirm={() => {
                setIsAlertOpenModal(false);
                router.push(PATHNAME.LOGIN);
              }}
            />
          )}

          {/* 장바구니 이동 모달 */}
          {isConfirmOpenModal && (
            <ConfirmModal
              modalTitle="장바구니로 이동하시겠습니까?"
              handleClickConfirm={() => {
                setIsConfirmOpenModal(false);
                router.push(PATHNAME.CART);
              }}
              handleClickCancel={() => {
                setIsConfirmOpenModal(false);
              }}
            />
          )}

          {/* 장바구니 중복 상품 모달 */}
          {isDuplicateModal && (
            <AlertModal
              modalTitle="이미 장바구니에 담긴 상품입니다 !"
              handleClickConfirm={() => {
                setIsDuplicateModal(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
