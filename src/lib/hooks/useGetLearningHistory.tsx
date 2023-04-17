import { AxiosResponse } from 'axios';
import useSWRInfinite from 'swr/infinite';
import { GetLearningHistoryInfo } from '../../type/history';

import { peerNaGetFetcher } from '../axios';

const getKey = (cursorIdx: number, voteListData: AxiosResponse<GetLearningHistoryInfo>) =>
  cursorIdx === 0 ? `api/history/${cursorIdx}` : voteListData.data ? `api/history/${cursorIdx}` : null;

const useGetLearningHistoryList = () => {
  const { data, isLoading, error, size, setSize } = useSWRInfinite<AxiosResponse<GetLearningHistoryInfo>>(getKey, peerNaGetFetcher, {
    errorRetryCount: 3,
  });

  return {
    historyCardList: {
      result: data ?? [],
    },
    isLoading,
    isError: error,
    size,
    setSize,
  };
};

export default useGetLearningHistoryList;
