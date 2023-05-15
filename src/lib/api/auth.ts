import { PeerMatchInfo } from '../../type/problem';
import { PatchInterestInfo, UserInfoType } from '../../type/userInfo';
import { peerNaClient } from '../axios';

export const getUserInfo = async () => {
  try {
    const { data } = await peerNaClient.get<UserInfoType>(`api/users/info`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const patchMatchingInterest = async (interestInfo: PatchInterestInfo) => {
  try {
    const res = await peerNaClient.patch(`api/users/info`, interestInfo);
    return res;
  } catch (err) {
    return err;
  }
};

export const postLogout = async () => {
  try {
    const data = await peerNaClient.post(`logout`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPeerMatch = async () => {
  try {
    const data = await peerNaClient.get<PeerMatchInfo>('api/match?player=2');
    return data;
  } catch (error) {
    return error;
  }
};
