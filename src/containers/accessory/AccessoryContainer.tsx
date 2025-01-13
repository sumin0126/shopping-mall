import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description 악세서리 컨테이너
 */
const AccessoryContainer = () => {
  // 임시 데이터
  const products = [
    { id: 1, imageUrl: '/img/accessory/accessory1.jpg', name: 'clo pouch keyring', color: 'bourbon', price: 42000 },
    { id: 2, imageUrl: '/img/accessory/accessory2.jpg', name: 'clo pouch keyring', color: 'wine', price: 42000 },
    {
      id: 3,
      imageUrl: '/img/accessory/accessory3.jpg',
      name: 'm silver logo keyring',
      color: 'patent wine',
      price: 75000,
    },
    {
      id: 4,
      imageUrl: '/img/accessory/accessory4.jpg',
      name: 'm silver logo keyring',
      color: 'caviar gray',
      price: 75000,
    },
    { id: 5, imageUrl: '/img/accessory/accessory5.jpeg', name: 'travel kit', color: 'butter', price: 59000 },
    {
      id: 6,
      imageUrl: '/img/accessory/accessory6.jpeg',
      name: 'm silver logo keyring',
      color: 'pale green',
      price: 75000,
    },
    { id: 7, imageUrl: '/img/accessory/accessory7.jpg', name: 'butter note', color: 'butter', price: 18000 },
    {
      id: 8,
      imageUrl: '/img/accessory/accessory8.jpeg',
      name: 'm silver logo keyring',
      color: 'soap pink',
      price: 75000,
    },
    {
      id: 9,
      imageUrl: '/img/accessory/accessory9.jpg',
      name: 'm silver logo keyring',
      color: 'french mint',
      price: 75000,
    },
    { id: 10, imageUrl: '/img/accessory/accessory10.jpg', name: 'buckle belt', color: 'pale gray', price: 93000 },
    { id: 11, imageUrl: '/img/accessory/accessory11.jpg', name: 'buckle belt', color: 'pale pink', price: 93000 },
    { id: 12, imageUrl: '/img/accessory/accessory12.jpg', name: 'buckle belt', color: 'brown', price: 93000 },

    { id: 13, imageUrl: '/img/accessory/accessory13.jpg', name: 'clo pouch keyring', color: 'butter', price: 39000 },
    {
      id: 14,
      imageUrl: '/img/accessory/accessory14.jpg',
      name: 'm silver logo keyring',
      color: 'mu ivory',
      price: 75000,
    },
    {
      id: 15,
      imageUrl: '/img/accessory/accessory15.jpg',
      name: 'm silver logo keyring',
      color: 'mu black',
      price: 75000,
    },
    { id: 16, imageUrl: '/img/accessory/accessory16.jpg', name: 'classic belt', color: 'lizard brown', price: 95000 },
    {
      id: 17,
      imageUrl: '/img/accessory/accessory17.jpg',
      name: 'm silver logo keyring',
      color: 'silver',
      price: 75000,
    },
    {
      id: 18,
      imageUrl: '/img/accessory/accessory18.jpg',
      name: 'm silver logo keyring',
      color: 'coral orange',
      price: 75000,
    },
    {
      id: 19,
      imageUrl: '/img/accessory/accessory19.jpg',
      name: 'm silver logo keyring',
      color: 'deep pink',
      price: 75000,
    },
    {
      id: 20,
      imageUrl: '/img/accessory/accessory20.jpg',
      name: 'm silver logo keyring',
      color: 'classic brown',
      price: 75000,
    },
    {
      id: 21,
      imageUrl: '/img/accessory/accessory21.jpg',
      name: 'clo pouch keyring',
      color: 'black bell',
      price: 42000,
    },
    {
      id: 22,
      imageUrl: '/img/accessory/accessory22.jpg',
      name: 'clo pouch keyring',
      color: 'blue bell',
      price: 39000,
    },
    { id: 23, imageUrl: '/img/accessory/accessory23.jpg', name: 'clo pouch keyring', color: 'apricot', price: 39000 },
    {
      id: 24,
      imageUrl: '/img/accessory/accessory24.jpg',
      name: 'clo pouch keyring',
      color: 'corduroy latte',
      price: 42000,
    },

    { id: 25, imageUrl: '/img/accessory/accessory25.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 26, imageUrl: '/img/accessory/accessory26.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 27, imageUrl: '/img/accessory/accessory27.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 28, imageUrl: '/img/accessory/accessory28.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 29, imageUrl: '/img/accessory/accessory29.jpg', name: 'classic belt', color: 'caviar navy', price: 95000 },
  ];
  return (
    <>
      <NewArrivalList products={products} />
    </>
  );
};

export default AccessoryContainer;
