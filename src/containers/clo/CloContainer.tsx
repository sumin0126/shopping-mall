import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

const CloContainer = () => {
  // 임시 데이터
  const products = [
    { id: 1, image_url: '/img/clo/clo1.jpg', name: 'clo soft', color: 'black bell', price: 195000 },
    { id: 2, image_url: '/img/clo/clo2.jpg', name: 'clo circle', color: 'black bell', price: 95000 },
    { id: 3, image_url: '/img/clo/clo3.jpg', name: 'clo circle', color: 'wine', price: 95000 },
    { id: 4, image_url: '/img/clo/clo4.jpg', name: 'clo pouch keyring', color: 'bourbon', price: 42000 },
    { id: 5, image_url: '/img/clo/clo5.jpg', name: 'clo pouch keyring', color: 'wine', price: 42000 },
    { id: 6, image_url: '/img/clo/clo6.jpg', name: 'clo soft', color: 'leopard', price: 190000 },
    { id: 7, image_url: '/img/clo/clo7.jpg', name: 'clo soft', color: 'black', price: 190000 },
    { id: 8, image_url: '/img/clo/clo8.jpeg', name: 'clo circle', color: 'corduroy brown', price: 92000 },
    { id: 9, image_url: '/img/clo/clo9.jpeg', name: 'clo circle', color: 'corduroy pink', price: 92000 },
    { id: 10, image_url: '/img/clo/clo10.jpeg', name: 'clo circle', color: 'corduroy latte', price: 92000 },
    { id: 11, image_url: '/img/clo/clo11.jpg', name: 'clo micro', color: 'blue bell', price: 68000 },
    { id: 12, image_url: '/img/clo/clo12.jpg', name: 'clo micro', color: 'butter', price: 68000 },

    { id: 13, image_url: '/img/clo/clo13.jpg', name: 'clo micro', color: 'leopard', price: 68000 },
    { id: 14, image_url: '/img/clo/clo14.jpg', name: 'clo micro', color: 'black', price: 68000 },
    { id: 15, image_url: '/img/clo/clo15.jpeg', name: 'clo backpack', color: 'apricot', price: 210000 },
    { id: 16, image_url: '/img/clo/clo16.jpg', name: 'clo waist', color: 'apricot', price: 140000 },
    { id: 17, image_url: '/img/clo/clo17.jpg', name: 'clo mini', color: 'blue bell', price: 98000 },
    { id: 18, image_url: '/img/clo/clo18.jpg', name: 'clo mini', color: 'apricot', price: 98000 },
    { id: 19, image_url: '/img/clo/clo19.jpg', name: 'clo waist mini', color: 'blue bell', price: 97000 },
    { id: 20, image_url: '/img/clo/clo20.jpg', name: 'clo waist mini', color: 'apricot', price: 97000 },
    { id: 21, image_url: '/img/clo/clo21.jpg', name: 'clo waist mini', color: 'black', price: 97000 },
    { id: 22, image_url: '/img/clo/clo22.jpg', name: 'clo waist L', color: 'butter', price: 180000 },
    { id: 23, image_url: '/img/clo/clo23.jpg', name: 'clo waist L', color: 'mocha beige', price: 180000 },
    { id: 24, image_url: '/img/clo/clo24.jpg', name: 'clo waist L', color: 'black', price: 180000 },

    { id: 25, image_url: '/img/clo/clo25.jpg', name: 'clo backpack', color: 'black', price: 210000 },
    { id: 26, image_url: '/img/clo/clo26.jpg', name: 'clo backpack', color: 'mocha beige', price: 210000 },
    { id: 27, image_url: '/img/clo/clo27.jpg', name: 'clo waist', color: 'black', price: 140000 },
    { id: 28, image_url: '/img/clo/clo28.jpg', name: 'clo waist', color: 'mocha beige', price: 140000 },
    { id: 29, image_url: '/img/clo/clo29.jpg', name: 'clo mini', color: 'black', price: 98000 },
    { id: 30, image_url: '/img/clo/clo30.jpg', name: 'clo mini', color: 'mocha beige', price: 98000 },
    { id: 31, image_url: '/img/clo/clo31.jpg', name: 'clo mini', color: 'soft pink', price: 98000 },
    { id: 32, image_url: '/img/clo/clo32.jpg', name: 'clo backpack', color: 'soft pink', price: 210000 },
    { id: 33, image_url: '/img/clo/clo33.jpg', name: 'clo waist', color: 'mix black', price: 140000 },
    { id: 34, image_url: '/img/clo/clo34.jpg', name: 'clo waist', color: 'butter', price: 140000 },
    { id: 35, image_url: '/img/clo/clo35.jpg', name: 'clo mini', color: 'butter', price: 98000 },
    { id: 36, image_url: '/img/clo/clo36.jpg', name: 'clo backpack', color: 'mix black', price: 210000 },

    { id: 37, image_url: '/img/clo/clo37.jpg', name: 'clo backpack', color: 'butter', price: 210000 },
    { id: 38, image_url: '/img/clo/clo38.jpg', name: 'clo pouch keyring', color: 'black', price: 39000 },
    { id: 39, image_url: '/img/clo/clo39.jpg', name: 'clo pouch keyring', color: 'butter', price: 39000 },
    { id: 40, image_url: '/img/clo/clo40.jpg', name: 'clo pouch', color: 'toni pink', price: 58000 },
    { id: 41, image_url: '/img/clo/clo41.jpg', name: 'clo pouch', color: 'soft pink', price: 58000 },
    { id: 42, image_url: '/img/clo/clo42.jpg', name: 'clo pouch', color: 'butter', price: 58000 },
    { id: 43, image_url: '/img/clo/clo43.jpg', name: 'clo pouch', color: 'autumn sky', price: 58000 },
    { id: 44, image_url: '/img/clo/clo44.jpg', name: 'clo pouch', color: 'baby pink', price: 58000 },
    { id: 45, image_url: '/img/clo/clo45.jpg', name: 'clo circle', color: 'snow blue', price: 95000 },
    { id: 46, image_url: '/img/clo/clo46.jpg', name: 'clo circle', color: 'butter cream', price: 95000 },
    { id: 47, image_url: '/img/clo/clo47.jpg', name: 'clo waist mini', color: 'mocha beige', price: 97000 },
    { id: 48, image_url: '/img/clo/clo48.jpg', name: 'clo waist mini', color: 'butter', price: 97000 },

    { id: 49, image_url: '/img/clo/clo49.jpg', name: 'clo waist L', color: 'soft pink', price: 180000 },
    { id: 50, image_url: '/img/clo/clo50.jpg', name: 'clo pouch keyring', color: 'soft pink', price: 39000 },
    { id: 51, image_url: '/img/clo/clo51.jpg', name: 'clo waist', color: 'soft pink', price: 140000 },
    { id: 52, image_url: '/img/clo/clo52.jpg', name: 'clo soft', color: 'bourbon', price: 195000 },
    { id: 53, image_url: '/img/clo/clo53.jpg', name: 'clo soft', color: 'wine', price: 195000 },
    { id: 54, image_url: '/img/clo/clo54.jpg', name: 'clo circle', color: 'bourbon', price: 95000 },
    { id: 55, image_url: '/img/clo/clo55.jpg', name: 'clo pouch keyring', color: 'black bell', price: 42000 },
    { id: 56, image_url: '/img/clo/clo56.jpg', name: 'clo micro', color: 'apricot', price: 68000 },
    { id: 57, image_url: '/img/clo/clo57.jpg', name: 'clo micro', color: 'mocha beige', price: 68000 },
    { id: 58, image_url: '/img/clo/clo58.jpg', name: 'clo pouch keyring', color: 'apricot', price: 39000 },
    { id: 59, image_url: '/img/clo/clo59.jpg', name: 'clo pouch keyring', color: 'blue bell', price: 39000 },
    { id: 60, image_url: '/img/clo/clo60.jpg', name: 'clo waist', color: 'blue bell', price: 140000 },
  ];
  return (
    <div>
      <NewArrivalList products={products} />
    </div>
  );
};

export default CloContainer;
