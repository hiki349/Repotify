import { FC } from 'react';

import styles from './Library.module.css';

interface LibraryProps {}

const Library: FC<LibraryProps> = () => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <div className={styles.Library}>
      <div className='flex items-center justify-between px-5 pt-4'>
        <div className='inline-flex items-center gap-x-2'>
          {/* Icon library */}
          <p className='text-md font-medium text-neutral-400'>Your Library</p>
        </div>
        <button
          onClick={onClick}
          className='cursor-pointer text-neutral-400 transition hover:text-white'
        >
          +
        </button>
      </div>
      <div className='mt-4 flex flex-col gap-y-2 px-3'>List of Songs!</div>
    </div>
  );
};

export default Library;
