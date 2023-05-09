export const convertLetterToTime = (questionLength: number) => {
  const originTime = questionLength * 1.2;
  if (originTime > 300) return 300;
  if (originTime < 120) return 120;
  return originTime;
};
