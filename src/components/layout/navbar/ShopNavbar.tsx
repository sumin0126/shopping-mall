import { useState } from 'react';

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
  const router = useRouter();

  // 현재 경로를 기본값으로 저장
  const [activeTab, setActiveTab] = useState(router.pathname);

  // 네비바에 들어갈 카테고리 목록과 경로
  const navbarCategorys = [
    {
      title: 'NEW ARRIVAL',
      path: '/newarrival',
    },
    {
      title: 'ALL ITEMS',
      path: '/allitems',
    },
    {
      title: 'TWIN BAG',
      path: '/twin',
    },
    {
      title: 'REMOOD BAG',
      path: '/remood',
    },
    {
      title: 'CLO BAG',
      path: '/clo',
    },
    {
      title: 'MINIMAL BAG',
      path: '/minimal',
    },
    {
      title: 'ACCESSORY',
      path: '/accessory',
    },
  ];

  // 카테고리 클릭 시, 카테고리의 경로를 업데이트하고, 해당 카테고리로 페이지 이동 시켜주는 함수
  const handleClickCategory = (categoryPath: string) => {
    setActiveTab(categoryPath);
    router.push(categoryPath);
  };

  return (
    <div className="navbar-container">
      <div className={`navbar-overlay ${isOpenShopNavBar ? 'show' : ''}`} onClick={closeShopNavBar} />
      <nav className={`navbar-wrapper ${isOpenShopNavBar ? 'open' : ''}`}>
        <p>SHOP</p>
        {navbarCategorys.map(category => {
          return (
            <button
              className={activeTab === category.path ? 'highlight-category' : ''}
              onClick={() => handleClickCategory(category.path)}
              key={`category_${category.title}`}
            >
              {category.title}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default ShopNavbar;
