import { peerMatchInfoState } from './../atom/problemInfo';
import { selector } from 'recoil';
import { convertLetterToTime } from '../../lib/utils/problemInfo';
import { AnswerSubmitInfo } from '../../type/problem';

export const calculateTime = selector({
  key: 'timeSelector',
  get: ({ get }) => convertLetterToTime(get(peerMatchInfoState).problem.question.length),
});

export const answerSubmitInfo = selector({
  key: 'answerSubmit',
  get: ({ get }) => get(peerMatchInfoState).isAnswerSubmit,

  set: ({ set, get }, newValue) => {
    const peerMatchInfo = get(peerMatchInfoState);

    return set(peerMatchInfoState, { ...peerMatchInfo, isAnswerSubmit: { isTimeRemain: false, isMyAnswer: true, isPeerAnswer: true } });
  },
});

export const roomIdInfo = selector({
  key: 'roomIdSelector',
  get: ({ get }) => get(peerMatchInfoState).roomId,
});
