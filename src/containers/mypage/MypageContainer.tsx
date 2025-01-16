import { useEffect } from 'react';

import { useRouter } from 'next/router';

import Lnb from '@/components/navigator/Lnb';
import { PATHNAME } from '@/constants/pathname';
import OrderHistoryContainer from '@/containers/mypage/parts/OrderHistoryContainer';
import UserInfoContainer from '@/containers/mypage/parts/UserInfoContainer';

/**
 * @description 마이페이지 컨테이너
 */
const MypageContainer = () => {
  const router = useRouter();

  const tab = router.query.tab;

  useEffect(() => {
    if (!tab) {
      router.push({
        pathname: PATHNAME.MYPAGE,
        query: { tab: 'userInfo' },
      });
    }
  }, [tab]);

  return (
    <div className="mypage-container">
      {/* <p className="title">MY PAGE</p> */}
      <Lnb />
      {tab === 'userInfo' && <UserInfoContainer />}
      {tab === 'orderHistory' && <OrderHistoryContainer />}
    </div>
  );
};

export default MypageContainer;
