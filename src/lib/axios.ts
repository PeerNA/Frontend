import { PeerMatchInfo } from './../type/problem';
import axios from 'axios';

const sleep = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const peerNaClient = axios.create({
  baseURL: process.env.REACT_APP_IP,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

peerNaClient.interceptors.request.use((config: any) => {
  const headers = {
    ...config.headers,
  };
  return { ...config, headers };
});

peerNaClient.interceptors.response.use(
  (response) => {
    const {
      config: { baseURL, url },
    } = response;

    if (baseURL && url) {
      const apiUrl = (baseURL + url) as string;

      const polling = async () => {
        let timeCount = 24;
        let pollingRes = await axios.get(`${apiUrl}`, { withCredentials: true });
        while (pollingRes.status === 202 && timeCount) {
          await sleep(5000);
          try {
            pollingRes = await axios.get(`${apiUrl}`, { withCredentials: true });
            timeCount -= 1;
          } catch (err) {
            console.log(err);
          }
        }

        return pollingRes;
      };

      if (response.status === 202) {
        return polling();
      }
    }

    return response;
  },
  async (error) => {
    const { config, response } = error;
    const originalRequest = config;

    if (response) {
      if (response.status === 401) {
        window.location.href = `${process.env.REACT_APP_REDIRECT_URL}`;
        return axios(originalRequest);
      }
    }
    return error.response;
  },
);
export const peerNaGetFetcher = (url: string) => peerNaClient.get(url).then((res) => res.data);

export { peerNaClient };
