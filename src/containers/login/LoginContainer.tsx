import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';

import { userApi } from '@/apis/users';
import { PATHNAME } from '@/constants/pathname';
import { headerOpaqueState } from '@/stores/header';

import type { ILoginRequest } from '@/apis/users/type';

interface IForm extends ILoginRequest {}

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

  // useFrom 훅 초기화
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ mode: 'onSubmit' });

  // 로그인 버튼 클릭 시 실행될 함수
  const handleSubmitForm = (data: ILoginRequest) => {
    // 로그인 버튼 클릭 시 api 호출을 통해 유저 정보를 서버에 전달하여 로그인 요청,
    userApi.postUsersLogin(data).then(res => {
      // 서버로부터 받은 res(응답)에서 token 값과 isLogin 상태를 로컬스토리지에 저장
      localStorage.setItem('token', res.token);
      localStorage.setItem('isLogin', 'true');
      // 로그인 성공 모달 띄우기
      router.push(PATHNAME.MAIN);
    });
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

        <form className="login-box-main" onSubmit={handleSubmit(handleSubmitForm)}>
          {/* 아이디 */}
          <div className="id-box">
            <p>ID</p>
            <input
              {...register('userId', {
                required: '아이디는 필수 입력사항입니다.',
              })}
              type="text"
            />
            {errors.userId && <p className="userId-error-message">{errors.userId.message}</p>}
          </div>

          {/* 비밀번호 */}
          <div className="ps-box">
            <p>PASSWORD</p>
            <input
              {...register('password', {
                required: '비밀번호는 필수 입력사항입니다.',
              })}
              type="password"
            />
            {errors.password && <p className="password-error-message">{errors.password.message}</p>}
          </div>

          {/* 로그인 버튼 */}
          <div className="login-box-bottom">
            <div className="find-box">
              <button className="id" type="button">
                FIND ID
              </button>
              <p> | </p>
              <button className="ps" type="button">
                FIND PASSWORD
              </button>
            </div>
            <button className="login-btn">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
