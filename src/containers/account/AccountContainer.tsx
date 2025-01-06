const AccountContainer = () => {
  return (
    <div className="account-container">
      <p className="title">CREATE AN ACCOUNT</p>

      <div className="form-container">
        <form action="" method="POST">
          {/* 이름 */}
          <div className="name-input-wrapper">
            <label htmlFor="name">NAME *</label>
            <input type="text" name="name" className="name-input" required />
          </div>

          {/* 이메일 */}
          <div className="email-input-wrapper">
            <label htmlFor="email">EMAIL *</label>
            <input type="email" name="email" className="email-input" placeholder="(example@gmail.com)" required />
          </div>

          {/* 휴대폰 번호 */}
          <div className="mobil-input-wrapper">
            <label htmlFor="mobile">MOBILE *</label>
            <select name="mobile" className="mobile-select" required>
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
            <input type="text" name="mobile-mid" className="mobile-mid-input" maxLength={4} required />
            <span>-</span>
            <input type="text" name="mobile-last" className="mobile-last-input" maxLength={4} required />
          </div>

          {/* 주소 */}
          <div className="address-input-wrapper">
            <p className="address-title">ADDRESS</p>
            <input type="text" name="postal-code" className="postal-code-input" placeholder="(우편번호)" />
            <input type="text" name="basic-address" className="basic-address-input" placeholder="(기본주소)" />
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
            />
          </div>

          {/* 비밀번호 */}
          <div className="ps-input-wrapper">
            <label htmlFor="ps">PASSWORD *</label>
            <input
              type="password"
              name="ps"
              className="ps-input"
              placeholder="(영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합으로 10~16자를 입력해 주세요.)"
              required
            />
          </div>

          {/* 비밀번호 확인 */}
          <div className="comfirm-ps-input-wrapper">
            <label htmlFor="confirm-ps">CONFIRM PASSWORD *</label>
            <input type="password" name="confirm-ps" className="confirm-ps-input" required />
          </div>
        </form>
      </div>

      <div className="button-wrapper">
        <button className="account-btn">회원가입</button>
        <button className="cancel-btn">취소</button>
      </div>
    </div>
  );
};

export default AccountContainer;
