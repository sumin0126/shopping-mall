import type { AppProps } from 'next/app';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // SCSS 충돌 방지용
config.autoAddCss = false; // CSS 자동 추가 방지
import { RecoilRoot } from 'recoil';

import '../styles/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
