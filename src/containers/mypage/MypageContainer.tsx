import { useEffect } from 'react';

import { useRouter } from 'next/router';

import Lnb from '@/components/navigator/Lnb';
import { PATHNAME } from '@/constants/pathname';
import ExchangeContainer from '@/containers/mypage/parts/ExchangeHistoryContainer';
import OrderHistoryContainer from '@/containers/mypage/parts/OrderHistoryContainer';
import UserInfoContainer from '@/containers/mypage/parts/UserInfoContainer';

/**
 * @description 마이페이지 컨테이너
 */
const MypageContainer = () => {
  const router = useRouter();

  // 현재 URL의 tab 가져오기
  const currentTab = router.query.tab;

  // 기본 tab 설정
  useEffect(() => {
    if (!currentTab) {
      router.push({
        pathname: PATHNAME.MYPAGE,
        query: { tab: 'userInfo' },
      });
    }
  }, [currentTab]);

  return (
    <div className="mypage-container">
      {/* 네비바 */}
      <Lnb />

      {currentTab === 'userInfo' && <UserInfoContainer />}
      {currentTab === 'orderHistory' && <OrderHistoryContainer />}
      {currentTab === 'exchangeHistory' && <ExchangeContainer />}
    </div>
  );
};

export default MypageContainer;
