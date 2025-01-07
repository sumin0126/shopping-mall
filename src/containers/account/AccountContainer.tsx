import { useRef, useState } from 'react';

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
  const passwordRef = useRef<HTMLInputElement>(null);

  // 회원가입 버튼 클릭 시 서버로 데이터를 보내는 함수
  const handleSubmitData = () => {
    checkPasswordMatch();
    checkRequiredFields();
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

  // 필수입력항목이 비어있는지 확인하는 함수
  const checkRequiredFields = () => {
    if (
      !accountData.name ||
      !accountData.email ||
      !accountData.mobileFirstInput ||
      !accountData.mobileMidInput ||
      !accountData.mobileLastInput ||
      !accountData.id ||
      !accountData.password ||
      !accountData.confirmPassword
    ) {
      alert('필수입력항목을 확인하세요!');
    }
  };

  return (
    <div className="account-container">
      <p className="title">JOIN</p>

      <div className="form-container">
        <form action="" method="POST">
          {/* 이름 */}
          <div className="name-input-wrapper">
            <label htmlFor="name">NAME *</label>
            <input
              type="text"
              name="name"
              className="name-input"
              required
              value={accountData.name}
              onChange={handleChangeInput}
            />
          </div>

          {/* 이메일 */}
          <div className="email-input-wrapper">
            <label htmlFor="email">EMAIL *</label>
            <input
              type="email"
              name="email"
              className="email-input"
              placeholder="(example@gmail.com)"
              required
              value={accountData.email}
              onChange={handleChangeInput}
            />
          </div>

          {/* 휴대폰 번호 */}
          <div className="mobil-input-wrapper">
            <label htmlFor="mobile">MOBILE *</label>

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
            <label htmlFor="id">ID *</label>
            <input
              type="text"
              name="id"
              className="id-input"
              placeholder="(영문 소문자와 숫자로 4~16자를 입력해 주세요.)"
              required
              value={accountData.id}
              onChange={handleChangeInput}
            />
          </div>

          {/* 비밀번호 */}
          <div className="ps-input-wrapper">
            <label htmlFor="ps">PASSWORD *</label>
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
            <label htmlFor="confirm-ps">CONFIRM PASSWORD *</label>
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
