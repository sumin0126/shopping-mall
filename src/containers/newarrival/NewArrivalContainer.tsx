import { useEffect, useState } from 'react';

import { productApi } from '@/apis/products';
import NewArrivalList from '@/components/card/newArrival/NewArrivalList';

import type { IProductResponse } from '@/apis/products/type';

/**
 * @description 신상품 컨테이너
 */
const NewArrivalContainer = () => {
  const [products, setProducts] = useState<IProductResponse>();

  // api 호출을 통해 신상품 데이터만 가져오는 함수
  useEffect(() => {
    productApi.getNewProducts().then(res => {
      setProducts(res);
    });
  }, []);

  if (!products || !products.data) {
    return;
  }

  // 임시 데이터
  // const ItemData = [
  //   { id: 1, img: '/img/newarrival/newarrival.jpg', itemName: 'FUR', itemColor: 'cappuccino', itemPrice: '160,000' },
  //   {
  //     id: 2,
  //     img: '/img/newarrival/newarrival2.jpg',
  //     itemName: 'FUR Large',
  //     itemColor: 'shakerato (LIMITED)',
  //     itemPrice: '95,000',
  //   },
  //   {
  //     id: 3,
  //     img: '/img/newarrival/newarrival3.jpg',
  //     itemName: 'clo circle',
  //     itemColor: 'snow blue (LIMITED)',
  //     itemPrice: '95,000',
  //   },
  //   {
  //     id: 4,
  //     img: '/img/newarrival/newarrival4.jpg',
  //     itemName: 'clo circle',
  //     itemColor: 'butter cream (LIMITED)',
  //     itemPrice: '95,000',
  //   },
  //   { id: 5, img: '/img/newarrival/newarrival5.jpg', itemName: 'FUR', itemColor: 'shakerato', itemPrice: '160,000' },
  //   { id: 6, img: '/img/newarrival/newarrival6.jpg', itemName: 'tobo L', itemColor: 'sand', itemPrice: '360,000' },
  //   { id: 7, img: '/img/newarrival/newarrival7.jpg', itemName: 'tobo bag', itemColor: 'brick', itemPrice: '210,000' },
  //   { id: 8, img: '/img/newarrival/newarrival8.jpg', itemName: 'tobo L', itemColor: 'brick', itemPrice: '360,000' },
  //   {
  //     id: 9,
  //     img: '/img/newarrival/newarrival9.jpg',
  //     itemName: 'clo soft',
  //     itemColor: 'black bell',
  //     itemPrice: '195,000',
  //   },
  //   { id: 10, img: '/img/newarrival/newarrival10.jpg', itemName: 'clo soft', itemColor: 'wine', itemPrice: '195,000' },
  //   {
  //     id: 11,
  //     img: '/img/newarrival/newarrival11.jpg',
  //     itemName: 'clo soft',
  //     itemColor: 'bourbon',
  //     itemPrice: '195,000',
  //   },
  //   {
  //     id: 12,
  //     img: '/img/newarrival/newarrival12.jpg',
  //     itemName: 'clo circle',
  //     itemColor: 'black bell',
  //     itemPrice: '95,000',
  //   },
  //   {
  //     id: 13,
  //     img: '/img/newarrival/newarrival13.jpg',
  //     itemName: 'clo pouch keyring',
  //     itemColor: 'black bell',
  //     itemPrice: '42,000',
  //   },
  //   {
  //     id: 14,
  //     img: '/img/newarrival/newarrival14.jpg',
  //     itemName: 'clo pouch keyring',
  //     itemColor: 'bourbon',
  //     itemPrice: '42,000',
  //   },
  //   {
  //     id: 15,
  //     img: '/img/newarrival/newarrival15.jpg',
  //     itemName: 'clo pouch keyring',
  //     itemColor: 'wine',
  //     itemPrice: '42,000',
  //   },
  // ];

  return (
    <div className="new-arrival-container">
      <NewArrivalList products={products.data} />
    </div>
  );
};

export default NewArrivalContainer;
