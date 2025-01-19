import { useForm } from 'react-hook-form';

import Script from 'next/script';

import type { ICheckUserResponse } from '@/apis/users/type';

// 폼 데이터에 대한 타입
interface IShippingForm {
  name: string;
  email: string;
  phoneNumber: string;
  postCode?: string;
  address?: string;
  isSameUserInfo: boolean;
  isNewShippingAddress: boolean;
  shippingMessage: string;
}

/**
 * @description 상품 결제 - 배송정보 컨테이너
 */
const ShippingAddressContainer = ({ userInfo }: { userInfo: ICheckUserResponse }) => {
  // useFrom 훅 초기화
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IShippingForm>({ mode: 'onSubmit', shouldFocusError: true });

  // form 제출 시 실행될 함수
  const handleSubmitForm = () => {};

  // "회원정보와 동일" 체크박스에 클릭 시, 필드에 기존 사용자 정보를 업데이트해주는 함수
  const handleClickSameUserInfo = () => {
    setValue('isNewShippingAddress', false);
    setValue('name', userInfo.name || '');
    setValue('email', userInfo.email || '');
    setValue('phoneNumber', userInfo.phoneNumber || '');
    setValue('postCode', userInfo.postCode || '');
    setValue('address', userInfo.address || '');
  };

  // "새로운 배송지" 체크박스에 클릭 시, 빈 필드로 만들어주는 함수
  const handleClickNewAddress = () => {
    setValue('isSameUserInfo', false);
    setValue('name', '');
    setValue('email', '');
    setValue('phoneNumber', '');
    setValue('postCode', '');
    setValue('address', '');
  };

  // 배송메세지 클릭 시, 클릭한 메세지로 업데이트 해주는 함수
  const handleChangeShippingMessage = (message: string) => {
    setValue('shippingMessage', message);
  };

  // 우편번호 찾기 버튼 클릭 후, 찾은 주소를 상태에 업데이트 해주는 함수
  const searchAddress = () => {
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: data => {
          setValue('postCode', data.zonecode);
          setValue('address', data.address);
        },
      }).open();
    }
  };

  return (
    <div className="shipping-address-container">
      {/* 카카오 우편번호 API 스크립트 로드 */}
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="beforeInteractive"
        onError={() => console.error('카카오 우편번호 API 로드 실패')}
      />

      {/* 배송지 선택 체크박스 */}
      <div className="shipping-choice-checkbox">
        <label>
          <input type="checkbox" {...register('isSameUserInfo')} onClick={handleClickSameUserInfo} />
          회원정보와 동일
        </label>
        <label>
          <input type="checkbox" {...register('isNewShippingAddress')} onClick={handleClickNewAddress} />
          새로운 배송지
        </label>
      </div>

      {/* 배송 정보 폼 */}
      <div className="form-container">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* 이름 */}
          <div className="name-input-wrapper">
            <label htmlFor="name">
              받으시는 분 <span className="effect">*</span>
            </label>
            <input
              {...register('name', {
                required: '이름은 필수 입력사항입니다.',
              })}
              type="text"
              className="name-input"
              // 기존에 있던 onchange와 ref는 리액트훅폼이 입력값과 상태를 관리함
            />
            {errors.name && <p className="name-error-message">{errors.name.message}</p>}
          </div>

          {/* 이메일 */}
          <div className="email-input-wrapper">
            <label htmlFor="email">
              이메일 <span className="effect">*</span>
            </label>
            <input
              {...register('email', {
                required: '이메일은 필수 입력사항입니다.',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: '이메일은 email@test.com 형식으로 입력해야 합니다.',
                },
              })}
              className="email-input"
              placeholder="예시) email@test.com"
            />
            {errors.email && <p className="email-error-message">{errors.email.message}</p>}
          </div>

          {/* 휴대폰 번호 */}
          <div className="phoneNumber-input-wrapper">
            <label htmlFor="phoneNumber">
              휴대전화 <span className="effect">*</span>
            </label>
            <input
              {...register('phoneNumber', {
                required: '휴대폰번호는 필수 입력사항입니다.',
                pattern: {
                  value: /^(010|011|016|017|018|019)\d{3,4}\d{3,4}$/,
                  message: '휴대폰번호는 01012345678 형식으로 입력해야 합니다.',
                },
              })}
              type="text"
              className="phoneNumber-input"
              placeholder="예시) 01012345678"
            />
            {errors.phoneNumber && <p className="phoneNumber-error-message">{errors.phoneNumber.message}</p>}
          </div>

          {/* 주소 */}
          <div className="address-input-wrapper">
            <label className="address-title">
              주소 <span className="effect">*</span>
            </label>
            {/* 우편번호 */}
            <div className="address-wrapper">
              <input
                {...register('postCode')}
                type="text"
                className="postal-code-input"
                placeholder="우편번호"
                readOnly
              />
              <button type="button" className="btn-postcode-search" onClick={searchAddress}>
                우편번호 찾기
              </button>

              {/* 기본주소 */}
              <input
                {...register('address')}
                type="text"
                className="basic-address-input"
                placeholder="기본주소 및 추가주소 입력"
              />
            </div>
          </div>

          {/* 배송 메세지 */}
          <div className="shipping-message-wrapper">
            <label htmlFor="shipping-message">배송 메세지</label>
            <select {...register('shippingMessage')} onChange={e => handleChangeShippingMessage(e.target.value)}>
              <option value="부재 시 연락 부탁드려요">부재 시 연락 부탁드려요</option>
              <option value="배송 전 미리 연락 부탁드려요">배송 전 미리 연락 부탁드려요</option>
              <option value="문 앞에 놓아주세요">문 앞에 놓아주세요</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddressContainer;
