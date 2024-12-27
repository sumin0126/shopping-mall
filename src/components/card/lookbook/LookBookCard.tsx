import React from 'react';

import Image from 'next/image';

interface ILookBookImagesProps {
  img: string;
}

const LookBookCard = ({ img }: ILookBookImagesProps) => {
  return (
    <div className='look-book-card-container'>
      <Image src={img} alt='lookBookImg' width={700} height={900} style={{ objectFit: 'cover' }} />
    </div>
  );
};

export default LookBookCard;
