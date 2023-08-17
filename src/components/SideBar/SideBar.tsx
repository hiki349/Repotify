import React from 'react';
import style from './SideBar.module.css';

import { Container } from '../Container';
import { SidebarItem } from '../SidebarItem';

import { router } from '@utils/router';
import { useLocation, useNavigate } from 'react-router-dom';

interface SideBarProps {
  children?: React.ReactNode;
}

export const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const params = useLocation();

  const routes = React.useMemo(
    () => [
      {
        label: 'Home',
        active: params.pathname !== '/search',
        href: '/'
      },
      {
        label: 'Search',
        active: params.pathname === '/search',
        href: '/search'
      }
    ],
    [params.pathname]
  );

  return (
    <div className='flex h-full'>
      <div className='hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex'>
        <Container>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Container>
        <Container className={style.library}>Song Library</Container>
      </div>
      <main className='h-full flex-1 overflow-y-auto py-2'>{children}</main>
    </div>
  );
};
