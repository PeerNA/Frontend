import { GetExampleAnswer, GetPeerMatchAnswerInfo, PostReplyInfo } from '../../type/problem';
import { peerNaClient } from '../axios';

export const getExampleAnswer = async (problemId: number) => {
  try {
    const { data } = await peerNaClient.get<GetExampleAnswer>(`api/problems?id=${problemId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const postReplyAnswerData = async (replyAnswerData: PostReplyInfo) => {
  try {
    const data = await peerNaClient.post('api/reply/new', replyAnswerData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getNextPeerMatch = async (roomId: number, peerId: number) => {
  try {
    const { data } = await peerNaClient.get<GetPeerMatchAnswerInfo>(`api/match/next?roomId=${roomId}&peerId=${peerId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPeerReplySubmit = async (roomId: number) => {
  try {
    const { data } = await peerNaClient.get<GetPeerMatchAnswerInfo>(`api/match/status?roomId=${roomId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePeerRoom = async (roomId: number) => {
  try {
    const { data } = await peerNaClient.delete(`/api/room?roomId=${roomId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
