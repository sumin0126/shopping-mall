import { useRouter } from 'next/router';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PATHNAME } from '@/constants/pathname';

interface IShopNavbarProps {
  isOpenShopNavBar: boolean;
  closeShopNavBar: () => void;
}

// 카테고리 정보
const categories = [
  {
    title: 'TWIN',
    categoryCode: 'TWIN_BAG',
  },
  {
    title: 'REMOOD',
    categoryCode: 'REMOOD_BAG',
  },
  {
    title: 'CLO',
    categoryCode: 'CLO_BAG',
  },
  {
    title: 'MINIMAL',
    categoryCode: 'MINIMAL_BAG',
  },
  {
    title: 'ACCESSORY',
    categoryCode: 'ACCESSORY',
  },
];

/**
 * @description shop 네비바 컴포넌트
 *
 * @param isOpenShopNavBar - 네비바 활성화 상태
 * @param closeShopNavBar - 네비바 닫아주는 함수
 */
const ShopNavbar = ({ isOpenShopNavBar, closeShopNavBar }: IShopNavbarProps) => {
  const router = useRouter();

  // 현재 URL의 categoryCode 가져오기
  const currentCategoryCode = router.query.categoryCode;

  // 현재 URL의 pathname 가져오기
  const currentPathname = router.pathname;

  // 카테고리 클릭 시, 해당 카테고리로 이동하는 함수
  const handleClickCategory = (categoryCode: string) => {
    router.push({
      pathname: PATHNAME.PRODUCTS,
      query: { categoryCode },
    });
    closeShopNavBar();
  };

  return (
    <div className="navbar-container">
      <div className={`navbar-overlay ${isOpenShopNavBar ? 'show' : ''}`} onClick={closeShopNavBar} />
      <nav className={`navbar-wrapper ${isOpenShopNavBar ? 'open' : ''}`}>
        {/* 모바일 X 버튼 */}
        <button className="close-icon" onClick={closeShopNavBar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <p>SHOP</p>
        <button
          onClick={() => {
            router.push(PATHNAME.NEWARRIVAL);
          }}
          className={currentPathname === '/newarrival' ? 'highlight-category' : ''}
        >
          NEW ARRIVAL
        </button>

        <button
          onClick={() => {
            router.push(PATHNAME.ALLITEMS);
          }}
          className={currentPathname === '/allitems' ? 'highlight-category' : ''}
        >
          ALL ITEMS
        </button>

        {categories.map(category => (
          <button
            key={category.title}
            onClick={() => handleClickCategory(category.categoryCode)}
            className={currentCategoryCode === category.categoryCode ? 'highlight-category' : ''}
          >
            {category.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ShopNavbar;
