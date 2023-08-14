import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 className=' text-center text-4xl text-emerald-300'>Main page</h1>
  },
  {
    path: '/react',
    element: <h1 className='text-4xl text-center underline'>React page</h1>
  },
  {
    path: '/hello',
    element: <h1 className='text-4xl text-center border-2 border-black'>Hello page</h1>
  },
  {
    path: '*',
    element: (
      <h1 className='text-4xl text-center cursor-pointer hover:text-violet-400 transition-colors'>
        Page not found
      </h1>
    )
  }
]);
