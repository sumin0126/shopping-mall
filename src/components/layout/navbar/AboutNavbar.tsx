import { useState } from 'react';

import { useRouter } from 'next/router';

interface IAboutNavbarProps {
  isOpenAboutNavBar: boolean;
  closeAboutNavBar: () => void;
}

/**
 * @description 어바웃 네비바 컴포넌트
 *
 * @param isOpenAboutNavBar - 네비바 활성화 상태
 * @param closeAboutNavBar - 네비바 닫아주는 함수
 */
const AboutNavbar = ({ isOpenAboutNavBar, closeAboutNavBar }: IAboutNavbarProps) => {
  const router = useRouter();

  // 현재 경로를 기본값으로 저장
  const [activeTab, setActiveTab] = useState(router.pathname);

  // 네비바에 들어갈 카테고리 목록과 경로
  const navbarCategorys = [
    {
      title: 'BRAND STORY',
      path: '/brandstory',
    },
    {
      title: 'LOOK BOOK',
      path: '/lookbook',
    },
    {
      title: 'SHOW ROOM',
      path: '/showroom',
    },
  ];

  // 카테고리 클릭 시, 카테고리의 경로를 업데이트하고, 해당 카테고리로 페이지 이동 시켜주는 함수
  const handleClickCategory = (categoryPath: string) => {
    setActiveTab(categoryPath);
    router.push(categoryPath);
  };

  return (
    <div className="navbar-container">
      <div className={`navbar-overlay ${isOpenAboutNavBar ? 'show' : ''}`} onClick={closeAboutNavBar} />
      <nav className={`navbar-wrapper ${isOpenAboutNavBar ? 'open' : ''}`}>
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

export default AboutNavbar;
