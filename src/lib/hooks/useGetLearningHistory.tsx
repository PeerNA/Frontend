import { AxiosResponse } from 'axios';
import useSWRInfinite from 'swr/infinite';
import { GetLearningHistoryInfo } from '../../type/history';

import { peerNaGetFetcher } from '../axios';

const getKey = (cursorIdx: number, historyCardList: GetLearningHistoryInfo[]) =>
  cursorIdx === 0 ? `api/history?page=${cursorIdx}` : historyCardList ? `api/history?page=${cursorIdx}` : null;

const useGetLearningHistoryList = () => {
  const { data, isLoading, error, size, setSize } = useSWRInfinite<GetLearningHistoryInfo[]>(getKey, peerNaGetFetcher, {
    errorRetryCount: 1,
  });
  const parseResultList = data?.flat();
  return {
    historyCardList: parseResultList,
    isLoading,
    isError: error,
    size,
    setSize,
  };
};

export default useGetLearningHistoryList;
