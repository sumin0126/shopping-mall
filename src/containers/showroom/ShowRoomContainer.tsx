import ShowRoomList from '@/components/card/showroom/ShowRoomList';

/**
 * @description 쇼룸 컨테이너
 */
const ShowRoomContainer = () => {
  // 임시 데이터
  const ShowRoomInfos = [
    {
      id: 1,
      title: 'HANNAM FLAGSHIP STORE',
      firstImg: '/img/showroom1-1.png',
      miniImg: '/img/showroom1-2.png',
      secondImg: '/img/showroom1-3.png',
      storeName: '미닛뮤트 한남 플래그쉽 스토어',
      address: '용산구 이태원로 230-2',
      number: '070-4640-2804',
    },
    {
      id: 2,
      title: 'SEONGSU STORE',
      firstImg: '/img/showroom2-1.png',
      miniImg: '/img/showroom2-2.png',
      secondImg: '/img/showroom2-3.png',
      storeName: '미닛뮤트 성수 쇼룸',
      address: '성동구 연무장길 57',
      number: '070-4640-2803',
    },
    {
      id: 3,
      title: 'SHINSEGAE CENTUM',
      firstImg: '/img/showroom3-1.png',
      miniImg: '/img/showroom3-2.png',
      secondImg: '/img/showroom3-3.png',
      storeName: '미닛뮤트 신세계 센텀',
      address: '해운대구 센텀남대로 35 4층',
      number: '051-745-1623',
    },
    {
      id: 4,
      title: 'TOKYO STORE',
      firstImg: '/img/showroom4-1.png',
      miniImg: '/img/showroom4-2.png',
      secondImg: '/img/showroom4-3.png',
      storeName: '미닛뮤트 도쿄 쇼룸',
      address: '〒150-0001 Tokyo, Shibuya City, Jingumae,',
      number: '070-6513-9657',
    },
  ];

  return (
    <div className="show-room-container">
      <p className="show-room">SHOWROOM</p>
      <ShowRoomList ShowRoomInfos={ShowRoomInfos} />
    </div>
  );
};

export default ShowRoomContainer;
