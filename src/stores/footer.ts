import { atom } from 'recoil';

export const footerShowRoomState = atom<string>({
  key: 'footerShowRoomState',
  default: '',
});
