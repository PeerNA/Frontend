import { PostInterestInfo } from '../../type/userInfo';
import { peerNaClient } from '../axios';

export const getUserInfo = async () => {
  try {
    const res = await peerNaClient.get(`api/users/info`);
    return res;
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
