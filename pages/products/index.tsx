import LayoutContainer from '@/containers/layout/LayoutContainer';
import ProductsContainer from '@/containers/products/ProductsContainer';

const index = () => {
  return (
    <LayoutContainer>
      <ProductsContainer />
    </LayoutContainer>
  );
};

export default index;
