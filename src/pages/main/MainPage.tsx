import Box from '@common/Box/Box';
import Card from '@common/Card/Card';
import Header from '@common/Header/Header';
import Sidebar from '@common/Sidebar/Sidebar';

export const MainPage = () => (
  <Sidebar>
    <Box>
      <Header>
        <div className='mb-2'>
          <h1 className='text-3xl font-semibold text-white'>Spotify Playlists</h1>
          <div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8'>
            <Card />
          </div>
        </div>
      </Header>
    </Box>
  </Sidebar>
);
