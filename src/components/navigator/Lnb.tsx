import { useRouter } from 'next/router';

import { PATHNAME } from '@/constants/pathname';

const Lnb = () => {
  const router = useRouter();

  const handleClickTab = (tab: string) => {
    router.push({
      pathname: PATHNAME.MYPAGE,
      query: { tab },
    });
  };

  return (
    <div>
      <p onClick={() => handleClickTab('userInfo')}>회원 정보</p>
      <p onClick={() => handleClickTab('orderHistory')}>주문 내역</p>
    </div>
  );
};

export default Lnb;
