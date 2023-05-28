import { SCORE_LEVEL } from '../../constants/mainPageInfo';

export const getUserLevel = (score: number) => {
  if (score <= 999) return SCORE_LEVEL.LEVEL_1;
  else if (score <= 1199) return SCORE_LEVEL.LEVEL_2;
  else if (score <= 1399) return SCORE_LEVEL.LEVEL_3;
  else if (score <= 1799) return SCORE_LEVEL.LEVEL_4;
  else if (score <= 2199) return SCORE_LEVEL.LEVEL_5;
  return SCORE_LEVEL.LEVEL_6;
};
