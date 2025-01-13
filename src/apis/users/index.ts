import { baseAxios } from '@/utils/axiosInstance';

import type {
  ICheckUserResponse,
  ICreateUserRequest,
  ICreateUserResponse,
  ILoginRequest,
  ILoginResponse,
} from '@/apis/users/type';

/**
 * @description 사용자 관련 API 요청 함수들
 */
export const userApi = {
  // 회원가입 정보를 보내는 함수
  postUserSignup: (params: ICreateUserRequest) => {
    return baseAxios.post<ICreateUserResponse>('/users/signup', params).then(res => res);
  },

  // 로그인 정보를 보내는 함수
  postUsersLogin: (params: ILoginRequest) => {
    return baseAxios.post<ILoginResponse>('/users/login', params).then(res => res.data);
  },

  // 유저 정보를 가져오는 함수
  getUsersMe: () => {
    return baseAxios.get<ICheckUserResponse>('/users/me').then(res => res.data);
  },
};
