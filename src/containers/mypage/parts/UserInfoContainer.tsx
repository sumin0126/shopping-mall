import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { faEnvelope, faUser, faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import { userApi } from '@/apis/users';
import UserDataCard from '@/components/card/myPage/userData/UserDataCard';
import UserDataList from '@/components/list/UserDataList';
import { PATHNAME } from '@/constants/pathname';

import type { ICheckUserResponse } from '@/apis/users/type';

/**
 * @description 마이페이지 - 회원정보 컨테이너
 */
const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>();

  const router = useRouter();

  // api 호출을 통해 사용자 정보를 가져오는 함수
  useEffect(() => {
    userApi.getUsersMe().then(res => {
      setUserInfo(res);
    });
  }, []);

  if (!userInfo) {
    return;
  }

  // 수정 버튼 클릭 시, 회원가입 페이지로 이동하는 함수
  const handleClickInfoEdit = () => {
    router.push({
      pathname: PATHNAME.ACCOUNT,
      query: {
        name: userInfo.name,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        address: userInfo.address || '',
        postCode: userInfo.postCode || '',
      },
    });
  };

  return (
    <div className="user-info-container">
      <UserDataList title="프로필 정보">
        <UserDataCard icon={faUser} text={userInfo.name} className="user-icon" />
        <UserDataCard icon={faMobileScreenButton} text={userInfo.phoneNumber} className="phone-icon" />
        <UserDataCard icon={faEnvelope} text={userInfo.email} className="email-icon" />
      </UserDataList>

      <UserDataList title="배송지 정보">
        <UserDataCard icon={faLocationDot} text={userInfo.address || '주소 정보 없음'} className="address-icon" />
        <UserDataCard
          icon={faLocationDot}
          text={`(우편번호) ${userInfo.postCode || '우편번호 정보 없음'}`}
          className="post-code-icon"
        />
      </UserDataList>

      <UserDataList title="계정 정보">
        <UserDataCard icon={faCalendarPlus} text={`${userInfo.createdAt} (가입 날짜)`} className="createdAt-icon" />
      </UserDataList>

      <button className="info-edit-btn" onClick={handleClickInfoEdit}>
        수정
      </button>
    </div>
  );
};

export default UserInfoContainer;
