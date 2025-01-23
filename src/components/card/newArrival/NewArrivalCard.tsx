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

import type { IProduct } from '@/apis/products/type';

interface INewArrivalCardProps extends IProduct {}

/**
 * @description 신상품 카드 컴포넌트
 *
 * @param imageUrl - 상품 대표이미지
 * @param name - 상품 이름
 * @param color - 상품 컬러
 * @param price - 상품 가격
 */
const NewArrivalCard = ({
  id,
  imageUrl,
  name,
  color,
  price,
  category,
  isNew,
  isBest,
  description,
  width,
  height,
  strapSize,
  weight,
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
      id: id,
      imageUrl: imageUrl,
      name: name,
      color: color,
      price: price,
      category: category,
      isNew: isNew,
      isBest: isBest,
      description: description,
      width,
      height,
      strapSize,
      weight,
    };

    // 중복된 상품인지 확인하는 로직
    // 현재 장바구니에 담으려는 상품과 장바구니에 이미 담겨있는 상품이 같은건지 확인
    const isDuplicate = wishList.some(product => product.id === id);

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
      query: { id: id },
    });
  };

  return (
    <div className="new-arrival-card-container">
      <div className="imageUrl-box">
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
          src={imageUrl}
          alt={imageUrl}
          width={300}
          height={300}
          style={{ objectFit: 'cover' }}
          onClick={handleClickProduct}
        />
      </div>

      {/* 상품 정보 */}
      <div className="item-info" onClick={handleClickProduct}>
        <div className="name">{name}</div>
        {color && <div className="color">{color}</div>}
        <div className="price">{price.toLocaleString('ko-KR')}</div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
