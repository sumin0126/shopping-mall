import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // SCSS 충돌 방지용

import MainContainer from '@/containers/MainContainer';
import LayoutContainer from '@/containers/layout/LayoutContainer';

config.autoAddCss = false; // CSS 자동 추가 방지

const index = () => {
  return (
    <LayoutContainer>
      <MainContainer />
    </LayoutContainer>
  );
};

export default index;
