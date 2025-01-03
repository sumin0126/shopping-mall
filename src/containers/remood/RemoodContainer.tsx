import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description remood bag 컨테이너
 */
const RemoodContainer = () => {
  // 임시 데이터
  const products = [
    { id: 1, image_url: '/img/remood/remood1.jpg', name: 'remood L', color: 'low gray', price: 460000 },
    { id: 2, image_url: '/img/remood/remood2.jpg', name: 'remood L', color: 'black', price: 460000 },
    { id: 3, image_url: '/img/remood/remood3.jpg', name: 'remood L', color: 'deep pink', price: 460000 },
    { id: 4, image_url: '/img/remood/remood4.jpg', name: 'remood L', color: 'beige', price: 460000 },
    { id: 5, image_url: '/img/remood/remood5.jpg', name: 'remood L', color: 'brown', price: 460000 },
    { id: 6, image_url: '/img/remood/remood6.jpg', name: 'remood L', color: 'silver', price: 460000 },
    {
      id: 7,
      image_url: '/img/remood/remood7.jpg',
      name: 'remood mini',
      color: 'champagne gold',
      price: 290000,
    },
    { id: 8, image_url: '/img/remood/remood8.jpg', name: 'remood mini', color: 'black', price: 260000 },
    { id: 9, image_url: '/img/remood/remood9.jpg', name: 'remood mini', color: 'deep pink', price: 260000 },
    {
      id: 10,
      image_url: '/img/remood/remood10.jpg',
      name: 'remood mini',
      color: 'silver',
      price: 260000,
    },
    {
      id: 11,
      image_url: '/img/remood/remood11.jpg',
      name: '3 way remood M',
      color: 'deep pink',
      price: 340000,
    },
    { id: 12, image_url: '/img/remood/remood12.jpg', name: '3 way remood M', color: 'brown', price: 340000 },
    { id: 13, image_url: '/img/remood/remood13.jpg', name: '3 way remood M', color: 'beige', price: 340000 },
    { id: 14, image_url: '/img/remood/remood14.jpg', name: '3 way remood M', color: 'white', price: 340000 },
    { id: 15, image_url: '/img/remood/remood15.jpg', name: 'remood mini', color: 'brown', price: 260000 },
    { id: 16, image_url: '/img/remood/remood16.jpg', name: '3 way remood M', color: 'black', price: 340000 },
  ];

  return (
    <div>
      <NewArrivalList products={products} />
    </div>
  );
};

export default RemoodContainer;
