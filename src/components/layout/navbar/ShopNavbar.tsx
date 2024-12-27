import { useRef, useEffect } from 'react';

interface IShopNavbarProps {
  isOpenShopNavBar: boolean;
  closeShopNavBar: () => void;
}

const ShopNavbar = ({ isOpenShopNavBar, closeShopNavBar }: IShopNavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeNavbar = (event: CustomEvent<MouseEvent>) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        closeShopNavBar();
      }
    };

    document.addEventListener('mousedown', closeNavbar as EventListener);

    return () => {
      document.removeEventListener('mousedown', closeNavbar as EventListener);
    };
  }, [isOpenShopNavBar, closeShopNavBar]);

  return (
    <div className='navbar-container'>
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
