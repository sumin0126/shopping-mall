import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description twin bag 컨테이너
 */
const TwinContainer = () => {
  // 임시 데이터
  const ItemData = [
    { id: 1, img: '/img/twin/twin1.jpeg', itemName: 'twin mini', itemColor: 'ivory', itemPrice: '240,000' },
    { id: 2, img: '/img/twin/twin2.jpeg', itemName: 'twin bag', itemColor: 'ivory', itemPrice: '280,000' },
    { id: 3, img: '/img/twin/twin3.jpeg', itemName: 'twin mini', itemColor: 'soho pink', itemPrice: '240,000' },
    { id: 4, img: '/img/twin/twin4.jpeg', itemName: 'twin mini', itemColor: 'gray beige', itemPrice: '240,000' },
    { id: 5, img: '/img/twin/twin5.jpg', itemName: 'twin mini', itemColor: 'black', itemPrice: '240,000' },
    { id: 6, img: '/img/twin/twin6.jpg', itemName: 'twin bag', itemColor: 'soho pink', itemPrice: '280,000' },
    { id: 7, img: '/img/twin/twin7.jpg', itemName: 'twin bag', itemColor: 'lemon', itemPrice: '280,000' },
    { id: 8, img: '/img/twin/twin8.jpg', itemName: 'twin bag', itemColor: 'red wine', itemPrice: '280,000' },
    { id: 9, img: '/img/twin/twin9.jpg', itemName: 'twin bag', itemColor: 'gray beige', itemPrice: '280,000' },
    { id: 10, img: '/img/twin/twin10.jpg', itemName: 'twin bag', itemColor: 'black', itemPrice: '280,000' },
    { id: 11, img: '/img/twin/twin11.jpeg', itemName: 'twin mini', itemColor: 'red wine', itemPrice: '240,000' },
  ];
  return (
    <div>
      <NewArrivalList ItemData={ItemData} />
    </div>
  );
};

export default TwinContainer;
