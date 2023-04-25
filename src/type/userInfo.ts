export interface UserInfoType {
  priorityList: {
    priority1: string;
    priority2: string;
    priority3: string;
  };
  career: string;
}
export interface ProblemHistoryInfo {
  id: number;
  question: string;
  category?: string;
}

export interface PostInterestInfo {
  priority1: string;
  priority2: string;
  priority3: string;
  career: string;
}

export interface UserProfileInfo {
  userName: string;
  imageUrl: string;
}

export interface AnswerModalInfo extends UserProfileInfo {
  answer: string;
}
