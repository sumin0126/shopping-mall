import { useRef } from 'react';

import { useRouter } from 'next/router';

interface IShopNavbarProps {
  isOpenShopNavBar: boolean;
  closeShopNavBar: () => void;
}

/**
 * @description 샵 네비바 컴포넌트
 *
 * @param isOpenShopNavBar - 네비바 활성화 상태
 * @param closeShopNavBar - 네비바 닫아주는 함수
 */
const ShopNavbar = ({ isOpenShopNavBar, closeShopNavBar }: IShopNavbarProps) => {
  const categoryRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  // 현재 페이지 이름 추출
  const pageName = router.pathname.replace('/', '').toLowerCase();

  // 클릭한 네비바 카테고리명 추출
  const category = categoryRef.current?.textContent?.toLowerCase().split(' ').join('');

  // 현재 페이지와 카테고리명 비교
  const isActive = pageName === category;

  // 클릭 시 New Arrival 페이지로 이동하는 함수
  const handleClickNewArrival = () => {
    router.push('/newarrival');
  };

  // 클릭 시 All Items 페이지로 이동하는 함수
  const handleClickAllItems = () => {
    router.push('/allitems');
  };

  // 클릭 시 twin bag 페이지로 이동하는 함수
  const handleClickTwinBag = () => {
    router.push('/twin');
  };

  // 클릭 시 remood bag 페이지로 이동하는 함수
  const handleClickRemoodBag = () => {
    router.push('/remood');
  };

  // 클릭 시 clo bag 페이지로 이동하는 함수
  const handleClickCloBag = () => {
    router.push('/clo');
  };

  return (
    <div className="navbar-container">
      <div className={`navbar-overlay ${isOpenShopNavBar ? 'show' : ''}`} onClick={closeShopNavBar} />
      <nav className={`navbar-wrapper ${isOpenShopNavBar ? 'open' : ''}`}>
        <p>SHOP</p>
        <button className={isActive ? 'highlight-category' : ''} ref={categoryRef} onClick={handleClickNewArrival}>
          NEW ARRIVAL
        </button>
        <button onClick={handleClickAllItems}>ALL ITEMS</button>
        <button onClick={handleClickTwinBag}>TWIN BAG</button>
        <button onClick={handleClickRemoodBag}>REMOOD BAG</button>
        <button onClick={handleClickCloBag}>CLO BAG</button>
        <button>MINIMAL BAG</button>
        <button>ACCESSORY</button>
      </nav>
    </div>
  );
};

export default ShopNavbar;
