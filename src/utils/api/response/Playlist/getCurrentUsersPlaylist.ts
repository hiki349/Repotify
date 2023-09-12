import { api } from '@utils/api';

export const getCurrentUsersPlaylist = async () => {
  const data = await api.get(`me/playlists`);

  return data;
};
