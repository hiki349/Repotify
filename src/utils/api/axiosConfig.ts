import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `${localStorage.getItem('type')} ${localStorage.getItem('token')}`
  }
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 400) {
      axios
        .post(
          import.meta.env.VITE_API_AUTH_URL,
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: import.meta.env.VITE_CLIENT_ID,
            client_secret: import.meta.env.VITE_CLIENT_SECRET
          })
        )
        .then((res) => {
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('type', res.data.token_type);
        });
      return err.config;
    }
    return err;
  }
);
