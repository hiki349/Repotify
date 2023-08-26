import React, { Children, FC, ReactNode } from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '@common/Button/Button';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {};
  return (
    <div className='h-fit p-1'>
      <div className='mb-4 flex w-full items-center justify-between'>
        <div className='hidden items-center gap-x-2 md:flex'>
          <button
            onClick={() => navigate(-1)}
            className='flex h-5 w-5 items-center justify-center rounded-full bg-black p-4 text-white transition hover:opacity-75'
          >
            &#60;
            {/* Icon arrow left */}
          </button>
          <button
            onClick={() => navigate(1)}
            className='flex h-5 w-5 items-center justify-center rounded-full bg-black p-4 text-white transition hover:opacity-75'
          >
            &#62;
            {/* Icon arrow right */}
          </button>
        </div>
        <div className='flex items-center gap-x-2 md:hidden'>
          <button className='flex items-center justify-center  rounded-full bg-white p-2 transition hover:opacity-75'>
            {/* Icon home */}
            Home
          </button>
          <button className='flex items-center justify-center  rounded-full bg-white p-2 transition hover:opacity-75'>
            {/* Icon search */}
            Search
          </button>
        </div>
        <div className='flex items-center justify-between gap-x-4'>
          {/* <div>
            <Button className='bg-white text-black'>Premium</Button>
          </div>
          <div>
            <Button>Sign up</Button>
          </div> */}
          <div>
            <Button
              onClick={() => {}}
              className='bg-transparent font-medium text-neutral-300 hover:text-white'
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button onClick={() => {}} className='bg-white font-medium text-black'>
              Sign in
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
