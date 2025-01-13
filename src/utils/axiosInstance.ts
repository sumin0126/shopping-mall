import axios from 'axios';

import { BASE_URL } from '@/constants/pathname';

// axios.create 사용하여 axios 인스턴스 생성
export const baseAxios = axios.create({
  baseURL: BASE_URL, // api 요청의 기본 URL
  timeout: 10 * 1000, // api 요청 제한 시간 (현재는 10초)
});

// request 인터셉터
// api 요청이 서버로 전송되기 전에 실행되는 로직
baseAxios.interceptors.request.use(function (config) {
  const isLogin = localStorage.getItem('isLogin');

  // localstorage에서 로그인 상태 확인
  // false라면 기본 설정을 그대로 반환
  if (isLogin !== 'true') {
    return config;
  }

  const token = localStorage.getItem('token');

  // 로그인 상태라면, localstorage에서 토큰을 가져옴
  // 토큰이 없다면, 기본 설정 반환
  if (!token) {
    return config;
  }

  // Authorization header 추가
  // 로그인 상태이고, 토큰이 존재한다면, 요청 헤더에 Bearer ${token} 추가
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// response 인터셉터
// 서버로부터 응답을 받은 후에 실행되는 로직
baseAxios.interceptors.response.use(
  // 요청에 대한 결과가 성공이라면 그대로 반환
  res => res,

  // 요청에 대한 결과가 실패라면 에러로 처리
  error => {
    return Promise.reject(error);
  },
);
