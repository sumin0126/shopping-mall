// 로그인 요청 시 데이터 타입
export interface ILoginRequest {
  userId: string;
  password: string;
}

// 로그인 성공(응답) 시 데이터 타입
export interface ILoginResponse {
  token: string;
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

// 유저 정보 조회 시 반환하는 데이터 타입
export interface ICheckUserResponse {
  name: string;
  email: string;
  phoneNumber: string;
  postCode?: string;
  address?: string;
  password: string;
  confirmPassword: string;
  userId: string;
}
