import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames';

import AboutNavbar from '@/components/layout/navbar/AboutNavbar';
import ShopNavbar from '@/components/layout/navbar/ShopNavbar';
import { headerOpaqueState } from '@/stores/header';

/**
 * @description 헤더 컴포넌트
 */
const Header = () => {
  const [countItemsInCart, setCountItemsInCart] = useState(0);
  const [isOpenShopNavBar, setIsOpenShopNavBar] = useState(false);
  const [isOpenAboutNavBar, setIsOpenAboutNavBar] = useState(false);

  const router = useRouter();
  const isOpaque = useRecoilValue(headerOpaqueState);

  // 클릭 시 로그인 페이지로 이동하는 함수
  const handleClickLogin = () => {
    router.push('/login');
  };

  // 클릭 시 메인 페이지로 이동하는 함수
  const handleClickLogo = () => {
    router.push('/');
  };

  // 클릭 시 룩북 페이지로 이동하는 함수
  const handleClickLookBook = () => {
    router.push('/lookbook');
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
        <button className="search">SEARCH</button>
        <button className="cart">CART({countItemsInCart})</button>
        <button className="login" onClick={handleClickLogin}>
          LOGIN
        </button>
      </div>

      <ShopNavbar isOpenShopNavBar={isOpenShopNavBar} closeShopNavBar={closeShopNavBar} />
      {isOpenAboutNavBar && <AboutNavbar isOpenAboutNavBar={isOpenAboutNavBar} closeAboutNavBar={closeAboutNavBar} />}
    </div>
  );
};

export default Header;
