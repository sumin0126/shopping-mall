import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

interface INewArrivalCardProps {
  img: string;
  itemName: string;
  itemColor: string;
  itemPrice: string;
}

const NewArrivalCard = ({ img, itemName, itemColor, itemPrice }: INewArrivalCardProps) => {
  return (
    <div className="new-arrival-card-container">
      <div className="img-box">
        <FontAwesomeIcon icon={faHeart} className="wish-icon" />
        <Image src={img} alt="itemImg" width={300} height={300} style={{ objectFit: 'cover' }} />
      </div>

      <div className="item-info">
        <div className="name">{itemName}</div>
        <div className="color">{itemColor}</div>
        <div className="price">{itemPrice}</div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
