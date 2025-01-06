import { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';

import { PATHNAME } from '@/constants/pathname';
import { headerOpaqueState } from '@/stores/header';

/**
 * @description 로그인 컨테이너
 */
const LoginContainer = () => {
  const [isOpaque, setIsOpaque] = useRecoilState(headerOpaqueState);
  const router = useRouter();

  // 첫 렌더링 시에 isOpaque의 상태를 업데이트해주는 함수
  useEffect(() => {
    setIsOpaque(false);
  }, []);

  // 클릭 시 회원가입 페이지로 이동하는 함수
  const handleClickAccount = () => {
    router.push(PATHNAME.ACCOUNT);
  };

  return (
    <div className="login-container">
      <div className="login-img">
        <Image src="/img/login.jpg" alt="loginImg" fill style={{ objectFit: 'cover' }} />
      </div>

      <div className="login-wrapper">
        <div className="login-box-header">
          <p className="title">LOGIN</p>
          <button className="account" onClick={handleClickAccount}>
            CREATE ACCOUNT
          </button>
        </div>

        <div className="login-box-main">
          <div className="id-box">
            <p>ID</p>
            <input type="text" />
          </div>
          <div className="ps-box">
            <p>PASSWORD</p>
            <input type="password" />
          </div>
        </div>

        <div className="login-box-bottom">
          <div className="find-box">
            <button className="id">FIND ID</button>
            <p> | </p>
            <button className="ps">FIND PASSWORD</button>
          </div>

          <button className="login-btn">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
