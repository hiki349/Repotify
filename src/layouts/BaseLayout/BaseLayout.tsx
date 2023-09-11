import {} from 'module';
import { Outlet } from 'react-router-dom';

import { Box } from '@common';

import { Header } from '../Header/Header';
import { Player } from '../Player/Player';
import { Sidebar } from '../Sidebar/Sidebar';

export const BaseLayout = () => (
  <>
    <Box className='flex h-[calc(100%-80px)] flex-row'>
      <Sidebar />
      <Box className='relative'>
        <Header />
        <Outlet />
      </Box>
    </Box>
    <Player />
  </>
);
