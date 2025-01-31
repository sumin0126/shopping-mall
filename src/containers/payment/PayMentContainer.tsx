import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { useRouter } from 'next/router';

import { userApi } from '@/apis/users';
import OrderHistoryProductInfo from '@/components/card/myPage/orderHistory/OrderHistoryProductInfo';
import { PATHNAME } from '@/constants/pathname';
import PaymentMethodContainer from '@/containers/payment/parts/PaymentMethodContainer';
import ShippingAddressContainer from '@/containers/payment/parts/ShippingAddressContainer';
import TotalPriceContainer from '@/containers/payment/parts/TotalPriceContainer';

import type { ICheckUserResponse } from '@/apis/users/type';

// 폼 데이터에 대한 타입
export interface IMethodForm {
  name: string;
  email: string;
  phoneNumber: string;
  postCode?: string;
  address?: string;
  isSameUserInfo: boolean;
  isNewShippingAddress: boolean;
  shippingMessage: string;
  accountNumber: string;
  depositorName: string;
  bankSelect: string;
}

/**
 * @description 상품 결제 컨테이너
 */
const PayMentContainer = () => {
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>();
  const router = useRouter();

  // useFrom 호출하여 methods 객체 생성
  const methods = useForm<IMethodForm>({
    mode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      name: userInfo?.name || '',
      email: userInfo?.email || '',
      phoneNumber: userInfo?.phoneNumber || '',
      postCode: userInfo?.postCode || '',
      address: userInfo?.address || '',
      isSameUserInfo: true,
      isNewShippingAddress: false,
      bankSelect: '',
      accountNumber: '',
      depositorName: '',
    },
  });

  // 주문 상품 임시 데이터
  const orderHistoryData = {
    id: 1,
    imageUrl: '/img/accessory/accessory1.jpg',
    orderDate: '2025.01.19',
    name: 'FUR Large',
    color: 'shakerato (LIMITED)',
    price: 145000,
  };

  // 사용자 정보 불러와서 폼의 초기값으로 설정
  useEffect(() => {
    userApi.getUsersMe().then(res => {
      setUserInfo(res);

      methods.setValue('isSameUserInfo', true);
      methods.setValue('isNewShippingAddress', false);
      methods.setValue('name', res.name || '');
      methods.setValue('email', res.email || '');
      methods.setValue('phoneNumber', res.phoneNumber || '');
      methods.setValue('postCode', res.postCode || '');
      methods.setValue('address', res.address || '');
      methods.setValue('bankSelect', '');
      methods.setValue('accountNumber', '');
      methods.setValue('depositorName', '');
    });
  }, []);

  if (!userInfo) {
    return;
  }

  // 장바구니 페이지 예시 (선택상품 / 전체상품 주문)
  // const handleClick = () => {
  //   console.log(['selectedId']);
  // };

  // const handleClickAll = () => {
  //   console.log(['id1', 'id2']);
  // };

  // 상품 결제 버튼 클릭 시, 실행되는 함수
  const handleClickPayment = (data: IMethodForm) => {
    console.log(data);

    router.push({
      pathname: PATHNAME.MYPAGE,
      query: { tab: 'orderHistory' },
    });
  };

  return (
    <div className="payment-container">
      <script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>

      <p className="title">주문/결제</p>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleClickPayment)}>
          {/* 배송정보 */}
          <ShippingAddressContainer userInfo={userInfo} />

          {/* 결제수단 */}
          <PaymentMethodContainer />

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
        </form>
      </FormProvider>
    </div>
  );
};

export default PayMentContainer;
