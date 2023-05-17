import { peerNaClient } from '../axios';

export const postChatingImage = async (imageData: FormData) => {
  try {
    const data = await peerNaClient.post(`api/match/upload`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
