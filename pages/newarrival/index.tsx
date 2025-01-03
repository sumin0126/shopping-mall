import LayoutContainer from '@/containers/layout/LayoutContainer';
import NewArrivalContainer from '@/containers/newArrival/NewArrivalContainer';

const index = () => {
  return (
    <div>
      <LayoutContainer>
        <NewArrivalContainer />
      </LayoutContainer>
    </div>
  );
};

export default index;
