import { GetExampleAnswer, PostReplyInfo } from '../../type/problem';
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
    await peerNaClient.post('apl/reply/new', replyAnswerData);
  } catch (error) {
    console.log(error);
  }
};
