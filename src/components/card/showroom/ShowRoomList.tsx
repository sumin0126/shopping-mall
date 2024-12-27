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
