import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

const AccessoryContainer = () => {
  // 임시 데이터
  const products = [
    { id: 1, image_url: '/img/accessory/accessory1.jpg', name: 'clo pouch keyring', color: 'bourbon', price: 42000 },
    { id: 2, image_url: '/img/accessory/accessory2.jpg', name: 'clo pouch keyring', color: 'wine', price: 42000 },
    {
      id: 3,
      image_url: '/img/accessory/accessory3.jpg',
      name: 'm silver logo keyring',
      color: 'patent wine',
      price: 75000,
    },
    {
      id: 4,
      image_url: '/img/accessory/accessory4.jpg',
      name: 'm silver logo keyring',
      color: 'caviar gray',
      price: 75000,
    },
    { id: 5, image_url: '/img/accessory/accessory5.jpeg', name: 'travel kit', color: 'butter', price: 59000 },
    {
      id: 6,
      image_url: '/img/accessory/accessory6.jpeg',
      name: 'm silver logo keyring',
      color: 'pale green',
      price: 75000,
    },
    { id: 7, image_url: '/img/accessory/accessory7.jpg', name: 'butter note', color: 'butter', price: 18000 },
    {
      id: 8,
      image_url: '/img/accessory/accessory8.jpeg',
      name: 'm silver logo keyring',
      color: 'soap pink',
      price: 75000,
    },
    {
      id: 9,
      image_url: '/img/accessory/accessory9.jpg',
      name: 'm silver logo keyring',
      color: 'french mint',
      price: 75000,
    },
    { id: 10, image_url: '/img/accessory/accessory10.jpg', name: 'buckle belt', color: 'pale gray', price: 93000 },
    { id: 11, image_url: '/img/accessory/accessory11.jpg', name: 'buckle belt', color: 'pale pink', price: 93000 },
    { id: 12, image_url: '/img/accessory/accessory12.jpg', name: 'buckle belt', color: 'brown', price: 93000 },

    { id: 13, image_url: '/img/accessory/accessory13.jpg', name: 'clo pouch keyring', color: 'butter', price: 39000 },
    {
      id: 14,
      image_url: '/img/accessory/accessory14.jpg',
      name: 'm silver logo keyring',
      color: 'mu ivory',
      price: 75000,
    },
    {
      id: 15,
      image_url: '/img/accessory/accessory15.jpg',
      name: 'm silver logo keyring',
      color: 'mu black',
      price: 75000,
    },
    { id: 16, image_url: '/img/accessory/accessory16.jpg', name: 'classic belt', color: 'lizard brown', price: 95000 },
    {
      id: 17,
      image_url: '/img/accessory/accessory17.jpg',
      name: 'm silver logo keyring',
      color: 'silver',
      price: 75000,
    },
    {
      id: 18,
      image_url: '/img/accessory/accessory18.jpg',
      name: 'm silver logo keyring',
      color: 'coral orange',
      price: 75000,
    },
    {
      id: 19,
      image_url: '/img/accessory/accessory19.jpg',
      name: 'm silver logo keyring',
      color: 'deep pink',
      price: 75000,
    },
    {
      id: 20,
      image_url: '/img/accessory/accessory20.jpg',
      name: 'm silver logo keyring',
      color: 'classic brown',
      price: 75000,
    },
    {
      id: 21,
      image_url: '/img/accessory/accessory21.jpg',
      name: 'clo pouch keyring',
      color: 'black bell',
      price: 42000,
    },
    {
      id: 22,
      image_url: '/img/accessory/accessory22.jpg',
      name: 'clo pouch keyring',
      color: 'blue bell',
      price: 39000,
    },
    { id: 23, image_url: '/img/accessory/accessory23.jpg', name: 'clo pouch keyring', color: 'apricot', price: 39000 },
    {
      id: 24,
      image_url: '/img/accessory/accessory24.jpg',
      name: 'clo pouch keyring',
      color: 'corduroy latte',
      price: 42000,
    },

    { id: 25, image_url: '/img/accessory/accessory25.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 26, image_url: '/img/accessory/accessory26.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 27, image_url: '/img/accessory/accessory27.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 28, image_url: '/img/accessory/accessory28.jpg', name: 'clo pouch keyring', color: 'red', price: 39000 },
    { id: 29, image_url: '/img/accessory/accessory29.jpg', name: 'classic belt', color: 'caviar navy', price: 95000 },
  ];
  return (
    <>
      <NewArrivalList products={products} />
    </>
  );
};

export default AccessoryContainer;
