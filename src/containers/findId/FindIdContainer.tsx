import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

import AlertModal from '@/components/modal/AlertModal';
import { PATHNAME } from '@/constants/pathname';

interface IForm {
  name: string;
  email?: string;
  phoneNumber?: string;
  checkedEmail: boolean;
  checkedPhoneNumber: boolean;
}
/**
 * @description 사용자 아이디 찾기 컨테이너
 */
const FindIdContainer = () => {
  const [userId] = useState<string | null>('admin');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();

  // useFrom hook 초기화
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IForm>({ mode: 'onSubmit', defaultValues: { checkedEmail: true, checkedPhoneNumber: false } });

  // 사용자가 이메일과 전화번호중 어느 방식을 선택했는지 실시간으로 감지
  const checkedEmail = watch('checkedEmail');
  const checkedPhoneNumber = watch('checkedPhoneNumber');

  // 확인 버튼 클릭 시, 실행되는 함수
  const handleSubmitForm = () => {
    setIsOpenModal(true);
  };

  // email 체크박스 선택 시, 실행되는 함수
  const handleClickCheckedEmail = () => {
    setValue('checkedEmail', true);
    setValue('checkedPhoneNumber', false);
  };

  // phoneNumber 체크박스 선택 시, 실행되는 함수
  const handleClickCheckedPhoneNumber = () => {
    setValue('checkedPhoneNumber', true);
    setValue('checkedEmail', false);
  };

  return (
    <div className="find-id-container">
      {/* 타이틀 */}
      <p className="title">FIND ID</p>

      {/* 체크 박스 */}
      <div className="find-id-check-box">
        <label>
          <input
            type="checkbox"
            {...register('checkedEmail')}
            checked={checkedEmail}
            onChange={handleClickCheckedEmail}
          />
          이메일
        </label>
        <label>
          <input
            type="checkbox"
            {...register('checkedPhoneNumber')}
            checked={checkedPhoneNumber}
            onChange={handleClickCheckedPhoneNumber}
          />
          휴대폰번호
        </label>
      </div>

      {/* form */}
      <div className="form-container">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* 이름 */}
          <div className="name-input-wrapper">
            <label htmlFor="name">이름</label>
            <input
              {...register('name', {
                required: '이름은 필수 입력사항입니다.',
              })}
              type="text"
              className="name-input"
            />
            {errors.name && <p className="name-error-message">{errors.name.message}</p>}
          </div>

          {/* 이메일 */}
          {checkedEmail && (
            <div className="email-input-wrapper">
              <label htmlFor="email">이메일</label>
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
          )}

          {/* 핸드폰번호 */}
          {checkedPhoneNumber && (
            <div className="phoneNumber-input-wrapper">
              <label htmlFor="phoneNumber">휴대폰번호</label>
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
          )}

          {/* 확인 버튼 */}
          <div className="button-wrapper">
            <button type="submit" className="confirm-btn">
              확인
            </button>
          </div>
        </form>

        {/* 아이디 표시 모달 */}
        {isOpenModal && userId && (
          <AlertModal
            modalTitle={`회원님의 아이디는 ${userId} 입니다.`}
            handleClickConfirm={() => {
              setIsOpenModal(false);
              router.push(PATHNAME.LOGIN);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FindIdContainer;
