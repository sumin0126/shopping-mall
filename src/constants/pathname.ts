export const PATHNAME = {
  MAIN: '/',
  LOGIN: '/login',
  ACCOUNT: '/account',
  SHOWROOM: '/showroom',
  BRANDSTORY: '/brandstory',
  LOOKBOOK: '/lookbook',
  NEWARRIVAL: '/newarrival',
  CLO: '/clo',
  TWIN: '/twin',
  REMOOD: '/remood',
  ALLITEMS: '/allitems',
  PRODUCT_DETAIL: '/productdetail',
} as const;

// baseAxios에서 사용하는 기본 URL
export const BASE_URL = 'http://43.201.96.112/api';
