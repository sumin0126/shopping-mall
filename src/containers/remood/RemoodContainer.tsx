import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description remood bag 컨테이너
 */
const RemoodContainer = () => {
  // 임시 데이터
  const ItemData = [
    { id: 1, img: '/img/remood/remood1.jpg', itemName: 'remood L', itemColor: 'low gray', itemPrice: '460,000' },
    { id: 2, img: '/img/remood/remood2.jpg', itemName: 'remood L', itemColor: 'black', itemPrice: '460,000' },
    { id: 3, img: '/img/remood/remood3.jpg', itemName: 'remood L', itemColor: 'deep pink', itemPrice: '460,000' },
    { id: 4, img: '/img/remood/remood4.jpg', itemName: 'remood L', itemColor: 'beige', itemPrice: '460,000' },
    { id: 5, img: '/img/remood/remood5.jpg', itemName: 'remood L', itemColor: 'brown', itemPrice: '460,000' },
    { id: 6, img: '/img/remood/remood6.jpg', itemName: 'remood L', itemColor: 'silver', itemPrice: '460,000' },
    {
      id: 7,
      img: '/img/remood/remood7.jpg',
      itemName: 'remood mini',
      itemColor: 'champagne gold',
      itemPrice: '290,000',
    },
    { id: 8, img: '/img/remood/remood8.jpg', itemName: 'remood mini', itemColor: 'black', itemPrice: '260,000' },
    { id: 9, img: '/img/remood/remood9.jpg', itemName: 'remood mini', itemColor: 'deep pink', itemPrice: '260,000' },
    {
      id: 10,
      img: '/img/remood/remood10.jpg',
      itemName: 'remood mini',
      itemColor: 'silver',
      itemPrice: '260,000',
    },
    {
      id: 11,
      img: '/img/remood/remood11.jpg',
      itemName: '3 way remood M',
      itemColor: 'deep pink',
      itemPrice: '340,000',
    },
    { id: 12, img: '/img/remood/remood12.jpg', itemName: '3 way remood M', itemColor: 'brown', itemPrice: '340,000' },
    { id: 13, img: '/img/remood/remood13.jpg', itemName: '3 way remood M', itemColor: 'beige', itemPrice: '340,000' },
    { id: 14, img: '/img/remood/remood14.jpg', itemName: '3 way remood M', itemColor: 'white', itemPrice: '340,000' },
    { id: 15, img: '/img/remood/remood15.jpg', itemName: 'remood mini', itemColor: 'brown', itemPrice: '260,000' },
    { id: 16, img: '/img/remood/remood16.jpg', itemName: '3 way remood M', itemColor: 'black', itemPrice: '340,000' },
  ];

  return (
    <div>
      <NewArrivalList ItemData={ItemData} />
    </div>
  );
};

export default RemoodContainer;
