import { selector } from 'recoil';
import { userInfoState } from '../atom/userInfo';

export const userCategoryInfo = selector({
  key: 'userInterest',
  get: ({ get }) => get(userInfoState).interest.priority1,
});
export const userIdInfo = selector({
  key: 'userId',
  get: ({ get }) => get(userInfoState).id,
});
