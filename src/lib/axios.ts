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
