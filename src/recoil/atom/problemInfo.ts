import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { PeerMatchInfo, PostReplyInfo, ProblemInfo } from '../../type/problem';

enum StateType {
  PROBLEM_INFO = 'problemInfo',
  ANSWER_INFO_MODAL = 'answerInfo',
  PEER_MATCH_INFO = 'peerMatchIngo',
  REPLY_ANSWER = 'replyAnswer',
}

const { persistAtom } = recoilPersist();

export const problemInfoState = atom<ProblemInfo>({
  key: StateType.PROBLEM_INFO,
  default: {
    problemId: 0,
    question: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const peerMatchInfoState = atom<PeerMatchInfo>({
  key: StateType.PEER_MATCH_INFO,
  default: {
    roomId: 0,
    historyId: 0,
    problem: {
      id: 0,
      category: '',
      question: '',
      answer: '',
    },
    peer: {
      id: 0,
      imageUrl: '',
      name: '',
    },
    isAnswerSubmit: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const replyAnswerInfoState = atom<PostReplyInfo>({
  key: StateType.REPLY_ANSWER,
  default: {
    answer: '',
    problemId: 0,
    historyId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
