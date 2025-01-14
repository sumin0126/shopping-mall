import { useEffect, useState } from 'react';

import { faEnvelope, faUser, faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { userApi } from '@/apis/users';

import type { ICheckUserResponse } from '@/apis/users/type';

/**
 * @description 마이페이지 컨테이너
 */
const MypageContainer = () => {
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>();

  // api 호출을 통해 사용자 정보를 가져오는 함수
  useEffect(() => {
    userApi.getUsersMe().then(res => {
      setUserInfo(res);
    });
  }, []);

  if (!userInfo) {
    return;
  }

  return (
    <div className="mypage-container">
      <p className="title">MY PAGE</p>

      {/* 프로필 정보 */}
      <div className="profile">
        <p className="profile-title">프로필 정보</p>
        <div className="name">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <p>{userInfo.name}</p>
        </div>
        <div className="phone-number">
          <FontAwesomeIcon icon={faMobileScreenButton} className="phone-icon" />
          <p>{userInfo.phoneNumber}</p>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          <p>{userInfo.email}</p>
        </div>
      </div>

      {/* 배송지 정보 */}
      <div className="delivery-address">
        <p className="delivery-address-title">배송지</p>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} className="address-icon" />
          <p>{userInfo.address}</p>
        </div>
        <div className="post-code">
          <FontAwesomeIcon icon={faLocationDot} className="post-code-icon" />
          <p>{userInfo.postCode} (우편번호)</p>
        </div>
      </div>

      {/* 계정 정보 */}
      <div className="account-info">
        <p className="account-info-title">계정 정보</p>
        <div className="createdAt">
          <FontAwesomeIcon icon={faCalendarPlus} className="createdAt-icon" />
          <p>2025.01.01 (가입 날짜)</p>
        </div>
      </div>
    </div>
  );
};

export default MypageContainer;
