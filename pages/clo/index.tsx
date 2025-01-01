import CloContainer from '@/containers/clo/CloContainer';
import LayoutContainer from '@/containers/layout/LayoutContainer';

const index = () => {
  return (
    <div>
      <LayoutContainer>
        <CloContainer />
      </LayoutContainer>
    </div>
  );
};

export default index;
