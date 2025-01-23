import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  name: string;
  email?: string;
  phoneNumber?: string;
  checkedEmail: boolean;
  checkedPhoneNumber: boolean;
}
/**
 * @description 유저 아이디 찾기 컨테이너
 */
const FindIdContainer = () => {
  const [errorMessage, setErrorMessage] = useState('');

  // useFrom hook 초기화
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IForm>({ mode: 'onSubmit', defaultValues: { checkedEmail: true, checkedPhoneNumber: false } });

  // 실시간으로 체크박스 상태 감지
  const checkedEmail = watch('checkedEmail');
  const checkedPhoneNumber = watch('checkedPhoneNumber');

  // 확인 버튼 클릭 시, 실행되는 함수
  const handleSubmitForm = async () => {
    try {
      // 유저 정보를 api 호출을 통해 서버에 전달
      // const res = await userApi.postFindId(data);
      const res = {
        userId: null,
      };

      if (res.userId) {
        alert(`아이디는 ${res.userId} 입니다 !`);
      } else {
        alert('등록된 정보를 찾을 수 없습니다 !');
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unknown error occurred.');
      }
    }
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
              {errorMessage && <p className="phoneNumber-error-message">{errorMessage}</p>}
              {errors.phoneNumber && <p className="phoneNumber-error-message">{errors.phoneNumber.message}</p>}
            </div>
          )}

          {/* 확인 버튼 */}
          <div className="button-wrapper">
            <button className="confirm-btn">확인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindIdContainer;
