import Box from '@common/Box/Box';
import Header from '@common/Header/Header';
import Sidebar from '@common/Sidebar/Sidebar';

export const MainPage = () => (
  <Sidebar>
    <Box>
      <Header>
        <div className='mb-2'>
          <h1 className='text-3xl font-semibold text-white'>Spotify Playlists</h1>
          {/* <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4'>
          </div> */}
        </div>
      </Header>
    </Box>
  </Sidebar>
);
