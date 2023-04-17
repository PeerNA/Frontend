import { AxiosResponse } from 'axios';
import { GetHistoryDetailInfo } from '../../type/history';
import { peerNaClient } from '../axios';
import useSWR from 'swr';

const useGetLearningDetail = (historyId: number) => {
  const { data, error } = useSWR<AxiosResponse<GetHistoryDetailInfo>>(`/vote/common/${historyId}`, peerNaClient, {
    // 실패시 재요청 3번
    errorRetryCount: 3,
  });
  return {
    historyDetailInfo: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetLearningDetail;
