import React, { FC } from 'react';
import styles from './SongItem.module.css';

interface SongItemProps {}

const SongItem: FC<SongItemProps> = () => (
  <div className={styles.SongItem}>
    <div className='relative h-full w-full overflow-hidden rounded-md'>
      <img src='../../../public/static/images/image-1.jpg' alt='song-1' />
    </div>
    <div className='flex w-full flex-col items-start gap-y-1 pt-4'>
      <p className='w-full truncate font-semibold text-white'>All Out 80s</p>
      <p className='w-full truncate pb-4 text-sm text-neutral-400'>The biggest song</p>
    </div>
    <div className='absolute bottom-24 right-5'>{/* PlayButton */}</div>
  </div>
);

export default SongItem;
