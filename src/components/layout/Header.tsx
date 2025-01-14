import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AboutNavbar from '@/components/layout/navbar/AboutNavbar';
import ShopNavbar from '@/components/layout/navbar/ShopNavbar';
import { PATHNAME } from '@/constants/pathname';

/**
 * @description 헤더 컴포넌트
 */
const Header = () => {
  const [countItemsInCart] = useState(0);
  const [isOpenShopNavBar, setIsOpenShopNavBar] = useState(false);
  const [isOpenAboutNavBar, setIsOpenAboutNavBar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // 클릭 시 로그인 페이지로 이동하는 함수
  const handleClickLogin = () => {
    router.push(PATHNAME.LOGIN);
  };

  // 클릭 시 마이페이지로 이동하는 함수
  const handleClickMypage = () => {
    router.push(PATHNAME.MYPAGE);
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
    router.push(PATHNAME.CART);
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

  // 클리 시 search bar 열어주는 함수
  const handleClickSearch = () => {
    setIsOpenSearch(true);
  };

  // 클릭 시 search bar 닫아주는 함수
  const closeSearchBar = () => {
    setIsOpenSearch(false);
  };

  // 검색창이 열릴때마다 검색창에 커서를 포커스해주는 함수
  useEffect(() => {
    if (isOpenSearch) {
      searchInputRef.current?.focus();
    }
  }, [isOpenSearch]);

  // 로컬스토리지에서 isLogin 상태 가져오기
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    setIsLogin(loginStatus === 'true');
  }, []);

  // 로그아웃 버튼 클릭 시, 로컬스토리지에 저장된 토큰 삭제, isLogin 상태 변경 해주는 함수
  const handleClickLogout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('isLogin', 'false');
    setIsLogin(false);
    alert('로그아웃 되었습니다!');
    router.push(PATHNAME.MAIN);
  };

  // 상품을 찜하면 장바구니의 수가 + 1 늘어나는 함수

  return (
    <div className="main-header-container">
      <div className="main-header-left">
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

      <div className="main-header-center">
        <button className="logo" onClick={handleClickLogo}>
          minitmute
        </button>
      </div>

      <div className="main-header-right">
        {!isOpenSearch && (
          <button className="search" onClick={handleClickSearch}>
            SEARCH
          </button>
        )}

        {isOpenSearch && (
          <div className="search-bar-container">
            <div className={`search-bar-overlay ${isOpenSearch ? 'show' : ''}`} onClick={closeSearchBar}></div>
            <div className={`search-bar-wrapper ${isOpenSearch ? 'open' : ''}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
              <input type="text" className="search-input" ref={searchInputRef} placeholder="검색어를 입력하세요..." />
            </div>
          </div>
        )}

        <button className="cart" onClick={handleClickCart}>
          CART({countItemsInCart})
        </button>
        <button className="login" onClick={isLogin ? handleClickMypage : handleClickLogin}>
          {isLogin ? 'MY PAGE' : 'LOGIN'}
        </button>

        {/* 로그인 상태일때만 로그아웃 버튼 활성화 */}
        {isLogin && (
          <button className="logout" onClick={handleClickLogout}>
            LOGOUT
          </button>
        )}
      </div>

      <ShopNavbar isOpenShopNavBar={isOpenShopNavBar} closeShopNavBar={closeShopNavBar} />
      <AboutNavbar isOpenAboutNavBar={isOpenAboutNavBar} closeAboutNavBar={closeAboutNavBar} />
    </div>
  );
};

export default Header;
