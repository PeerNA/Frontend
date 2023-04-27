export interface GetLearningHistoryInfo {
  category: string;
  historyId: number;
  problemId: number;
  question: string;
  time: string;
}
export interface GetHistoryDetailInfo {
  answer: string;
}
export interface ProblemAnswerInfo {
  replyId: number;
  userId: number;
  name: string;
  imageUrl: string;
  answer: string;
}
