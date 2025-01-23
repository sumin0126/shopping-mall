import { useEffect, useState } from 'react';

import { userApi } from '@/apis/users';
import OrderHistoryProductInfo from '@/components/card/myPage/orderHistory/OrderHistoryProductInfo';
import ShippingAddressContainer from '@/containers/payment/parts/ShippingAddressContainer';
import TotalPriceContainer from '@/containers/payment/parts/TotalPriceContainer';

import type { ICheckUserResponse } from '@/apis/users/type';

// 상품 결제 완료시 타입
interface IIamPortResponse {
  success: boolean; // 결제 성공 여부
  imp_uid: string; // 아임포트 고유 ID
  merchant_uid: string; // 상점 고유 주문 ID
  error_message?: string; // 결제 실패 시 에러 메시지
  paid_amount?: number; // 결제 금액
  buyer_name?: string; // 구매자 이름
}

// 상품 결제 데이터 타입
interface IPaymentData {
  pg: string; // PG사
  pay_method: string; // 결제 방식
  merchant_uid: string; // 주문 고유 ID
  amount: number; // 결제 금액
  name: string; // 상품명
  buyer_name: string; // 구매자 이름
  buyer_tel: string; // 구매자 연락처
  buyer_email: string; // 구매자 이메일
  escrow: boolean; // 에스크로 여부
}

/**
 * @description 상품 결제 컨테이너
 */
const PayMentContainer = () => {
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>();
  const [isIMPReady, setIsIMPReady] = useState(false); // IMP 로드 상태

  // 장바구니 임시 데이터
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

    // 아임포트 JavaScript SDK 초기화
    const script = document.createElement('script');
    script.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
    script.async = true;
    script.onload = () => {
      setIsIMPReady(true);
    };
    script.onerror = () => {
      alert('결제 모듈이 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!userInfo) {
    return;
  }

  // 상품 결제 버튼 클릭 시, 실행되는 함수
  const handleClickPayment = () => {
    if (!isIMPReady || typeof window === 'undefined' || !window.IMP) {
      alert('결제 모듈이 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const { IMP } = window; // 아임포트 객체
    IMP.init('imp88728080'); // 아임포트 유저코드

    // 상품 결제 임시 데이터
    const paymentData: IPaymentData = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제 방식
      merchant_uid: `mid_${new Date().getTime()}`, // 주문 고유 번호
      amount: orderHistoryData.price, // 결제 금액
      name: orderHistoryData.name, // 상품명
      buyer_name: userInfo.name || '구매자 이름 없음', // 구매자 이름
      buyer_tel: userInfo.phoneNumber || '01012345678', // 구매자 연락처
      buyer_email: userInfo.email || 'test@example.com', // 구매자 이메일
      escrow: false,
    };

    // 상품 결제 완료 시, 실행되는 함수
    IMP.request_pay(paymentData, (res: IIamPortResponse) => {
      if (res.success) {
        alert('결제가 완료되었습니다 !');
        console.log('결제 성공', res);
      } else {
        alert(`결제 실패 ${res.error_message}`);
        console.log('결제 실패', res);
      }
    });
  };

  return (
    <div className="payment-container">
      <script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>

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
      <button onClick={handleClickPayment}>145,000원 결제하기</button>
    </div>
  );
};

export default PayMentContainer;
