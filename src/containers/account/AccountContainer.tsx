import { useEffect, useRef, useState } from 'react';

/**
 * @description 회원가입 컨테이너
 */
const AccountContainer = () => {
  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    mobileFirstInput: '',
    mobileMidInput: '',
    mobileLastInput: '',
    postalCode: '',
    basicAddress: '',
    id: '',
    password: '',
    confirmPassword: '',
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileMidRef = useRef<HTMLInputElement>(null);
  const mobileLastRef = useRef<HTMLInputElement>(null);

  // 회원가입 버튼 클릭 시 서버로 데이터를 보내는 함수
  const handleSubmitData = () => {
    checkPasswordMatch();

    // 아이디가 조건에 맞지 않으면 알림을 띄워주는 함수
    const idValue = idRef.current?.value || '';
    if (validateId(idValue) === false) {
      alert('아이디는 영문 소문자, 숫자로 4~16자를 입력해야 합니다.');
    }

    // 비밀번호가 조건에 맞지 않으면 알림을 띄워주는 함수
    const psValue = passwordRef.current?.value || '';
    if (validatePs(psValue) === false) {
      alert('비밀번호는 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합으로 10~16자를 입력해 주세요.');
    }

    // 이메일이 조건에 맞지 않으면 알림을 띄워주는 함수
    const emailValue = emailRef.current?.value || '';
    if (validateEmail(emailValue) === false) {
      alert('유효하지 않은 이메일 형식입니다.');
    }

    // 핸드폰번호가 조건에 맞지 않으면 알림을 띄워주는 함수
    const mobileMiddleValue = mobileMidRef.current?.value || '';
    const mobileLastValue = mobileLastRef.current?.value || '';
    if (validatePhoneNumber(mobileMiddleValue, mobileLastValue) === false) {
      alert('유효하지 않은 핸드폰 번호입니다.');
    }
  };

  // 아이디가 조건에 맞는지 확인하는 함수
  const validateId = (id: string): boolean => {
    // 조건에 맞는 정규 표현식
    const idRegex = /^[a-z0-9]{4,16}$/;
    // 정규표현식 패턴과 id를 비교하여 테스트함
    return idRegex.test(id);
  };

  // 비밀번호가 조건에 맞는지 확인하는 함수
  const validatePs = (ps: string): boolean => {
    const psRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]|.*[\W_])[a-zA-Z0-9\W_]{10,16}$/;
    return psRegex.test(ps);
  };

  // 이메일이 조건에 맞는지 확인하는 함수
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // 핸드폰 번호가 조건에 맞는지 확인하는 함수
  const validatePhoneNumber = (middle: string, last: string): boolean => {
    if (middle.length !== 4 || last.length !== 4) {
      return false;
    }

    // 숫자로만 이루어졌는지 확인하는 정규표현식 패턴
    const phoneNumberRegex = /^\d+$/;
    if (!phoneNumberRegex.test(middle) || !phoneNumberRegex.test(last)) {
      return false;
    }

    return true;
  };

  // 비밀번호와 확인용 비밀번호가 일치하는지 확인하는 함수
  const checkPasswordMatch = () => {
    if (accountData.password !== accountData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다!');
      passwordRef.current?.focus();
    }
  };

  // 인풋창의 값이 달라질때마다 상태를 업데이트해주는 함수
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  // 회원가입 페이지 렌더링시 이름 입력칸을 포커스 해주는 함수
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <div className="account-container">
      <p className="title">JOIN</p>

      <div className="form-container">
        <form action="" method="POST">
          {/* 이름 */}
          <div className="name-input-wrapper">
            <label htmlFor="name">
              NAME <span className="effect">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="name-input"
              required
              value={accountData.name}
              onChange={handleChangeInput}
              ref={nameRef}
            />
          </div>

          {/* 이메일 */}
          <div className="email-input-wrapper">
            <label htmlFor="email">
              EMAIL <span className="effect">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="email-input"
              placeholder="(example@gmail.com)"
              required
              value={accountData.email}
              onChange={handleChangeInput}
              ref={emailRef}
            />
          </div>

          {/* 휴대폰 번호 */}
          <div className="mobil-input-wrapper">
            <label htmlFor="mobile">
              MOBILE <span className="effect">*</span>
            </label>

            <div className="mobile-number-wrapper">
              <select
                name="mobileFirstInput"
                className="mobile-first-input"
                required
                value={accountData.mobileFirstInput}
                onChange={handleChangeInput}
              >
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
                type="text"
                name="mobileMidInput"
                className="mobile-mid-input"
                maxLength={4}
                required
                value={accountData.mobileMidInput}
                onChange={handleChangeInput}
                ref={mobileMidRef}
              />
              <span>-</span>
              <input
                type="text"
                name="mobileLastInput"
                className="mobile-last-input"
                maxLength={4}
                required
                value={accountData.mobileLastInput}
                onChange={handleChangeInput}
                ref={mobileLastRef}
              />
            </div>
          </div>

          {/* 주소 */}
          <div className="address-input-wrapper">
            <p className="address-title">ADDRESS</p>
            <input
              type="text"
              name="postalCode"
              className="postal-code-input"
              placeholder="(우편번호)"
              value={accountData.postalCode}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              name="basicAddress"
              className="basic-address-input"
              placeholder="(기본주소)"
              value={accountData.basicAddress}
              onChange={handleChangeInput}
            />
          </div>

          {/* 아이디 */}
          <div className="id-input-wrapper">
            <label htmlFor="id">
              ID <span className="effect">*</span>
            </label>
            <input
              type="text"
              name="id"
              className="id-input"
              placeholder="(영문 소문자와 숫자로 4~16자를 입력해 주세요.)"
              required
              value={accountData.id}
              onChange={handleChangeInput}
              ref={idRef}
            />
          </div>

          {/* 비밀번호 */}
          <div className="ps-input-wrapper">
            <label htmlFor="ps">
              PASSWORD <span className="effect">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="ps-input"
              placeholder="(영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합으로 10~16자를 입력해 주세요.)"
              required
              value={accountData.password}
              onChange={handleChangeInput}
              ref={passwordRef}
            />
          </div>

          {/* 비밀번호 확인 */}
          <div className="comfirm-ps-input-wrapper">
            <label htmlFor="confirm-ps">
              CONFIRM PASSWORD <span className="effect">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="confirm-ps-input"
              required
              value={accountData.confirmPassword}
              onChange={handleChangeInput}
            />
          </div>
        </form>
      </div>

      <div className="button-wrapper">
        <button className="account-btn" onClick={handleSubmitData}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default AccountContainer;
