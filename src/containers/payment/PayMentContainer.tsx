import { useEffect, useState } from 'react';

import { userApi } from '@/apis/users';
import OrderHistoryProductInfo from '@/components/card/myPage/orderHistory/OrderHistoryProductInfo';
import ShippingAddressContainer from '@/containers/payment/parts/ShippingAddressContainer';
import TotalPriceContainer from '@/containers/payment/parts/TotalPriceContainer';

import type { ICheckUserResponse } from '@/apis/users/type';

/**
 * @description 상품 결제 컨테이너
 */
const PayMentContainer = () => {
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>();

  // 임시 데이터
  const orderHistoryData = {
    id: 1,
    imageUrl: '/img/accessory/accessory1.jpg',
    orderDate: '2025.01.19',
    name: 'FUR Large',
    color: 'shakerato (LIMITED)',
    price: 95000,
  };

  // 사용자 정보 불러오기
  useEffect(() => {
    userApi.getUsersMe().then(res => {
      setUserInfo(res);
    });
  }, []);

  if (!userInfo) {
    return;
  }

  return (
    <div className="payment-container">
      <p className="title">주문/결제</p>

      {/* 배송정보 */}
      <ShippingAddressContainer userInfo={userInfo} />

      {/* 주문정보 */}
      <OrderHistoryProductInfo
        imageUrl={orderHistoryData.imageUrl}
        orderDate={orderHistoryData.orderDate}
        name={orderHistoryData.name}
        color={orderHistoryData.color}
        price={orderHistoryData.price}
      />

      {/* 총 결제금액 */}
      <TotalPriceContainer />

      {/* 결제 버튼 */}
      <button>145,000원 결제하기</button>
    </div>
  );
};

export default PayMentContainer;
