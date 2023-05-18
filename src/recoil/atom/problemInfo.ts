import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { PeerMatchInfo, PostReplyInfo, ProblemInfo, GetPeerMatchAnswerInfo } from '../../type/problem';

enum StateType {
  PROBLEM_INFO = 'problemInfo',
  ANSWER_INFO_MODAL = 'answerInfo',
  PEER_MATCH_INFO = 'peerMatchIngo',
  REPLY_ANSWER = 'replyAnswer',
  TIME_STATUS_BAR = 'timeInfo',
  PEER_MATCH_ANSWER = 'peerMatchAnswerInfo',
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
    isAnswerSubmit: {
      isMyAnswer: false,
      isPeerAnswer: false,
      isTimeRemain: true,
    },
    isExistPeer: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const replyAnswerInfoState = atom<PostReplyInfo>({
  key: StateType.REPLY_ANSWER,
  default: {
    answer: '',
    problemId: 0,
    historyId: 0,
    roomId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const peerMatchAnswerInfoState = atom<GetPeerMatchAnswerInfo>({
  key: StateType.PEER_MATCH_ANSWER,
  default: {
    keyword: [],
    peerId: 0,
    question: '',
    time: '',
    userInfo: [
      {
        userName: '',
        imageUrl: '',
        answer: '',
      },
      {
        userName: '',
        imageUrl: '',
        answer: '',
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
