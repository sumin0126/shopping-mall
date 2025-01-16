import { atom } from 'recoil';

// 상품의 id를 키로, 상품의 수량을 값으로 저장하는 상태
export const wishProductCountState = atom<{ [id: number]: number }>({
  key: 'wishProductCountState',
  default: {},
});
