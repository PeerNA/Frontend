import { PostInterestInfo, UserInfoType } from '../../type/userInfo';
import { peerNaClient } from '../axios';

export const getUserInfo = async () => {
  try {
    const { data } = await peerNaClient.get<UserInfoType>(`api/users/info`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postMatchingInterest = async (interestInfo: PostInterestInfo) => {
  try {
    const res = await peerNaClient.post(`/api/users/info`, interestInfo);
    return res;
  } catch (err) {
    return err;
  }
};

export const postLogout = async () => {
  try {
    const { data } = await peerNaClient.post(`logout`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
