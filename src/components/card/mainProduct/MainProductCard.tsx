import Image from 'next/image';

interface IMainProductCardProps {
  img: string;
  itemName: string;
  itemColor: string;
}

const MainProductCard = ({ img, itemName, itemColor }: IMainProductCardProps) => {
  return (
    <div className='product-card-container'>
      <div className='img-box'>
        <Image src={img} alt='itemImg' width={300} height={300} style={{ objectFit: 'cover' }} />
      </div>

      <div className='product-info'>
        <p className='product-name'>{itemName}</p>
        <p className='product-color'>{itemColor}</p>
      </div>
    </div>
  );
};

export default MainProductCard;
