import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();

export const userInfoState = atom({
  key: 'userInfo',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
