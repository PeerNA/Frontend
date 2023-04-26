export interface UserInfoType {
  name: string;
  email: string;
  imageUrl: string;
  interest: {
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

export interface PatchInterestInfo {
  priority1?: string;
  priority2?: string;
  priority3?: string;
  career?: string;
}

export interface UserProfileInfo {
  userName: string;
  imageUrl: string;
}

export interface AnswerModalInfo extends UserProfileInfo {
  answer: string;
}
export interface ActiveModalInfo {
  isPeernaModal: boolean;
  isProfileModal: boolean;
}
