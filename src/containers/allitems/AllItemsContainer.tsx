import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

/**
 * @description 전체상품 컨테이너
 */
const AllItemsContainer = () => {
  // 임시 데이터
  const ItemData = [
    {
      id: 1,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems1.jpg',
      itemName: 'FUR Large',
      itemColor: 'shakerato (LIMITED)',
      itemPrice: '95,000',
    },
    {
      id: 2,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems2.jpg',
      itemName: 'FUR',
      itemColor: 'shakerato',
      itemPrice: '160,000',
    },
    {
      id: 3,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems3.jpg',
      itemName: 'tobo L',
      itemColor: 'sand',
      itemPrice: '360,000',
    },
    {
      id: 4,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems4.jpg',
      itemName: 'tobo L',
      itemColor: 'brick',
      itemPrice: '360,000',
    },
    {
      id: 5,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems5.jpg',
      itemName: 'tobo bag',
      itemColor: 'brick',
      itemPrice: '210,000',
    },
    {
      id: 6,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems6.jpg',
      itemName: 'clo circle',
      itemColor: 'balck bell',
      itemPrice: '95,000',
    },
    {
      id: 7,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems7.jpg',
      itemName: 'clo circle',
      itemColor: 'wine',
      itemPrice: '95,000',
    },
    {
      id: 8,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems8.jpg',
      itemName: 'clo pouch keyring',
      itemColor: 'bourbon',
      itemPrice: '42,000',
    },
    {
      id: 9,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems9.jpg',
      itemName: 'clo pouch keyring',
      itemColor: 'wine',
      itemPrice: '42,000',
    },
    {
      id: 10,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems10.jpg',
      itemName: 'tobo bag',
      itemColor: 'nubuck pink',
      itemPrice: '220,000',
    },
    {
      id: 11,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems11.jpg',
      itemName: 'buckle middle boots',
      itemColor: 'black',
      itemPrice: '455,000',
    },
    {
      id: 12,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems12.jpg',
      itemName: 'patti bag',
      itemColor: 'khaki',
      itemPrice: '380,000',
    },
    {
      id: 13,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems13.jpg',
      itemName: 'clo soft',
      itemColor: 'leopard',
      itemPrice: '190,000',
    },
    {
      id: 14,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems14.jpg',
      itemName: 'clo soft',
      itemColor: 'black',
      itemPrice: '190,000',
    },
    {
      id: 15,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems15.jpeg',
      itemName: 'clo circle',
      itemColor: 'corduroy brown',
      itemPrice: '92,000',
    },
    {
      id: 16,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems16.jpeg',
      itemName: 'clo circle',
      itemColor: 'corduroy pink',
      itemPrice: '92,000',
    },
    {
      id: 17,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems17.jpeg',
      itemName: 'clo circle',
      itemColor: 'corduroy latte',
      itemPrice: '92,000',
    },
    {
      id: 18,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems18.jpg',
      itemName: 'strap flip flop',
      itemColor: 'suede black',
      itemPrice: '230,000',
    },
    {
      id: 19,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems19.jpg',
      itemName: 'denny loafer',
      itemColor: 'patent wine',
      itemPrice: '270,000',
    },
    {
      id: 20,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems20.jpg',
      itemName: 'tobo L',
      itemColor: 'woody',
      itemPrice: '360,000',
    },
    {
      id: 21,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems21.jpg',
      itemName: 'tobo L',
      itemColor: 'black',
      itemPrice: '360,000',
    },
    {
      id: 22,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems22.jpg',
      itemName: 'flot bag',
      itemColor: 'woven camel',
      itemPrice: '370,000',
    },
    {
      id: 23,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems23.jpg',
      itemName: 'daisy passport wallet',
      itemColor: 'caviar gray',
      itemPrice: '115,000',
    },
    {
      id: 24,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems24.jpg',
      itemName: 'daisy card slot',
      itemColor: 'caviar gray',
      itemPrice: '115,000',
    },
    {
      id: 25,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems25.jpg',
      itemName: 'daisy card slot',
      itemColor: 'patent wine',
      itemPrice: '95,000',
    },
    {
      id: 26,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems26.jpg',
      itemName: 'm silver logo keyring',
      itemColor: 'caviar gray',
      itemPrice: '75,000',
    },
    {
      id: 27,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems27.jpg',
      itemName: 'm silver logo keyring',
      itemColor: 'patent wine',
      itemPrice: '75,000',
    },
    {
      id: 28,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems28.jpg',
      itemName: 'barton micro',
      itemColor: 'caviar gray',
      itemPrice: '330,000',
    },
    {
      id: 29,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems29.jpg',
      itemName: 'clo micro',
      itemColor: 'blue bell',
      itemPrice: '68,000',
    },
    {
      id: 30,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems30.jpg',
      itemName: 'clo micro',
      itemColor: 'butter',
      itemPrice: '68,000',
    },
    {
      id: 31,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems31.jpg',
      itemName: 'clo micro',
      itemColor: 'leopard',
      itemPrice: '68,000',
    },
    {
      id: 32,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems32.jpg',
      itemName: 'clo micro',
      itemColor: 'black',
      itemPrice: '68,000',
    },
    {
      id: 33,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems33.jpg',
      itemName: 'barton bag',
      itemColor: 'caviar white',
      itemPrice: '530,000',
    },
    {
      id: 34,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems34.jpeg',
      itemName: 'travel kit',
      itemColor: 'butter',
      itemPrice: '59,000',
    },
    {
      id: 35,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems35.jpeg',
      itemName: 'clo backpack',
      itemColor: 'apricot',
      itemPrice: '210,000',
    },
    {
      id: 36,
      img: 'https://shopping-mall-images.s3.ap-northeast-2.amazonaws.com/products/allitems36.jpg',
      itemName: 'clo waist',
      itemColor: 'apricot',
      itemPrice: '140,000',
    },
  ];

  return (
    <div>
      <NewArrivalList ItemData={ItemData} />
    </div>
  );
};

export default AllItemsContainer;
