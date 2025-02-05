import LayoutContainer from '@/containers/layout/LayoutContainer';
import ProductDetailContainer from '@/containers/productDetail/ProductDetailContainer';

const index = () => {
  return (
    <LayoutContainer>
      <ProductDetailContainer />
    </LayoutContainer>
  );
};

export default index;
