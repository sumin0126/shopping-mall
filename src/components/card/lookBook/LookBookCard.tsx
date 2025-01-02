import Image from 'next/image';

interface ILookBookImagesProps {
  img: string;
}

/**
 * @description 룩북 카드 컴포넌트
 *
 * @param img - 상품 이미지
 */
const LookBookCard = ({ img }: ILookBookImagesProps) => {
  return (
    <div className="look-book-card-container">
      <Image src={img} alt="lookBookImg" width={700} height={900} style={{ objectFit: 'cover' }} />
    </div>
  );
};

export default LookBookCard;
