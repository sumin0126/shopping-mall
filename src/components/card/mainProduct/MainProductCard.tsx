import Image from 'next/image';

interface IMainProductCardProps {
  img: string;
  itemName: string;
  itemColor: string;
}

/**
 * @description 메인상품 카드 컴포넌트
 *
 * @param img - 상품 대표이미지
 * @param itemName - 상품 이름
 * @param itemColor - 상품 컬러
 */
const MainProductCard = ({ img, itemName, itemColor }: IMainProductCardProps) => {
  return (
    <div className="product-card-container">
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
