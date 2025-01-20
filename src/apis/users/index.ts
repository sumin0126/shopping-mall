import axios from 'axios';

import { baseAxios } from '@/utils/axiosInstance';

import type {
  ICheckUserResponse,
  ICreateUserRequest,
  ICreateUserResponse,
  IFindIdRequest,
  IFindIdResponse,
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
  postUsersLogin: async (params: ILoginRequest) => {
    try {
      const res = await baseAxios.post<ILoginResponse>('/users/login', params);
      return res.data;
    } catch (err) {
      // err를 AxiosError 타입으로 단언
      if (axios.isAxiosError(err)) {
        throw new Error(err.response?.data?.message || 'An unexpected error occurred.');
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }
  },

  // 유저 정보를 가져오는 함수
  getUsersMe: () => {
    return baseAxios.get<ICheckUserResponse>('/users/me').then(res => res.data);
  },

  // 아이디를 찾기 위해 유저 정보를 보내는 함수
  postFindId: async (params: IFindIdRequest) => {
    try {
      const res = await baseAxios.post<IFindIdResponse>('/users/find-id', params);
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw new Error(err.response?.data?.message || 'An unexpected error occurred.');
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }
  },
};
