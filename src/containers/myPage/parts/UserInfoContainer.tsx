import { useEffect, useState } from 'react';

import { faEnvelope, faUser, faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import { userApi } from '@/apis/users';
import UserDataCard from '@/components/card/myPage/userData/UserDataCard';
import UserDataList from '@/components/list/UserDataList';
import AlertModal from '@/components/modal/AlertModal';

import type { ICheckUserResponse } from '@/apis/users/type';

interface IUpdateUserRequest {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  postCode: string;
  userId: string;
}

/**
 * @description 마이페이지 - 회원정보 컨테이너
 */
const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    postCode: '',
    userId: '',
  });

  // api 호출을 통해 사용자 정보를 가져오는 함수
  useEffect(() => {
    userApi.getUsersMe().then(res => {
      setUserInfo(res);
      setEditUserInfo({
        name: res.name || '',
        phoneNumber: res.phoneNumber || '',
        email: res.email || '',
        address: res.address || '',
        postCode: res.postCode || '',
        userId: res.userId || '',
      });
    });
  }, []);

  if (!userInfo) {
    return;
  }

  // 핸드폰 번호에 하이픈 추가해주는 함수
  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
  };

  // 날짜 설정 함수
  const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  // 수정 버튼 클릭 시, 수정 모드로 전환해주는 함수
  const handleClickEditMode = () => {
    setEditMode(!editMode);
  };

  // 수정 시, 사용자 정보를 입력한 값으로 변경해주는 함수
  const handleChangeUserInfo = (field: keyof typeof editUserInfo, value: string) => {
    setEditUserInfo(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // 수정된 정보를 api 호출을 통해 전송해주는 함수
  const saveChangeUserInfo = () => {
    const updateDate: IUpdateUserRequest = {
      // 여기에 이름, 비번, 비번확인, 아이디도 들어가야함
      // 그러려면 회원정보 수정 API를 하나 추가하거나,
      // 정보 조회 API에 위에 항목들도 추가해줘야함
      name: editUserInfo.name,
      phoneNumber: editUserInfo.phoneNumber,
      email: editUserInfo.email,
      address: editUserInfo.address,
      postCode: editUserInfo.postCode,
      userId: editUserInfo.userId,
    };

    userApi.postUserSignup(updateDate).then(res => {
      if (res.status === 201) {
        setUserInfo({
          ...userInfo,
          phoneNumber: editUserInfo.phoneNumber,
          email: editUserInfo.email,
          address: editUserInfo.address,
          postCode: editUserInfo.postCode,
        });
        setIsOpenModal(true);
        setEditMode(false);
      }
    });
  };

  return (
    <div className="user-info-container">
      <UserDataList title="프로필 정보">
        {/* 이름 */}
        <UserDataCard icon={faUser} text={userInfo.name} className="user-icon" />

        {/* 전화번호 */}
        {editMode ? (
          <input
            type="text"
            value={editUserInfo.phoneNumber}
            onChange={e => handleChangeUserInfo('phoneNumber', e.target.value)}
            className="phone-input"
          />
        ) : (
          <UserDataCard
            icon={faMobileScreenButton}
            text={userInfo.phoneNumber ? formatPhoneNumber(userInfo.phoneNumber) : ''}
            className="phone-icon"
          />
        )}

        {/* 이메일 */}
        {editMode ? (
          <input
            type="text"
            value={editUserInfo.email}
            onChange={e => handleChangeUserInfo('email', e.target.value)}
            className="email-input"
          />
        ) : (
          <UserDataCard icon={faEnvelope} text={userInfo.email} className="email-icon" />
        )}
      </UserDataList>

      <UserDataList title="배송지 정보">
        {/* 주소 */}
        {editMode ? (
          <input
            type="text"
            value={editUserInfo.address}
            onChange={e => handleChangeUserInfo('address', e.target.value)}
            className="address-input"
          />
        ) : (
          <UserDataCard icon={faLocationDot} text={userInfo.address || '주소 정보 없음'} className="address-icon" />
        )}

        {/* 우편번호 */}
        {editMode ? (
          <input
            type="text"
            value={editUserInfo.postCode}
            onChange={e => handleChangeUserInfo('postCode', e.target.value)}
            className="postCode-input"
          />
        ) : (
          <UserDataCard
            icon={faLocationDot}
            text={`(우편번호) ${userInfo.postCode || '우편번호 정보 없음'}`}
            className="post-code-icon"
          />
        )}
      </UserDataList>

      <UserDataList title="계정 정보">
        <UserDataCard
          icon={faCalendarPlus}
          text={`(가입 날짜) ${formatDate(userInfo.createdAt)}`}
          className="createdAt-icon"
        />
      </UserDataList>

      <div className="button-group">
        {editMode ? (
          <>
            <button className="save-button" onClick={saveChangeUserInfo}>
              저장
            </button>
            <button className="save-button" onClick={handleClickEditMode}>
              취소
            </button>
          </>
        ) : (
          <button className="info-edit-btn" onClick={handleClickEditMode}>
            수정
          </button>
        )}
      </div>

      {isOpenModal && (
        <AlertModal modalTitle="수정이 완료되었습니다 !" handleClickConfirm={() => setIsOpenModal(false)} />
      )}
    </div>
  );
};

export default UserInfoContainer;
