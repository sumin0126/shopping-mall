import LookBookCard from '@/components/card/lookbook/LookBookCard';
import React from 'react';

interface IProps {
  id: number;
  img: string;
}

interface ILookBookListProps {
  LookBookImages: IProps[];
}

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
