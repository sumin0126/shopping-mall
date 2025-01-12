import { useForm } from 'react-hook-form'; // react-hook-form 라이브러리에서 useForm 훅 가져오기

interface IForm {
  name: string;
  email: string;
  mobile: string;
  postalCode: string;
  basicAddress: string;
  id: string;
  password: string;
  confirmPassword: string;
}

/**
 * @description 회원가입 컨테이너
 */
const SignupContainer = () => {
  // useFrom 훅을 호출하여 여러 메서드 속성을 가져옴
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({ mode: 'onSubmit', shouldFocusError: true });

  // watch를 사용해서 password 필드 값을 실시간으로 추적함
  // 비밀번호 확인때 사용됨
  const password = watch('password');

  // form 제출 시 실행될 함수
  const handleSubmitForm = () => {};

  return (
    <div className="account-container">
      <p className="title">JOIN</p>

      <div className="form-container">
        {/* handleSubmit의 첫번째 인자는 폼 검증 성공 시 실행, 두번째 인자는 폼 검증 실패 시 실행 */}
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* 이름 */}
          <div className="name-input-wrapper">
            <label htmlFor="name">
              NAME <span className="effect">*</span>
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
              EMAIL <span className="effect">*</span>
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
            />
            {errors.email && <p className="email-error-message">{errors.email.message}</p>}
          </div>

          {/* 휴대폰 번호 */}
          <div className="mobile-input-wrapper">
            <label htmlFor="mobile">
              MOBILE <span className="effect">*</span>
            </label>
            <input
              {...register('mobile', {
                required: '휴대폰번호는 필수 입력사항입니다.',
                pattern: {
                  value: /^(010|011|016|017|018|019)-\d{3,4}-\d{3,4}$/,
                  message: '휴대폰번호는 010-1234-5678 형식으로 입력해야 합니다.',
                },
              })}
              type="text"
              className="mobile-input"
              placeholder="예시) 010-1234-5678"
            />
            {errors.mobile && <p className="mobile-error-message">{errors.mobile.message}</p>}
          </div>

          {/* 주소 */}
          <div className="address-input-wrapper">
            <p className="address-title">ADDRESS</p>
            <input {...register('postalCode')} type="text" className="postal-code-input" placeholder="(우편번호)" />
            <input {...register('basicAddress')} type="text" className="basic-address-input" placeholder="(기본주소)" />
          </div>

          {/* 아이디 */}
          <div className="id-input-wrapper">
            <label htmlFor="id">
              ID <span className="effect">*</span>
            </label>
            <input
              {...register('id', {
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
            {errors.id && <p className="id-error-message">{errors.id.message}</p>}
          </div>

          {/* 비밀번호 */}
          <div className="ps-input-wrapper">
            <label htmlFor="ps">
              PASSWORD <span className="effect">*</span>
            </label>
            <input
              {...register('password', {
                required: '비밀번호는 필수 입력사항입니다',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d|.*[\W_])[A-Za-z\d\W_]{10,16}$/,
                  message: '비밀번호는 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합으로 10~16자이어야 합니다.',
                },
              })}
              type="password"
              className="ps-input"
              placeholder="영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합으로 10~16자이어야 합니다."
            />
            {errors.password && <p className="password-error-message">{errors.password.message}</p>}
          </div>

          {/* 비밀번호 확인 */}
          <div className="confirm-ps-input-wrapper">
            <label htmlFor="confirm-ps">
              CONFIRM PASSWORD <span className="effect">*</span>
            </label>
            <input
              {...register('confirmPassword', {
                required: '비밀번호는 필수 입력사항입니다',
                validate: value => {
                  return value !== password && '비밀번호가 다릅니다.';
                },
              })}
              type="password"
              className="confirm-ps-input"
            />
            {errors.confirmPassword && (
              <p className="confirm-password-error-message">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="button-wrapper">
            <button type="submit" className="account-btn">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupContainer;
