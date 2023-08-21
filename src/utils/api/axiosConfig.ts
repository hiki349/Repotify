import axios, { Method } from 'axios';

import type { TRefreshRequestProps,TTokenData } from '../../../@types/api';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: ''
  }
});

const fetchDataToken = async (): Promise<TTokenData> => {
  const data = await axios.post(
    import.meta.env.VITE_API_AUTH_URL,
    new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET
    })
  );
  return data.data;
};

const refreshRequest = async (config: TRefreshRequestProps) => {
  const { method, url, data } = config;
  const res = await api.request({ method: method as Method, url, data });
  return res.data;
};
api.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    if (err.response.status === 400) {
      const res = await fetchDataToken();
      api.defaults.headers.Authorization = `${res.token_type} ${res.access_token}`;
      return refreshRequest(err.config);
    }
  }
);