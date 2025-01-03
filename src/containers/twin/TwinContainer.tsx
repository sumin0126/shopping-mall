import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description twin bag 컨테이너
 */
const TwinContainer = () => {
  // 임시 데이터
  const products = [
    { id: 1, image_url: '/img/twin/twin1.jpeg', name: 'twin mini', color: 'ivory', price: 240000 },
    { id: 2, image_url: '/img/twin/twin2.jpeg', name: 'twin bag', color: 'ivory', price: 280000 },
    { id: 3, image_url: '/img/twin/twin3.jpeg', name: 'twin mini', color: 'soho pink', price: 240000 },
    { id: 4, image_url: '/img/twin/twin4.jpeg', name: 'twin mini', color: 'gray beige', price: 240000 },
    { id: 5, image_url: '/img/twin/twin5.jpg', name: 'twin mini', color: 'black', price: 240000 },
    { id: 6, image_url: '/img/twin/twin6.jpg', name: 'twin bag', color: 'soho pink', price: 280000 },
    { id: 7, image_url: '/img/twin/twin7.jpg', name: 'twin bag', color: 'lemon', price: 280000 },
    { id: 8, image_url: '/img/twin/twin8.jpg', name: 'twin bag', color: 'red wine', price: 280000 },
    { id: 9, image_url: '/img/twin/twin9.jpg', name: 'twin bag', color: 'gray beige', price: 280000 },
    { id: 10, image_url: '/img/twin/twin10.jpg', name: 'twin bag', color: 'black', price: 280000 },
    { id: 11, image_url: '/img/twin/twin11.jpeg', name: 'twin mini', color: 'red wine', price: 240000 },
  ];
  return (
    <>
      <NewArrivalList products={products} />
    </>
  );
};

export default TwinContainer;
