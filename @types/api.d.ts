import axios from 'axios/index';

type TTokenData = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type TRefreshRequestProps = {
  method: keyof typeof axios;
  url: string;
  data?: any;
};
