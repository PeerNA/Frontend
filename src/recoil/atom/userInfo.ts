import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';
import { UserInfoType } from '../../type/userInfo';
import { CAREER_TYPE_LIST, SUBJECT_CATEGORY_LIST } from '../../constants/mainPageInfo';

const { persistAtom } = recoilPersist();

export const userInfoState = atom<UserInfoType>({
  key: 'userInfo',
  default: {
    career: CAREER_TYPE_LIST[0],
    priorityList: {
      priority1: SUBJECT_CATEGORY_LIST[0],
      priority2: SUBJECT_CATEGORY_LIST[0],
      priority3: SUBJECT_CATEGORY_LIST[0],
    },
  },
  effects_UNSTABLE: [persistAtom],
});
