import { atom } from 'recoil';

import type { IProduct } from '@/apis/products/type';

export const wishProductState = atom<IProduct[]>({
  key: 'wishProductState',
  default: [],
});
