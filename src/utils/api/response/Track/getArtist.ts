import { api } from '@utils/api';

export const getTrack = async () => {
  const data = await api.get('tracks/11dFghVXANMlKmJXsNCbNl');

  return data;
};
