import { peerMatchInfoState } from './../atom/problemInfo';
import { selector } from 'recoil';
import { convertLetterToTime } from '../../lib/utils/problemInfo';

export const calculateTime = selector({
  key: 'timeSelector',
  get: ({ get }) => convertLetterToTime(get(peerMatchInfoState).problem.question.length),
});
