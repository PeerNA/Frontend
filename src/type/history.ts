export interface GetLearningHistoryInfo {
  historyId: number;
  problemId: number;
  question: string;
  category?: string;
  time: string;
}
export interface GetHistoryDetailInfo {
  answer: string;
}
