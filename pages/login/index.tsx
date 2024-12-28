import LayoutContainer from '@/containers/layout/LayoutContainer';
import LoginContainer from '@/containers/login/LoginContainer';

const index = () => {
  return (
    <LayoutContainer>
      <LoginContainer />
    </LayoutContainer>
  );
};

export default index;
