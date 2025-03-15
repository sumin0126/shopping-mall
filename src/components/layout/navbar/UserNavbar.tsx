import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AlertModal from '@/components/modal/AlertModal';
import ConfirmModal from '@/components/modal/ConfirmModal';
import { PATHNAME } from '@/constants/pathname';

interface IUserNavbarProps {
  isOpenUserNavBar: boolean;
  closeUserNavBar: () => void;
  setIsOpenUserNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * @description shop 네비바 컴포넌트
 *
 * @param isOpenUserNavBar - 네비바 활성화 상태
 * @param closeUserNavBar - 네비바 닫아주는 함수
 */
const UserNavbar = ({ isOpenUserNavBar, closeUserNavBar, setIsOpenUserNavBar }: IUserNavbarProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const router = useRouter();

  // 장바구니로 이동하는 함수
  const handleClickCart = () => {
    router.push(PATHNAME.CART);
  };

  // 마이페이지로 이동하는 함수
  const handleClickMyPage = () => {
    router.push(PATHNAME.MYPAGE);
  };

  // 로그아웃 해주는 함수
  const handleClickLogout = () => {
    setIsOpenModal(true);
  };

  // 로컬스토리지에서 isLogin 상태 가져오기
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    setIsLogin(loginStatus === 'true');
  }, []);

  return (
    <div className="navbar-container">
      <div className={`navbar-overlay ${isOpenUserNavBar ? 'show' : ''}`} onClick={closeUserNavBar} />
      <nav className={`navbar-wrapper ${isOpenUserNavBar ? 'open' : ''}`}>
        {/* 모바일 X 버튼 */}
        <button className="close-icon" onClick={closeUserNavBar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <p>USER</p>
        <button onClick={handleClickCart}>CART</button>
        <button onClick={handleClickMyPage}>MY PAGE</button>
        <button onClick={handleClickLogout}>LOGOUT</button>

        {/* 로그아웃 확인 모달 */}
        {isOpenModal && (
          <ConfirmModal
            modalTitle="로그아웃 하시겠습니까?"
            handleClickConfirm={() => {
              setIsOpenModal(false);
              localStorage.removeItem('token');
              localStorage.setItem('isLogin', 'false');
              setIsOpenUserNavBar(false);
              setIsLogin(false);
            }}
            handleClickCancel={() => {
              setIsOpenModal(false);
            }}
          />
        )}

        {/* 로그인 요청 모달 */}
        {loginModal && (
          <AlertModal
            modalTitle="로그인 후 이용해주세요"
            handleClickConfirm={() => {
              setLoginModal(false);
              router.push(PATHNAME.LOGIN);
            }}
          />
        )}
      </nav>
    </div>
  );
};

export default UserNavbar;
