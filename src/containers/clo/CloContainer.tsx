import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

const CloContainer = () => {
  // 임시 데이터
  const ItemData = [
    { id: 1, img: '/img/clo/clo1.jpg', itemName: 'clo soft', itemColor: 'black bell', itemPrice: '195,000' },
    { id: 2, img: '/img/clo/clo2.jpg', itemName: 'clo circle', itemColor: 'black bell', itemPrice: '95,000' },
    { id: 3, img: '/img/clo/clo3.jpg', itemName: 'clo circle', itemColor: 'wine', itemPrice: '95,000' },
    { id: 4, img: '/img/clo/clo4.jpg', itemName: 'clo pouch keyring', itemColor: 'bourbon', itemPrice: '42,000' },
    { id: 5, img: '/img/clo/clo5.jpg', itemName: 'clo pouch keyring', itemColor: 'wine', itemPrice: '42,000' },
    { id: 6, img: '/img/clo/clo6.jpg', itemName: 'clo soft', itemColor: 'leopard', itemPrice: '190,000' },
    { id: 7, img: '/img/clo/clo7.jpg', itemName: 'clo soft', itemColor: 'black', itemPrice: '190,000' },
    { id: 8, img: '/img/clo/clo8.jpeg', itemName: 'clo circle', itemColor: 'corduroy brown', itemPrice: '92,000' },
    { id: 9, img: '/img/clo/clo9.jpeg', itemName: 'clo circle', itemColor: 'corduroy pink', itemPrice: '92,000' },
    { id: 10, img: '/img/clo/clo10.jpeg', itemName: 'clo circle', itemColor: 'corduroy latte', itemPrice: '92,000' },
    { id: 11, img: '/img/clo/clo11.jpg', itemName: 'clo micro', itemColor: 'blue bell', itemPrice: '68,000' },
    { id: 12, img: '/img/clo/clo12.jpg', itemName: 'clo micro', itemColor: 'butter', itemPrice: '68,000' },

    { id: 13, img: '/img/clo/clo13.jpg', itemName: 'clo micro', itemColor: 'leopard', itemPrice: '68,000' },
    { id: 14, img: '/img/clo/clo14.jpg', itemName: 'clo micro', itemColor: 'black', itemPrice: '68,000' },
    { id: 15, img: '/img/clo/clo15.jpeg', itemName: 'clo backpack', itemColor: 'apricot', itemPrice: '210,000' },
    { id: 16, img: '/img/clo/clo16.jpg', itemName: 'clo waist', itemColor: 'apricot', itemPrice: '140,000' },
    { id: 17, img: '/img/clo/clo17.jpg', itemName: 'clo mini', itemColor: 'blue bell', itemPrice: '98,000' },
    { id: 18, img: '/img/clo/clo18.jpg', itemName: 'clo mini', itemColor: 'apricot', itemPrice: '98,000' },
    { id: 19, img: '/img/clo/clo19.jpg', itemName: 'clo waist mini', itemColor: 'blue bell', itemPrice: '97,000' },
    { id: 20, img: '/img/clo/clo20.jpg', itemName: 'clo waist mini', itemColor: 'apricot', itemPrice: '97,000' },
    { id: 21, img: '/img/clo/clo21.jpg', itemName: 'clo waist mini', itemColor: 'black', itemPrice: '97,000' },
    { id: 22, img: '/img/clo/clo22.jpg', itemName: 'clo waist L', itemColor: 'butter', itemPrice: '180,000' },
    { id: 23, img: '/img/clo/clo23.jpg', itemName: 'clo waist L', itemColor: 'mocha beige', itemPrice: '180,000' },
    { id: 24, img: '/img/clo/clo24.jpg', itemName: 'clo waist L', itemColor: 'black', itemPrice: '180,000' },

    { id: 25, img: '/img/clo/clo25.jpg', itemName: 'clo backpack', itemColor: 'black', itemPrice: '210,000' },
    { id: 26, img: '/img/clo/clo26.jpg', itemName: 'clo backpack', itemColor: 'mocha beige', itemPrice: '210,000' },
    { id: 27, img: '/img/clo/clo27.jpg', itemName: 'clo waist', itemColor: 'black', itemPrice: '140,000' },
    { id: 28, img: '/img/clo/clo28.jpg', itemName: 'clo waist', itemColor: 'mocha beige', itemPrice: '140,000' },
    { id: 29, img: '/img/clo/clo29.jpg', itemName: 'clo mini', itemColor: 'black', itemPrice: '98,000' },
    { id: 30, img: '/img/clo/clo30.jpg', itemName: 'clo mini', itemColor: 'mocha beige', itemPrice: '98,000' },
    { id: 31, img: '/img/clo/clo31.jpg', itemName: 'clo mini', itemColor: 'soft pink', itemPrice: '98,000' },
    { id: 32, img: '/img/clo/clo32.jpg', itemName: 'clo backpack', itemColor: 'soft pink', itemPrice: '210,000' },
    { id: 33, img: '/img/clo/clo33.jpg', itemName: 'clo waist', itemColor: 'mix black', itemPrice: '140,000' },
    { id: 34, img: '/img/clo/clo34.jpg', itemName: 'clo waist', itemColor: 'butter', itemPrice: '140,000' },
    { id: 35, img: '/img/clo/clo35.jpg', itemName: 'clo mini', itemColor: 'butter', itemPrice: '98,000' },
    { id: 36, img: '/img/clo/clo36.jpg', itemName: 'clo backpack', itemColor: 'mix black', itemPrice: '210,000' },

    { id: 37, img: '/img/clo/clo37.jpg', itemName: 'clo backpack', itemColor: 'butter', itemPrice: '210,000' },
    { id: 38, img: '/img/clo/clo38.jpg', itemName: 'clo pouch keyring', itemColor: 'black', itemPrice: '39,000' },
    { id: 39, img: '/img/clo/clo39.jpg', itemName: 'clo pouch keyring', itemColor: 'butter', itemPrice: '39,000' },
    { id: 40, img: '/img/clo/clo40.jpg', itemName: 'clo pouch', itemColor: 'toni pink', itemPrice: '58,000' },
    { id: 41, img: '/img/clo/clo41.jpg', itemName: 'clo pouch', itemColor: 'soft pink', itemPrice: '58,000' },
    { id: 42, img: '/img/clo/clo42.jpg', itemName: 'clo pouch', itemColor: 'butter', itemPrice: '58,000' },
    { id: 43, img: '/img/clo/clo43.jpg', itemName: 'clo pouch', itemColor: 'autumn sky', itemPrice: '58,000' },
    { id: 44, img: '/img/clo/clo44.jpg', itemName: 'clo pouch', itemColor: 'baby pink', itemPrice: '58,000' },
    { id: 45, img: '/img/clo/clo45.jpg', itemName: 'clo circle', itemColor: 'snow blue', itemPrice: '95,000' },
    { id: 46, img: '/img/clo/clo46.jpg', itemName: 'clo circle', itemColor: 'butter cream', itemPrice: '95,000' },
    { id: 47, img: '/img/clo/clo47.jpg', itemName: 'clo waist mini', itemColor: 'mocha beige', itemPrice: '97,000' },
    { id: 48, img: '/img/clo/clo48.jpg', itemName: 'clo waist mini', itemColor: 'butter', itemPrice: '97,000' },

    { id: 49, img: '/img/clo/clo49.jpg', itemName: 'clo waist L', itemColor: 'soft pink', itemPrice: '180,000' },
    { id: 50, img: '/img/clo/clo50.jpg', itemName: 'clo pouch keyring', itemColor: 'soft pink', itemPrice: '39,000' },
    { id: 51, img: '/img/clo/clo51.jpg', itemName: 'clo waist', itemColor: 'soft pink', itemPrice: '140,000' },
    { id: 52, img: '/img/clo/clo52.jpg', itemName: 'clo soft', itemColor: 'bourbon', itemPrice: '195,000' },
    { id: 53, img: '/img/clo/clo53.jpg', itemName: 'clo soft', itemColor: 'wine', itemPrice: '195,000' },
    { id: 54, img: '/img/clo/clo54.jpg', itemName: 'clo circle', itemColor: 'bourbon', itemPrice: '95,000' },
    { id: 55, img: '/img/clo/clo55.jpg', itemName: 'clo pouch keyring', itemColor: 'black bell', itemPrice: '42,000' },
    { id: 56, img: '/img/clo/clo56.jpg', itemName: 'clo micro', itemColor: 'apricot', itemPrice: '68,000' },
    { id: 57, img: '/img/clo/clo57.jpg', itemName: 'clo micro', itemColor: 'mocha beige', itemPrice: '68,000' },
    { id: 58, img: '/img/clo/clo58.jpg', itemName: 'clo pouch keyring', itemColor: 'apricot', itemPrice: '39,000' },
    { id: 59, img: '/img/clo/clo59.jpg', itemName: 'clo pouch keyring', itemColor: 'blue bell', itemPrice: '39,000' },
    { id: 60, img: '/img/clo/clo60.jpg', itemName: 'clo waist', itemColor: 'blue bell', itemPrice: '140,000' },
  ];
  return (
    <div>
      <NewArrivalList ItemData={ItemData} />
    </div>
  );
};

export default CloContainer;
