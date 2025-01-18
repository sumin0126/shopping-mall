import { useRouter } from 'next/router';

import { PATHNAME } from '@/constants/pathname';

/**
 * @description 마이페이지 - 왼쪽 네비바 컴포넌트
 */
const Lnb = () => {
  const router = useRouter();

  // 현재 URL의 tab 가져오기
  const currentTab = router.query.tab;

  // 카테고리 클릭 시, 해당 카테고리로 이동하는 함수
  const handleClickTab = (tab: string) => {
    router.push({
      pathname: PATHNAME.MYPAGE,
      query: { tab },
    });
  };

  return (
    <div className="mypage-navbar-container">
      <p onClick={() => handleClickTab('userInfo')} className={currentTab === 'userInfo' ? 'active' : ''}>
        회원 정보
      </p>
      <p onClick={() => handleClickTab('orderHistory')} className={currentTab === 'orderHistory' ? 'active' : ''}>
        주문/배송 내역
      </p>
      <p onClick={() => handleClickTab('exchangeHistory')} className={currentTab === 'exchangeHistory' ? 'active' : ''}>
        교환/반품 내역
      </p>
    </div>
  );
};

export default Lnb;
