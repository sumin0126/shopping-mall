import CartContainer from '@/containers/cart/CartContainer';
import LayoutContainer from '@/containers/layout/LayoutContainer';

const index = () => {
  return (
    <LayoutContainer>
      <CartContainer />
    </LayoutContainer>
  );
};

export default index;
