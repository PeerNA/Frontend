import { peerNaClient } from '../axios';

export const getLoginUserInfo = async () => {
  try {
    const res = await peerNaClient.get(`/oauth2/authorization/github`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
