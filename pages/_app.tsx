import '../styles/main.scss';
import '../styles/login.scss';
import '../styles/lookbook.scss';
import '../styles/navbar.scss';
import '../styles/brandstory.scss';
import '../styles/showroom.scss';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
