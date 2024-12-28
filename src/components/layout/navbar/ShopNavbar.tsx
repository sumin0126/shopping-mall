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

  return (
    <div className="navbar-container">
      <div className={`navbar-wrapper ${isOpenShopNavBar ? 'active' : ''}`} ref={navbarRef}>
        <p>SHOP</p>
        <button>NEW ARRIVAL</button>
        <button>ALL ITEMS</button>
        <button>TWIN BAG</button>
        <button>REMOOD BAG</button>
        <button>CLO BAG</button>
        <button>MINIMAL BAG</button>
        <button>ACCESSORY</button>
      </div>
    </div>
  );
};

export default ShopNavbar;
