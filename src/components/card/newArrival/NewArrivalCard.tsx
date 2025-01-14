import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilState } from 'recoil';

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
  const router = useRouter();

  // 상품 대표이미지 클릭 시 상품 상세페이지로 이동하는 함수
  const handleClickProduct = () => {
    router.push({
      pathname: PATHNAME.PRODUCT_DETAIL,
      query: { id: itemId },
    });
  };

  // 하트 아이콘 클릭 시, recoil 상태에 클릭한 상품의 데이터가 업데이트되는 함수
  const handleClickLikeProduct = (e: React.MouseEvent) => {
    e.stopPropagation();

    const product = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      imageUrl: img,
      color: itemColor,
      category: category,
      isNew: isNew,
      isBest: isBest,
      description: description,
    };

    // 중복된 상품인지 확인하는 로직
    // 현재 장바구니에 담으려는 상품과 장바구니에 이미 담겨있는 상품이 같은건지 확인
    const isDuplicate = wishList.some(item => item.id === product.id);

    if (!isDuplicate) {
      const updateWishList = [...wishList, product];
      // recoil 상태에 업데이트
      setWishList(updateWishList);
      setIsLikeProduct(true);
    }
  };

  return (
    <div className="new-arrival-card-container" onClick={handleClickProduct}>
      <div className="img-box">
        <FontAwesomeIcon
          icon={isLikeProduct ? faSolidHeart : faRegularHeart}
          className={`wish-icon ${isLikeProduct ? 'active' : ''}`}
          onClick={handleClickLikeProduct}
        />
        <Image src={img} alt="itemImg" width={300} height={300} style={{ objectFit: 'cover' }} />
      </div>

      <div className="item-info">
        <div className="name">{itemName}</div>
        {itemColor && <div className="color">{itemColor}</div>}
        <div className="price">{itemPrice.toLocaleString('ko-KR')}</div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
