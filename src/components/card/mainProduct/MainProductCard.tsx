import Image from 'next/image';
import { useRouter } from 'next/router';

import { PATHNAME } from '@/constants/pathname';

interface IMainProductCardProps {
  img: string;
  productId: number;
  itemName: string;
  itemColor?: string;
}

/**
 * @description 메인상품 카드 컴포넌트
 *
 * @param img - 상품 대표이미지
 * @param productId - 상품 아이디
 * @param itemName - 상품 이름
 * @param itemColor - 상품 컬러
 */
const MainProductCard = ({ img, productId, itemName, itemColor }: IMainProductCardProps) => {
  const router = useRouter();

  // 상품 대표이미지 클릭 시 상품 상세페이지로 이동하는 함수
  const handleClickProduct = () => {
    router.push({
      pathname: PATHNAME.PRODUCT_DETAIL,
      query: { id: productId },
    });
  };

  return (
    <div className="product-card-container" onClick={handleClickProduct}>
      <div className="img-box">
        <Image src={img} alt="itemImg" width={300} height={300} style={{ objectFit: 'cover' }} />
      </div>

      <div className="product-info">
        <p className="product-name">{itemName}</p>
        <p className="product-color">{itemColor}</p>
      </div>
    </div>
  );
};

export default MainProductCard;
