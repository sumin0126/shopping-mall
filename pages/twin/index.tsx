import LayoutContainer from '@/containers/layout/LayoutContainer';
import TwinContainer from '@/containers/twin/TwinContainer';

const index = () => {
  return (
    <div>
      <LayoutContainer>
        <TwinContainer />
      </LayoutContainer>
    </div>
  );
};

export default index;
