import { useForm } from 'react-hook-form'; // react-hook-form 라이브러리에서 useForm 훅 가져오기

interface IForm {
  name: string;
  email: string;
  mobileFirstInput: string;
  mobileMidInput: string;
  mobileLastInput: string;
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
    setFocus,
    formState: { errors },
  } = useForm<IForm>();

  // watch를 사용해서 password 필드 값을 실시간으로 추적함
  // 비밀번호 확인때 사용됨
  const password = watch('password');

  // form 제출 시 실행될 함수
  const handleSubmitForm = () => {};

  // 핸드폰 번호의 4자리가 다 채워지면 다음 필드로 포커스를 이동해주는 함수
  // keyof IForm은 IForm의 모든 키 이름을 리터럴 타입으로 변환해줌
  const handleMobileInputChange = (currentValue: string, nextField: keyof IForm) => {
    if (currentValue.length === 4) {
      setFocus(nextField);
    }
  };

  return (
    <div className="account-container">
      <p className="title">JOIN</p>

      <div className="form-container">
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
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          {/* 이메일 */}
          <div className="email-input-wrapper">
            <label htmlFor="email">
              EMAIL <span className="effect">*</span>
            </label>
            <input
              {...register('email', {
                required: '이메일은 필수 입력사항입니다.',
              })}
              type="email"
              className="email-input"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          {/* 휴대폰 번호 */}
          <div className="mobil-input-wrapper">
            <label htmlFor="mobile">
              MOBILE <span className="effect">*</span>
            </label>

            <div className="mobile-number-wrapper">
              <select {...register('mobileFirstInput')} className="mobile-first-input">
                <option value="010" selected>
                  010
                </option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              <span>-</span>
              <input
                {...register('mobileMidInput')}
                type="text"
                className="mobile-mid-input"
                maxLength={4}
                onChange={e => handleMobileInputChange(e.target.value, 'mobileLastInput')}
              />
              <span>-</span>
              <input
                {...register('mobileLastInput', {
                  required: '전화번호는 필수 입력사항입니다.',
                })}
                type="text"
                className="mobile-last-input"
                maxLength={4}
                onChange={e => handleMobileInputChange(e.target.value, 'postalCode')}
              />
              {errors.mobileLastInput && <p>{errors.mobileLastInput.message}</p>}
            </div>
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
                  value: /^[a-z0-9]{4,16}$/, // 정규 표현식 추가
                  message: '아이디는 영문 소문자와 숫자로 이루어진 4~16자이어야 합니다.',
                },
              })}
              type="text"
              className="id-input"
            />
            {errors.id && <p>{errors.id.message}</p>}
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
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]|.*[\W_])[a-zA-Z0-9\W_]{10,16}$/,
                  message: '(영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합으로 10~16자를 입력해 주세요.)',
                },
              })}
              type="password"
              className="ps-input"
            />
            {errors.password && <p>{errors.password.message}</p>}
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
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
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
