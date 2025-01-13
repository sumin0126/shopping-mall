import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description twin bag 컨테이너
 */
const TwinContainer = () => {
  // 임시 데이터
  const products = [
    { id: 1, imageUrl: '/img/twin/twin1.jpeg', name: 'twin mini', color: 'ivory', price: 240000 },
    { id: 2, imageUrl: '/img/twin/twin2.jpeg', name: 'twin bag', color: 'ivory', price: 280000 },
    { id: 3, imageUrl: '/img/twin/twin3.jpeg', name: 'twin mini', color: 'soho pink', price: 240000 },
    { id: 4, imageUrl: '/img/twin/twin4.jpeg', name: 'twin mini', color: 'gray beige', price: 240000 },
    { id: 5, imageUrl: '/img/twin/twin5.jpg', name: 'twin mini', color: 'black', price: 240000 },
    { id: 6, imageUrl: '/img/twin/twin6.jpg', name: 'twin bag', color: 'soho pink', price: 280000 },
    { id: 7, imageUrl: '/img/twin/twin7.jpg', name: 'twin bag', color: 'lemon', price: 280000 },
    { id: 8, imageUrl: '/img/twin/twin8.jpg', name: 'twin bag', color: 'red wine', price: 280000 },
    { id: 9, imageUrl: '/img/twin/twin9.jpg', name: 'twin bag', color: 'gray beige', price: 280000 },
    { id: 10, imageUrl: '/img/twin/twin10.jpg', name: 'twin bag', color: 'black', price: 280000 },
    { id: 11, imageUrl: '/img/twin/twin11.jpeg', name: 'twin mini', color: 'red wine', price: 240000 },
  ];
  return (
    <>
      <NewArrivalList products={products} />
    </>
  );
};

export default TwinContainer;
