import Box from '@common/Box/Box';
import Card from '@pages/main/Card/Card';
import Header from '@pages/main/Header/Header';
import Sidebar from '@pages/main/Sidebar/Sidebar';

export const MainPage = () => (
  <Sidebar>
    <Header>
      <Box className='mb-2'>
        <h1 className='text-3xl font-semibold text-white'>Spotify Playlists</h1>
        <Box className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8'>
          <Card />
        </Box>
      </Box>
    </Header>
  </Sidebar>
);
