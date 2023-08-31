import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

export const BaseLayout = () => (
  <>
    <Sidebar />
    <Header />
    <Outlet />
  </>
);
