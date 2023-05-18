import axios from 'axios';
import { sleep } from './api/polling';

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
      data,
      config: { baseURL, url, method },
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

      if (response.status === 202 && (url.includes('api/match/status') || url.includes('api/match/next'))) {
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
