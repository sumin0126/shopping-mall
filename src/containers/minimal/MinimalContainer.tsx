import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description minimal bag 컨테이너
 */
const MinimalContainer = () => {
  // 임시 데이터
  const products = [
    { id: 1, image_url: '/img/minimal/minimal1.jpg', name: 'ari bag', color: 'pale peach', price: 170000 },
    { id: 2, image_url: '/img/minimal/minimal2.jpg', name: 'ari bag', color: 'black', price: 170000 },
    { id: 3, image_url: '/img/minimal/minimal3.jpg', name: 'ari bag', color: 'cream pink', price: 170000 },
    { id: 4, image_url: '/img/minimal/minimal4.jpg', name: 'berca bag', color: 'skin beige', price: 130000 },
    { id: 5, image_url: '/img/minimal/minimal5.jpg', name: 'berca bag', color: 'rouge pink', price: 130000 },
    { id: 6, image_url: '/img/minimal/minimal6.jpg', name: 'ari bag', color: 'ivory', price: 170000 },
    { id: 7, image_url: '/img/minimal/minimal7.jpg', name: 'ari bag', color: 'lemon butter', price: 170000 },
    { id: 8, image_url: '/img/minimal/minimal8.jpg', name: 'berca bag', color: 'lake blue', price: 130000 },
    { id: 9, image_url: '/img/minimal/minimal9.jpg', name: 'berca bag', color: 'butter ivory', price: 130000 },
    { id: 10, image_url: '/img/minimal/minimal10.jpg', name: 'berca bag', color: 'black', price: 130000 },
    { id: 11, image_url: '/img/minimal/minimal11.jpg', name: 'berca bag', color: 'french red', price: 130000 },
  ];
  return (
    <>
      <NewArrivalList products={products} />
    </>
  );
};

export default MinimalContainer;