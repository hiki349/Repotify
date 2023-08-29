import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@common/Button/Button';

import styles from './Header.module.css';

interface HeaderProps {
  children: ReactNode;
  // className?: string;
}

const Header: FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();

  // const handleLogOut = () => {};
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_stepper}>
          <Button onClick={() => navigate(-1)} className={styles.header_stepper__button}>
            &#60;
            {/* Icon arrow left */}
          </Button>
          <Button onClick={() => navigate(1)} className={styles.header_stepper__button}>
            &#62;
            {/* Icon arrow right */}
          </Button>
        </div>
        <div className={styles.header_mobile}>
          <Button className={styles.header_mobile__button}>
            {/* Icon home */}
            Home
          </Button>
          <Button className={styles.header_mobile__button}>
            {/* Icon search */}
            Search
          </Button>
        </div>
        <div className={styles.header_auth}>
          {/* <div>
            <Button className='bg-white text-black'>Premium</Button>
          </div>
          <div>
            <Button>Sign up</Button>
          </div> */}
          <div>
            <Button onClick={() => {}} className={styles.header_auth__signup}>
              Sign up
            </Button>
          </div>
          <div>
            <Button onClick={() => {}} className={styles.header_auth__login}>
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
