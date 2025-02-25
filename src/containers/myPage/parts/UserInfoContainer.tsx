import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { faEnvelope, faUser, faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { userApi } from '@/apis/users';
import UserDataCard from '@/components/card/myPage/userData/UserDataCard';
import UserDataList from '@/components/list/UserDataList';
import AlertModal from '@/components/modal/AlertModal';
import { PATHNAME } from '@/constants/pathname';

import type { ICheckUserResponse } from '@/apis/users/type';

/**
 * @description 마이페이지 - 회원정보 컨테이너
 */
const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useState<ICheckUserResponse>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
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

  // 핸드폰 번호 포맷팅(핸드폰 번호에 하이픈 추가해주는 함수)
  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
  };

  // 가입 날짜 포맷팅(날짜 설정 함수)
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

  // 사용자 정보가 들어있는 필드를 입력한 값으로 수정해주는 함수
  const handleChangeUserInfo = (field: keyof typeof editUserInfo, value: string) => {
    setEditUserInfo(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // 수정된 정보를 api 호출을 통해 전송해주는 함수
  const saveChangeUserInfo = () => {
    // const updateDate: IUpdateUserRequest = {
    //   // 여기에 이름, 비번, 비번확인, 아이디도 들어가야함
    //   // 그러려면 회원정보 수정 API를 하나 추가하거나,
    //   // 정보 조회 API에 위에 항목들도 추가해줘야함
    //   name: editUserInfo.name,
    //   phoneNumber: editUserInfo.phoneNumber,
    //   email: editUserInfo.email,
    //   address: editUserInfo.address,
    //   postCode: editUserInfo.postCode,
    //   userId: editUserInfo.userId,
    // };
    // userApi.postUserSignup(updateDate).then(res => {
    //   if (res.status === 201) {
    //     setUserInfo({
    //       ...userInfo,
    //       phoneNumber: editUserInfo.phoneNumber,
    //       email: editUserInfo.email,
    //       address: editUserInfo.address,
    //       postCode: editUserInfo.postCode,
    //     });
    //     setEditMode(false);
    //   }
    // });
    setIsOpenModal(true);
  };

  return (
    <div className="user-info-container">
      <UserDataList title="프로필 정보">
        {/* 이름 */}
        <UserDataCard icon={faUser} text={userInfo.name} className="user-icon" />

        {/* 전화번호 */}
        {editMode ? (
          <div className="phone-edit-box">
            <FontAwesomeIcon icon={faMobileScreenButton} className="phone-icon" />
            <input
              type="text"
              value={editUserInfo.phoneNumber}
              onChange={e => handleChangeUserInfo('phoneNumber', e.target.value)}
              className="phone-input"
              placeholder="핸드폰 번호를 입력해주세요."
            />
          </div>
        ) : (
          <UserDataCard
            icon={faMobileScreenButton}
            text={userInfo.phoneNumber ? formatPhoneNumber(userInfo.phoneNumber) : ''}
            className="phone-icon"
          />
        )}

        {/* 이메일 */}
        {editMode ? (
          <div className="email-edit-box">
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            <input
              type="text"
              value={editUserInfo.email}
              onChange={e => handleChangeUserInfo('email', e.target.value)}
              className="email-input"
              placeholder="이메일 주소를 입력해주세요."
            />
          </div>
        ) : (
          <UserDataCard icon={faEnvelope} text={userInfo.email} className="email-icon" />
        )}
      </UserDataList>

      <UserDataList title="배송지 정보">
        {/* 주소 */}
        {editMode ? (
          <div className="address-edit-box">
            <FontAwesomeIcon icon={faLocationDot} className="address-icon" />
            <input
              type="text"
              value={editUserInfo.address}
              onChange={e => handleChangeUserInfo('address', e.target.value)}
              className="address-input"
              placeholder="주소를 입력해주세요."
            />
          </div>
        ) : (
          <UserDataCard icon={faLocationDot} text={userInfo.address || '주소 정보 없음'} className="address-icon" />
        )}

        {/* 우편번호 */}
        {editMode ? (
          <div className="postCode-edit-box">
            <FontAwesomeIcon icon={faLocationDot} className="post-code-icon" />
            <input
              type="text"
              value={editUserInfo.postCode}
              onChange={e => handleChangeUserInfo('postCode', e.target.value)}
              className="postCode-input"
              placeholder="우편번호를 입력해주세요."
            />
          </div>
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
            <button className="cancel-button" onClick={handleClickEditMode}>
              취소
            </button>
          </>
        ) : (
          <button className="info-edit-btn" onClick={handleClickEditMode}>
            수정
          </button>
        )}
      </div>

      {/* 수정 완료시 알림 모달 */}
      {isOpenModal && (
        <AlertModal
          modalTitle="수정이 완료되었습니다 !"
          handleClickConfirm={() => {
            setIsOpenModal(false);
            router.push(PATHNAME.MYPAGE);
          }}
        />
      )}
    </div>
  );
};

export default UserInfoContainer;
