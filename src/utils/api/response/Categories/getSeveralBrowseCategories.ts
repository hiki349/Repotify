import { api } from '@utils/api';

export const getSeveralBrowseCategories = async () => {
  const data = await api.get(`browse/categories`);

  return data;
};
