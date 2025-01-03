import Image from 'next/image';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface INewArrivalCardProps {
  img: string;
  itemName: string;
  itemColor?: string;
  itemPrice: number;
}

/**
 * @description 신상품 카드 컴포넌트
 *
 * @param img - 상품 대표이미지
 * @param itemName - 상품 이름
 * @param itemColor - 상품 컬러
 * @param itemPrice - 상품 가격
 */
const NewArrivalCard = ({ img, itemName, itemColor, itemPrice }: INewArrivalCardProps) => {
  return (
    <div className="new-arrival-card-container">
      <div className="img-box">
        <FontAwesomeIcon icon={faHeart} className="wish-icon" />
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
