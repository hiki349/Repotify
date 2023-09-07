import { api } from '@utils/api';

export const getCategoryPlaylist = async () => {
  const category = 'dinner';
  const data = await api.get(`browse/categories/${category}/playlists?limit=5`);

  return data;
};
