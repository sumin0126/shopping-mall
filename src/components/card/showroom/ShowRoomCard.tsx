import Image from 'next/image';
import { useState } from 'react';

interface IShowRoomCardProps {
  title: string;
  firstImg: string;
  miniImg: string;
  secondImg: string;
  storeName: string;
  address: string;
  number: string;
}

const ShowRoomCard = ({ title, firstImg, miniImg, secondImg, storeName, address, number }: IShowRoomCardProps) => {
  const [isOpenCard, setIsOpenCard] = useState(false);

  // title 클릭 시 카드가 열리고 닫히는 함수
  const handleClickCard = () => {
    setIsOpenCard(!isOpenCard);
  };

  return (
    <div className="show-room-card-container">
      <p className="title" onClick={handleClickCard}>
        {title}
      </p>

      {isOpenCard && (
        <>
          <div className="first-img">
            <Image src={firstImg} alt="showRoomImg" width={646} height={646} style={{ objectFit: 'cover' }} />
          </div>

          <div className="text-img-wrapper">
            <div className="text">
              <div className="name">
                <p className="store-name">{storeName}</p>
                <p>{address}</p>
              </div>

              <div className="hour">
                <p className="store-hour">영업시간</p>
                <p>화요일 - 토요일 13:00 - 20:00</p>
                <p>일요일, 월요일 휴무</p>
              </div>

              <div className="store-number">
                <p>전화번호</p>
                <p>{number}</p>
              </div>
            </div>
            <div className="img">
              <Image src={miniImg} alt="showRoomImg" width={323} height={380} style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className="second-img">
            <Image src={secondImg} alt="showRoomImg" width={646} height={646} style={{ objectFit: 'cover' }} />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowRoomCard;
