import { ActiveModalInfo, UserAnswerInfo } from './../../type/userInfo';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

enum StateType {
  ACTIVE_STATE_MODAL = 'activestatemodal',
  ANSWER_INFO_MODAL = 'answerInfo',
}
const { persistAtom } = recoilPersist();

export const modalInfoState = atom<ActiveModalInfo>({
  key: StateType.ACTIVE_STATE_MODAL,
  default: {
    isPeernaModal: false,
    isNotificationModal: false,
    isProfileModal: false,
    isPeerMatchModal: false,
    isProblemExitModal: false,
    isAutoModal: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const answerInfoState = atom<UserAnswerInfo>({
  key: StateType.ANSWER_INFO_MODAL,
  default: {
    userName: '',
    imageUrl: '',
    answer: '',
    score: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
