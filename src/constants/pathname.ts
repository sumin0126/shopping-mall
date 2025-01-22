export const PATHNAME = {
  MAIN: '/',
  LOGIN: '/login',
  MYPAGE: '/mypage',
  SIGNUP: '/signup',
  CART: '/cart',
  SHOWROOM: '/showroom',
  BRANDSTORY: '/brandstory',
  LOOKBOOK: '/lookbook',
  NEWARRIVAL: '/newarrival',
  ALLITEMS: '/allitems',
  PRODUCT_DETAIL: '/productdetail',
  PRODUCTS: '/products',
  PAYMENT: '/payment',
  FINDID: './findid',
} as const;

// baseAxios에서 사용하는 기본 URL
export const BASE_URL = 'http://43.201.96.112/api';
