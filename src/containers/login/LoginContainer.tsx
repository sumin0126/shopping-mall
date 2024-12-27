import Image from 'next/image';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const LoginContainer = () => {
  return (
    <div>
      <Header />

      <div className="login-container">
        <div className="login-img">
          <Image src="/img/login.jpg" alt="loginImg" fill style={{ objectFit: 'cover' }} />
        </div>

        <div className="login-wrapper">
          <div className="login-box-header">
            <p className="title">LOGIN</p>
            <button className="account">CREATE ACCOUNT</button>
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

      <Footer />
    </div>
  );
};

export default LoginContainer;
