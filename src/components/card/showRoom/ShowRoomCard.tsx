import { useEffect, useState } from 'react';

import Image from 'next/image';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilValue } from 'recoil';

import { footerShowRoomState } from '@/stores/footer';

interface IShowRoomCardProps {
  title: string;
  firstImg: string;
  miniImg: string;
  secondImg: string;
  storeName: string;
  address: string;
  number: string;
}

/**
 * @description 쇼룸 카드 컴포넌트
 *
 * @param title - 쇼룸 영어 지점명
 * @param firstImg - 쇼룸 첫번째 대문 사진
 * @param miniImg - 쇼룸 작은 사진
 * @param secondImg - 쇼룸 두번째 대문 사진
 * @param storeName - 쇼룸 한글 지점명
 * @param address - 쇼룸 주소
 * @param number - 쇼룸 전화번호
 */
const ShowRoomCard = ({ title, firstImg, miniImg, secondImg, storeName, address, number }: IShowRoomCardProps) => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const showRoom = useRecoilValue(footerShowRoomState);

  // title 클릭 시 카드가 열리고 닫히는 함수
  const handleClickOpenCard = () => {
    setIsOpenCard(!isOpenCard);
  };

  // 푸터에서 클릭한 버튼의 텍스트와 쇼룸의 타이틀이 같다면, 해당 카드를 열어주는 함수
  useEffect(() => {
    if (showRoom === title) {
      setIsOpenCard(true);
    }
  }, []);

  return (
    <div className="show-room-card-container">
      <div className="title-box" onClick={handleClickOpenCard}>
        <p className="title">{title}</p>
        <div className={`arrow-wrapper ${isOpenCard ? 'open' : 'closed'}`}>
          <FontAwesomeIcon icon={faChevronDown} className="arrow" />
        </div>
      </div>

      <div className={`content ${isOpenCard ? 'active' : ''}`}>
        <div className="first-img">
          <Image src={firstImg} alt="showRoomFirstImg" width={646} height={646} style={{ objectFit: 'cover' }} />
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
            <Image src={miniImg} alt="showRoomMiniImg" width={323} height={380} style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="second-img">
          <Image src={secondImg} alt="showRoomSecondImg" width={646} height={646} style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default ShowRoomCard;
