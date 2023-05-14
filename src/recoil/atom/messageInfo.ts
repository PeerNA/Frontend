import { MessageInfo } from '../../type/message';
import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();

export const messageInfoState = atom<MessageInfo[]>({
  key: 'messageInfoList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
