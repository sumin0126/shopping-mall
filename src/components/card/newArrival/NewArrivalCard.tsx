import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilState } from 'recoil';

import AlertModal from '@/components/modal/AlertModal';
import ConfirmModal from '@/components/modal/ConfirmModal';
import { PATHNAME } from '@/constants/pathname';
import { wishProductState } from '@/stores/wishProduct';

import type { TProductCategory } from '@/apis/products/type';

interface INewArrivalCardProps {
  itemId: number;
  img: string;
  itemName: string;
  itemColor?: string;
  itemPrice: number;
  category: TProductCategory;
  isNew: boolean;
  isBest: boolean;
  description?: string;
}

/**
 * @description 신상품 카드 컴포넌트
 *
 * @param img - 상품 대표이미지
 * @param itemName - 상품 이름
 * @param itemColor - 상품 컬러
 * @param itemPrice - 상품 가격
 */
const NewArrivalCard = ({
  itemId,
  img,
  itemName,
  itemColor,
  itemPrice,
  category,
  isNew,
  isBest,
  description,
}: INewArrivalCardProps) => {
  const [wishList, setWishList] = useRecoilState(wishProductState);
  const [isLikeProduct, setIsLikeProduct] = useState(false);
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

  // 하트 아이콘 클릭 시, 클릭한 상품의 데이터가 recoil 상태에 업데이트되는 함수
  const handleClickLikeProduct = () => {
    // 로그인 상태 확인
    if (!isLogin) {
      setIsAlertOpenModal(true);
      return;
    }

    const newProduct = {
      id: itemId,
      imageUrl: img,
      name: itemName,
      color: itemColor,
      price: itemPrice,
      category: category,
      isNew: isNew,
      isBest: isBest,
      description: description,
    };

    // 중복된 상품인지 확인하는 로직
    // 현재 장바구니에 담으려는 상품과 장바구니에 이미 담겨있는 상품이 같은건지 확인
    const isDuplicate = wishList.some(product => product.id === itemId);

    // 중복된 상품이 아니라면, 장바구니에 새상품 업데이트
    if (!isDuplicate) {
      setWishList([...wishList, newProduct]);
      setIsLikeProduct(true);
      setIsConfirmOpenModal(true);
    } else {
      setIsDuplicateModal(false);
    }
  };

  // 상품 대표이미지 클릭 시 상품 상세페이지로 이동하는 함수
  const handleClickProduct = () => {
    router.push({
      pathname: PATHNAME.PRODUCT_DETAIL,
      query: { id: itemId },
    });
  };

  return (
    <div className="new-arrival-card-container">
      <div className="img-box">
        {/* 하트 아이콘 */}
        <FontAwesomeIcon
          icon={isLikeProduct ? faSolidHeart : faRegularHeart}
          className={`wish-icon ${isLikeProduct ? 'active' : ''}`}
          onClick={handleClickLikeProduct}
        />

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

        {/* 대표이미지 */}
        <Image
          src={img}
          alt={img}
          width={300}
          height={300}
          style={{ objectFit: 'cover' }}
          onClick={handleClickProduct}
        />
      </div>

      {/* 상품 정보 */}
      <div className="item-info" onClick={handleClickProduct}>
        <div className="name">{itemName}</div>
        {itemColor && <div className="color">{itemColor}</div>}
        <div className="price">{itemPrice.toLocaleString('ko-KR')}</div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
