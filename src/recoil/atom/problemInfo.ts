import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { GetHistoryDetailInfo } from '../../type/history';
import { PeerMatchInfo, PostReplyInfo, ProblemInfo } from '../../type/problem';

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
      score: 0,
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

export const peerMatchAnswerInfoState = atom<GetHistoryDetailInfo>({
  key: StateType.PEER_MATCH_ANSWER,
  default: {
    question: '',
    time: '',
    chat: [{ message: '', time: '', writerId: 0 }],
    mine: {
      name: '',
      userId: 0,
      replyId: 0,
      likes: 0,
      imageUrl: '',
      answer: '',
      score: 0,
    },
    peer: {
      name: '',
      userId: 0,
      replyId: 0,
      likes: 0,
      imageUrl: '',
      answer: '',
      score: 0,
    },
    keyword: [''],
  },
  effects_UNSTABLE: [persistAtom],
});
