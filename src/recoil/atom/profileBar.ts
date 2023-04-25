import { AnswerModalInfo } from './../../type/userInfo';
import { atom } from 'recoil';

enum StateType {
  ACTIVE_STATE_MODAL = 'activestatemodal',
  ANSWER_INFO_MODAL = 'answerInfo',
}

export const activeStateModal = atom({
  key: StateType.ACTIVE_STATE_MODAL,
  default: true,
});

export const answerInfoState = atom<AnswerModalInfo>({
  key: StateType.ANSWER_INFO_MODAL,
  default: {
    userName: '',
    imageUrl: '',
    answer: '',
  },
});
