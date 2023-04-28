import { GetExampleAnswer } from '../../type/problem';
import { peerNaClient } from '../axios';

export const getExampleAnswer = async (problemId: number) => {
  try {
    const { data } = await peerNaClient.get<GetExampleAnswer>(`api/problem?id=${problemId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
