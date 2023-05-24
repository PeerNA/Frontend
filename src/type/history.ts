import { HashTagInfo } from './problem';
import { UserAnswerInfo } from './userInfo';

export interface GetLearningHistoryInfo {
  category: string;
  historyId: number;
  problemId: number;
  question: string;
  time: string;
}
export interface UserHistoryInfo extends ProblemAnswerInfo {
  likes: number;
}
export interface ChatMessageInfo {
  message: string;
  time: string;
  writerId: number;
}
export interface GetHistoryDetailInfo {
  question: string;
  time: string;
  chat: ChatMessageInfo[];
  mine: UserHistoryInfo;
  peer: UserHistoryInfo;
  keyword: string[];
}
export interface ProblemAnswerInfo {
  replyId: number;
  userId: number;
  name: string;
  imageUrl: string;
  answer: string;
}

export interface GetProblemAnswerInfo {
  replyData: ProblemAnswerInfo[];
  totalCount: number;
}
