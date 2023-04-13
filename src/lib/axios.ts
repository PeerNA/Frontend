import axios from 'axios';

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
  function (response) {
    console.log(response, '인터셉터');
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 401) {
      //token refresh 요청

      // const res = await client.post(
      //   `/auth/token`, // token refresh api
      //   {
      //     accessToken: getAccessToken('accessToken'),
      //   },
      // );
      // if (res.data.status === 400) {
      //   window.location.href = '/login';
      // }

      // const newAccessToken = res.data.data.accessToken;

      // setAccessToken('accessToken', newAccessToken);
      // originalRequest.headers = {
      //   newAccessToken,
      // };
      return axios(originalRequest);
    }
    return error.response;
  },
);
export const peerNaGetFetcher = (url: string) => peerNaClient.get(url).then((res) => res.data);

export { peerNaClient };
