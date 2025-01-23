export const PATHNAME = {
  MAIN: '/',
  LOGIN: '/login',
  MYPAGE: '/my-page',
  SIGNUP: '/sign-up',
  CART: '/cart',
  SHOWROOM: '/show-room',
  BRANDSTORY: '/brand-story',
  LOOKBOOK: '/look-book',
  NEWARRIVAL: '/new-arrival',
  ALLITEMS: '/all-items',
  PRODUCT_DETAIL: '/product-detail',
  PRODUCTS: '/products',
  PAYMENT: '/payment',
  FINDID: '/find-id',
  FINDPASSWORD: '/find-password',
} as const;

// baseAxios에서 사용하는 기본 URL
export const BASE_URL = 'http://43.201.96.112/api';
