import { peerNaClient } from '../axios';

export const getLoginUserInfo = async () => {
  try {
    const res = await peerNaClient.get(`/api/login`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
