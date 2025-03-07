import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

import AlertModal from '@/components/modal/AlertModal';
import { PATHNAME } from '@/constants/pathname';

interface IForm {
  name: string;
  phoneNumber?: string;
  userId: string;
}

/**
 * @description 사용자 비밀번호 찾기 컨테이너
 */
const FindPasswordContainer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  // useForm hook 초기화
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ mode: 'onSubmit' });

  // 확인 버튼 클릭 시, 실행되는 함수
  const handleSubmitForm = () => {
    setIsOpenModal(true);
  };

  return (
    <div className="find-password-container">
      {/* 타이틀 */}
      <p className="title">FIND PS</p>

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

          {/* 핸드폰번호 */}
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

          {/* 아이디 */}
          <div className="id-input-wrapper">
            <label htmlFor="id">ID</label>
            <input
              {...register('userId', {
                required: '아이디는 필수 입력사항입니다',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{4,16}$/,
                  message: '아이디는 영문 소문자와 숫자로 이루어진 4~16자이어야 합니다.',
                },
              })}
              type="text"
              className="id-input"
              placeholder="영문 소문자와 숫자로 이루어진 4~16자이어야 합니다."
            />
            {errors.userId && <p className="id-error-message">{errors.userId.message}</p>}
          </div>

          {/* 확인 버튼 */}
          <div className="button-wrapper">
            <button type="submit" className="confirm-btn">
              확인
            </button>
          </div>
        </form>

        {/* 비밀번호 전송 안내 모달 */}
        {isOpenModal && (
          <AlertModal
            modalTitle="휴대폰번호로 비밀번호를 전송하였습니다."
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

export default FindPasswordContainer;
