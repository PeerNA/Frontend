import useSWRInfinite from 'swr/infinite';
import { ProblemAnswerInfo } from '../../type/history';

import { peerNaGetFetcher } from '../axios';

const useGetAnswerList = (problemId: number) => {
  const { data, isLoading, error, size, setSize } = useSWRInfinite<ProblemAnswerInfo[]>(
    (idx: number, answerList: ProblemAnswerInfo[]) => {
      if (!idx) return `api/problems/replies?problemId=${problemId}&page=0`;
      if (answerList[0]) return `api/problems/replies?problemId=${problemId}&page=${idx}`;
      return null;
    },
    peerNaGetFetcher,
    {
      errorRetryCount: 1,
    },
  );
  const parseResultList = data?.flat();
  return {
    answerList: parseResultList?.splice(0, 16),
    isLoading,
    isError: error,
    size,
    setSize,
  };
};

export default useGetAnswerList;
