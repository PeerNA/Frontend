import useSWRInfinite from 'swr/infinite';
import { GetProblemAnswerInfo, ProblemAnswerInfo } from '../../type/history';

import { peerNaGetFetcher } from '../axios';

const useGetAnswerList = (problemId: number) => {
  const { data, isLoading, error, size, setSize } = useSWRInfinite<GetProblemAnswerInfo>(
    (idx: number, answerList: GetProblemAnswerInfo) => {
      if (!idx) return `api/problems/replies?problemId=${problemId}&page=0`;

      if (answerList.replyData[0]) return `api/problems/replies?problemId=${problemId}&page=${idx}`;
      return null;
    },
    peerNaGetFetcher,
    {
      errorRetryCount: 1,
    },
  );
  return {
    problemAnswerInfo: data ? data[size - 1] : { replyData: [], totalCount: 0 },
    isLoading,
    isError: error,
    size,
    setSize,
  };
};

export default useGetAnswerList;
