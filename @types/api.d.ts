type TTokenData = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type TRefreshRequestProps = {
  method: keyof typeof import('axios');
  url: string;
  data?: any;
};