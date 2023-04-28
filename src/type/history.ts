import { HashTagInfo } from './problem';
import { UserAnswerInfo } from './userInfo';

export interface GetLearningHistoryInfo {
  category: string;
  historyId: number;
  problemId: number;
  question: string;
  time: string;
}
export interface GetHistoryDetailInfo extends HashTagInfo {
  question: string;
  time: string;
  userInfo: UserAnswerInfo[];
}
export interface ProblemAnswerInfo {
  replyId: number;
  userId: number;
  name: string;
  imageUrl: string;
  answer: string;
}
