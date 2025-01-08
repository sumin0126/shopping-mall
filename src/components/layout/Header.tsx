import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';

import AboutNavbar from '@/components/layout/navbar/AboutNavbar';
import ShopNavbar from '@/components/layout/navbar/ShopNavbar';
import { PATHNAME } from '@/constants/pathname';
import { headerOpaqueState } from '@/stores/header';

/**
 * @description 헤더 컴포넌트
 */
const Header = () => {
  const [countItemsInCart] = useState(0);
  const [isOpenShopNavBar, setIsOpenShopNavBar] = useState(false);
  const [isOpenAboutNavBar, setIsOpenAboutNavBar] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const isOpaque = useRecoilValue(headerOpaqueState);

  // 클릭 시 로그인 페이지로 이동하는 함수
  const handleClickLogin = () => {
    router.push(PATHNAME.LOGIN);
  };

  // 클릭 시 메인 페이지로 이동하는 함수
  const handleClickLogo = () => {
    router.push(PATHNAME.MAIN);
  };

  // 클릭 시 룩북 페이지로 이동하는 함수
  const handleClickLookBook = () => {
    router.push(PATHNAME.LOOKBOOK);
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

  // 상품을 찜하면 장바구니의 수가 + 1 늘어나는 함수

  return (
    <div
      className={classNames('main-header-container', {
        active: !isOpaque,
      })}
    >
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
        {isOpenSearch || (
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

        <button className="cart">CART({countItemsInCart})</button>
        <button className="login" onClick={handleClickLogin}>
          LOGIN
        </button>
      </div>

      <ShopNavbar isOpenShopNavBar={isOpenShopNavBar} closeShopNavBar={closeShopNavBar} />
      <AboutNavbar isOpenAboutNavBar={isOpenAboutNavBar} closeAboutNavBar={closeAboutNavBar} />
    </div>
  );
};

export default Header;
