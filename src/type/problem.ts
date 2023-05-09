import { PeerInfo } from './userInfo';

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
export interface PeerMatchInfo {
  roomId: number;
  historyId: number;
  problem: PeerMatchProblem;
  peer: PeerInfo;
  isAnswerSubmit: boolean;
}
export interface PostReplyInfo {
  answer: string;
  historyId: number;
  problemId: number;
}
