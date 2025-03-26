import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { useRouter } from 'next/router';

import { productApi } from '@/apis/products';
import { userApi } from '@/apis/users';
import OrderHistoryProductInfo from '@/components/card/myPage/orderHistory/OrderHistoryProductInfo';
import AlertModal from '@/components/modal/AlertModal';
import { PATHNAME } from '@/constants/pathname';
import PaymentMethodContainer from '@/containers/payment/parts/PaymentMethodContainer';
import ShippingAddressContainer from '@/containers/payment/parts/ShippingAddressContainer';
import TotalPriceContainer from '@/containers/payment/parts/TotalPriceContainer';

import type { IProduct } from '@/apis/products/type';
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
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>(); // 유저 기본 정보
  const [isAlertOpenModal, setIsAlertOpenModal] = useState(false); // 결제 완료 모달

  // 장바구니에서 전달받은 상품들을 API로 받아서 저장
  const [products, setProducts] = useState<IProduct[]>([]);

  const router = useRouter();
  const { productId } = router.query;

  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

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
      bankSelect: '국민은행',
      accountNumber: '',
      depositorName: '',
    },
  });

  // productId로 여러 상품 불러오기
  useEffect(() => {
    if (!productId) {
      return;
    }

    // 주문하려는 상품의 id 문자열들을 숫자 배열로 변환
    const ids =
      typeof productId === 'string'
        ? productId
            .split(',')
            .map(Number)
            .filter(id => !isNaN(id))
        : [];

    // 주문하려는 각 id에 대해 개별적으로 API 요청하여 불러오기
    Promise.all(ids.map(id => productApi.getProduct({ id })))
      .then(resArray => {
        setProducts(resArray);
      })
      .catch(err => {
        console.error('상품 불러오기 실패', err);
      });
  }, [productId]);

  // 사용자 정보 불러와서 폼의 초기값으로 설정
  useEffect(() => {
    userApi.getUsersMe().then(res => {
      setUserInfo(res);
      methods.setValue('name', res.name || '');
      methods.setValue('email', res.email || '');
      methods.setValue('phoneNumber', res.phoneNumber || '');
      methods.setValue('postCode', res.postCode || '');
      methods.setValue('address', res.address || '');
    });
  }, []);

  if (!userInfo) {
    return;
  }

  // 모든 상품들의 가격을 더한 총 결제금액
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  // 상품 결제 버튼 클릭 시, 실행되는 함수
  const handleClickPayment = (data: IMethodForm) => {
    if (!products.length) return;

    // 결제 버튼 클릭 시, 로컬스토리지에 저장할 주문 데이터 생성
    const orderData = products.map(product => ({
      id: product.id,
      imageUrl: product.imageUrl,
      orderDate: formattedDate,
      name: product.name,
      color: product.color,
      price: product.price,
    }));

    // 이전 주문 내역 불러오기
    const previousOrderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');

    // 새로운 주문 데이터를 기존 데이터에 추가
    const updatedOrders = [...previousOrderHistory, ...orderData];

    // 로컬스토리지에 업데이트된 데이터 저장
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));

    console.log(data, updatedOrders);
    setIsAlertOpenModal(true);
  };

  if (!products.length) {
    return;
  }

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
          {products.map(product => (
            <OrderHistoryProductInfo
              key={product.id}
              productId={product.id}
              imageUrl={product.imageUrl}
              orderDate={formattedDate}
              name={product.name}
              color={product.color || ''}
              price={product.price}
            />
          ))}

          {/* 총 결제금액 */}
          <TotalPriceContainer price={totalPrice} />

          {/* 결제 버튼 */}
          <button className="payment-btn">{totalPrice.toLocaleString()}원 결제하기</button>
        </form>
      </FormProvider>

      {/* 결제 완료 모달 */}
      {isAlertOpenModal && (
        <AlertModal
          modalTitle="주문이 완료되었습니다 !"
          handleClickConfirm={() => {
            setIsAlertOpenModal(false);
            router.push({
              pathname: PATHNAME.MYPAGE,
              query: { tab: 'orderHistory' },
            });
          }}
        />
      )}
    </div>
  );
};

export default PayMentContainer;
