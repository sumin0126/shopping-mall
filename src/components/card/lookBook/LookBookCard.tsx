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
      <img src={img} alt="lookBookImg" />
    </div>
  );
};

export default LookBookCard;
