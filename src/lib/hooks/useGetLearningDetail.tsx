import { AxiosResponse } from 'axios';
import { GetHistoryDetailInfo } from '../../type/history';
import { peerNaClient } from '../axios';
import useSWR from 'swr';

const useGetLearningDetail = (historyId: number) => {
  const { data, error } = useSWR<AxiosResponse<GetHistoryDetailInfo>>(`api/detail-history?historyId=${historyId}`, peerNaClient, {
    errorRetryCount: 3,
  });
  return {
    historyDetailInfo: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetLearningDetail;
