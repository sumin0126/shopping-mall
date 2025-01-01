import AllItemsContainer from '@/containers/allitems/AllItemsContainer';
import LayoutContainer from '@/containers/layout/LayoutContainer';

const index = () => {
  return (
    <div>
      <LayoutContainer>
        <AllItemsContainer />
      </LayoutContainer>
    </div>
  );
};

export default index;
