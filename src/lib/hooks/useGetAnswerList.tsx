import useSWRInfinite from 'swr/infinite';
import { GetLearningHistoryInfo } from '../../type/history';

import { peerNaGetFetcher } from '../axios';

const useGetAnswerList = (problemId: number) => {
  const { data, isLoading, error, size, setSize } = useSWRInfinite<GetLearningHistoryInfo[]>(
    (idx: number, answerList: GetLearningHistoryInfo[]) => {
      if (!idx) return `api/problems/replies?problemId=${problemId}`;
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
    answerList: parseResultList,
    isLoading,
    isError: error,
    size,
    setSize,
  };
};

export default useGetAnswerList;
