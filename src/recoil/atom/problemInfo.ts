import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ProblemInfo } from '../../type/problem';

enum StateType {
  PROBLEM_INFO = 'problemInfo',
  ANSWER_INFO_MODAL = 'answerInfo',
}

const { persistAtom } = recoilPersist();

export const problemInfoState = atom<ProblemInfo>({
  key: StateType.PROBLEM_INFO,
  default: {
    problemId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
