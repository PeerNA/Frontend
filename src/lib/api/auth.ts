import { peerNaClient } from '../axios';

export const getLoginUserInfo = async () => {
  try {
    const res = await peerNaClient.get(`/oauth2/authorize/github?redirect_uri='${process.env.REACT_APP_IP}callback'`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
