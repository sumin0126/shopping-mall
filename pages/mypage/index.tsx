import LayoutContainer from '@/containers/layout/LayoutContainer';
import MypageContainer from '@/containers/mypage/MypageContainer';

const index = () => {
  return (
    <LayoutContainer>
      <MypageContainer></MypageContainer>
    </LayoutContainer>
  );
};

export default index;
