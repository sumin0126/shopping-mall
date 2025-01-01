import { useRouter } from 'next/router';
import { MouseEvent, useRef, useEffect } from 'react';

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
  const navbarRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  // 클릭 이벤트의 타겟이 navbarRef 내부가 아니면(= 네비바 배경) 네비바를 닫아주는 함수
  useEffect(() => {
    const closeNavbar = (event: CustomEvent<MouseEvent>) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        closeShopNavBar();
      }
    };

    // 위에서 만든 함수로 이벤트 적용
    document.addEventListener('mousedown', closeNavbar as EventListener);

    // ShopNavbar 컴포넌트가 사라질때 이벤트도 삭제
    return () => {
      document.removeEventListener('mousedown', closeNavbar as EventListener);
    };
  }, [isOpenShopNavBar, closeShopNavBar]);

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
      <div className={`navbar-wrapper ${isOpenShopNavBar ? 'active' : ''}`} ref={navbarRef}>
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
      </div>
    </div>
  );
};

export default ShopNavbar;
