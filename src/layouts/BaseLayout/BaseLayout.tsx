import { Outlet } from 'react-router-dom';

import { Box } from '@common';

import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

export const BaseLayout = () => (
  <Box className='flex flex-row'>
    <Sidebar />
    <Box className='relative'>
      <Header />
      <Outlet />
    </Box>
  </Box>
);
