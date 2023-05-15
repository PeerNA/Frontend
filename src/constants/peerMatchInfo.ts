export enum PEER_MATCH_MODAL_TYPE {
  SUBMIT_ANSWER = 0,
  NEXT_QUESTION = 1,
  WAIT_PEER = 2,
}

export const PEER_MATCH_MODAL_INFO = [
  { type: '답안 제출', content: '나의 답안을 제출하시겠습니까?' },
  { type: '다음 문제', content: '다음문제로 넘어가시겠습니까?' },
  { type: '동료 기다리기', content: '동료를 기다리는 중입니다.' },
];
export enum USER_TYPE {
  MY = 0,
  PEER = 1,
}
