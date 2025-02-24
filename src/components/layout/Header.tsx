import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AboutNavbar from '@/components/layout/navbar/AboutNavbar';
import ShopNavbar from '@/components/layout/navbar/ShopNavbar';
import AlertModal from '@/components/modal/AlertModal';
import ConfirmModal from '@/components/modal/ConfirmModal';
import { PATHNAME } from '@/constants/pathname';

/**
 * @description 헤더 컴포넌트
 */
const Header = () => {
  const [isOpenShopNavBar, setIsOpenShopNavBar] = useState(false);
  const [isOpenAboutNavBar, setIsOpenAboutNavBar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const router = useRouter();

  // 클릭 시 로그인 페이지로 이동하는 함수
  const handleClickLogin = () => {
    router.push(PATHNAME.LOGIN);
  };

  // 클릭 시 마이페이지로 이동하는 함수
  const handleClickMypage = () => {
    if (isLogin) {
      router.push(PATHNAME.MYPAGE);
    } else {
      setLoginModal(true);
    }
  };

  // 클릭 시 메인 페이지로 이동하는 함수
  const handleClickLogo = () => {
    router.push(PATHNAME.MAIN);
  };

  // 클릭 시 룩북 페이지로 이동하는 함수
  const handleClickLookBook = () => {
    router.push(PATHNAME.LOOKBOOK);
  };

  // 클릭 시 장바구니 페이지로 이동하는 함수
  const handleClickCart = () => {
    if (isLogin) {
      router.push(PATHNAME.CART);
    } else {
      setLoginModal(true);
    }
  };

  // 클릭 시 shop navbar 열어주는 함수
  const handleClickShop = () => {
    setIsOpenShopNavBar(true);
  };

  // 클릭 시 shop navbar 닫아주는 함수
  const closeShopNavBar = () => {
    setIsOpenShopNavBar(false);
  };

  // 클릭 시 about navbar 열어주는 함수
  const handleClickAbout = () => {
    setIsOpenAboutNavBar(true);
  };

  // 클릭 시 about navbar 닫아주는 함수
  const closeAboutNavBar = () => {
    setIsOpenAboutNavBar(false);
  };

  // 로컬스토리지에서 isLogin 상태 가져오기
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    setIsLogin(loginStatus === 'true');
  }, []);

  // 로그아웃 버튼 클릭 시 실행되는 함수
  const handleClickLogout = () => {
    setLogoutModal(true);
  };

  return (
    <div className="main-header-container">
      {/* 왼쪽 */}
      <div className="main-header-left">
        {/* 모바일 왼쪽 : 햄버거 아이콘 버튼 */}
        <button className="mobile-header-left" onClick={handleClickShop}>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
        </button>

        {/* PC 왼쪽 : 텍스트 버튼들  */}
        <div className="desktop-header-left">
          <button className="shop" onClick={handleClickShop}>
            SHOP
          </button>
          <button className="about" onClick={handleClickAbout}>
            ABOUT
          </button>
          <button className="look-book" onClick={handleClickLookBook}>
            LOOK BOOK
          </button>
        </div>
      </div>

      {/* 가운데 */}
      <div className="main-header-center">
        <button className="logo" onClick={handleClickLogo}>
          minitmute
        </button>
      </div>

      {/* 오른쪽 */}
      <div className="main-header-right">
        {/* 모바일 오른쪽 : 돋보기 아이콘 버튼 */}
        <button className="mobile-header-right">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </button>

        {/* PC 오른쪽 : 텍스트 버튼들 */}
        <div className="desktop-header-right">
          <button className="cart" onClick={handleClickCart}>
            CART
          </button>
          <button className="mypage" onClick={handleClickMypage}>
            MY PAGE
          </button>
          <button className="login" onClick={isLogin ? handleClickLogout : handleClickLogin}>
            {isLogin ? 'LOGOUT' : 'LOGIN'}
          </button>
        </div>

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

        {/* 로그아웃 안내 모달 */}
        {logoutModal && (
          <ConfirmModal
            modalTitle="로그아웃 하시겠습니까?"
            handleClickConfirm={() => {
              setLogoutModal(false);
              localStorage.removeItem('token');
              localStorage.setItem('isLogin', 'false');
              setIsLogin(false);
              router.push(PATHNAME.MAIN);
            }}
            handleClickCancel={() => {
              setLogoutModal(false);
            }}
          />
        )}
      </div>

      <ShopNavbar isOpenShopNavBar={isOpenShopNavBar} closeShopNavBar={closeShopNavBar} />
      <AboutNavbar isOpenAboutNavBar={isOpenAboutNavBar} closeAboutNavBar={closeAboutNavBar} />
    </div>
  );
};

export default Header;
