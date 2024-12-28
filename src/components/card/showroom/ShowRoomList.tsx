import ShowRoomCard from '@/components/card/showroom/ShowRoomCard';

interface IProps {
  id: number;
  title: string;
  firstImg: string;
  miniImg: string;
  secondImg: string;
  storeName: string;
  address: string;
  number: string;
}

interface IShowRoomListProps {
  ShowRoomInfos: IProps[];
}

/**
 * @description 쇼룸 리스트 컴포넌트
 *
 * @param id - 쇼룸 아이디
 * @param title - 쇼룸 영어 지점명
 * @param firstImg - 쇼룸 첫번째 대문 사진
 * @param miniImg - 쇼룸 작은 사진
 * @param secondImg - 쇼룸 두번째 대문 사진
 * @param storeName - 쇼룸 한글 지점명
 * @param address - 쇼룸 주소
 * @param number - 쇼룸 전화번호
 */
const ShowRoomList = ({ ShowRoomInfos }: IShowRoomListProps) => {
  return (
    <div>
      {ShowRoomInfos.map(info => (
        <ShowRoomCard
          key={info.id}
          title={info.title}
          firstImg={info.firstImg}
          miniImg={info.miniImg}
          secondImg={info.secondImg}
          storeName={info.storeName}
          address={info.address}
          number={info.number}
        />
      ))}
    </div>
  );
};

export default ShowRoomList;
