import { AxiosResponse } from 'axios';
import { peerNaClient } from '../axios';
import useSWR from 'swr';
import { GetNotificationInfo } from '../../type/notification';

const useGetPRNotification = () => {
  const { data, error, mutate } = useSWR<AxiosResponse<GetNotificationInfo>>(`api/notifications`, peerNaClient, {
    errorRetryCount: 3,
  });
  return {
    notificationList: data?.data.notificationList,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useGetPRNotification;
