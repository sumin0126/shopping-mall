import LookBookCard from '@/components/card/lookbook/LookBookCard';

interface IProps {
  id: number;
  img: string;
}

interface ILookBookListProps {
  LookBookImages: IProps[];
}

/**
 * @description 룩북 리스트 컴포넌트
 *
 * @param id - 상품 아이디
 * @param img - 상품 이미지
 */
const LookBookList = ({ LookBookImages }: ILookBookListProps) => {
  return (
    <div className="look-book-list-container">
      {LookBookImages.map(image => (
        <LookBookCard key={image.id} img={image.img} />
      ))}
    </div>
  );
};

export default LookBookList;
