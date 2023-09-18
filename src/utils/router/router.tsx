import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout } from '@layouts';
import { MainPage, SearchPage } from '@pages';
import { getCategoryPlaylist, getSeveralBrowseCategories } from '@utils/api';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        loader: getCategoryPlaylist
      }
    ]
  },
  {
    path: '/search',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
        loader: getSeveralBrowseCategories
      }
    ]
  },
  {
    path: '/react',
    element: <h1 className='text-center text-4xl underline'>React page</h1>
  },
  {
    path: '/hello',
    element: <h1 className='border-2 border-black text-center text-4xl'>Hello page</h1>
  },
  {
    path: '*',
    element: (
      <h1 className='cursor-pointer text-center text-4xl transition-colors hover:text-violet-400'>
        Page not found
      </h1>
    )
  }
]);
