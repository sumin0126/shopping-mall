// 로그인 요청 시 데이터 타입
export interface ILoginRequest {
  userId: string;
  password: string;
}

// 로그인 성공(응답) 시 데이터 타입
export interface ILoginResponse {
  token: string;
}

// 아이디 찾기 요청 시 데이터 타입
export interface IFindIdRequest {
  userName: string;
  email?: string;
  phoneNumber?: string;
}

// 아이디 찾기 성공(응답) 시 데이터 타입
export interface IFindIdResponse {
  userId: string;
}

// 회원가입 요청 시 데이터 타입
export interface ICreateUserRequest {
  name: string;
  email: string;
  phoneNumber: string;
  postCode?: string;
  address?: string;
  password: string;
  confirmPassword: string;
  userId: string;
}

// 회원가입 성공(응답)) 시 서버에서 반환하는 데이터 타입
export interface ICreateUserResponse {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  userId: string;
  postCode?: string;
  address?: string;
  createdAt?: string;
}

// 유저 정보 조회 시 서버에서 반환하는 데이터 타입
export interface ICheckUserResponse {
  name: string;
  email: string;
  userId: string;
  phoneNumber: string;
  postCode?: string;
  address?: string;
  createdAt: string;
}

// 유저정보수정 요청 시 데이터 타입
export interface IUpdateUserRequest {
  email: string;
  phoneNumber: string;
  address: string;
  postCode: string;
}

// 유저정보수정 요청 시 서버에서 반환하는 데이터 타입
export interface IUpdateUserResponse {
  name: string;
  email: string;
  userId: string;
  phoneNumber: string;
  postCode?: string;
  address?: string;
  createdAt: string;
}
