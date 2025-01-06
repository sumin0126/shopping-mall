import AccountContainer from '@/containers/account/AccountContainer';
import LayoutContainer from '@/containers/layout/LayoutContainer';

const index = () => {
  return (
    <LayoutContainer>
      <AccountContainer />
    </LayoutContainer>
  );
};

export default index;
