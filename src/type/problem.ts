import { PeerInfo, UserAnswerInfo } from './userInfo';

export interface HashTagInfo {
  keywordList: string[];
}
export interface ProblemInfo {
  problemId: number;
  question: string;
}
export interface GetExampleAnswer {
  answer: string;
}
interface PeerMatchProblem extends GetExampleAnswer {
  id: number;
  category: string;
  question: string;
}
export interface AnswerSubmitInfo {
  isMyAnswer: boolean;
  isPeerAnswer: boolean;
  isTimeRemain: boolean;
}
export interface PeerMatchInfo {
  roomId: number;
  historyId: number;
  problem: PeerMatchProblem;
  peer: PeerInfo;
  isAnswerSubmit: AnswerSubmitInfo;
}
export interface PostReplyInfo {
  answer: string;
  historyId: number;
  problemId: number;
  roomId: number;
}
export interface GetNextPeerMatchProblem {
  roomId: number;
  historyId: number;
  problem: PeerMatchProblem;
}
export interface GetPeerMatchAnswerInfo {
  keyword: string[];
  peerId: number;
  question: string;
  time: string;
  userInfo: UserAnswerInfo[];
}
