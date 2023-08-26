import { FC } from 'react';

import styles from './Library.module.css';
import Button from '@common/Button/Button';
import CustomLink from '@common/CustomLink/CustomLink';

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
      <section className='flex flex-col justify-between'>
        <main className='flex flex-1 flex-col gap-6 py-5'>
          <div className='flex flex-col gap-2 rounded-lg bg-neutral-700 px-5 py-4 text-white'>
            <h1 className='font-bold'>Create your first playlist</h1>
            <p className='text-xs'>It`s easy, we`ll help you</p>
            <Button className='mt-3 w-fit bg-white text-black'>Create playlist</Button>
          </div>
          <div className='flex flex-col gap-2 rounded-lg bg-neutral-700 px-5 py-4 text-white'>
            <h1 className='font-bold'>Let`s find some podcasts to follow</h1>
            <p className='text-xs'>We`ll keep you updated on new episodes</p>
            <Button className='mt-3 w-fit bg-white text-black'>Browse podcasts</Button>
          </div>
        </main>
        <footer className='px-3 pt-4'>
          <div className='flex flex-row flex-wrap gap-x-5 gap-y-2 py-6 text-[11px]'>
            <CustomLink href='https://www.spotify.com/ua-en/legal/end-user-agreement/'>
              Legal
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/privacy'>Privacy Center</CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/legal/privacy-policy/'>
              Privacy Policy
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/legal/cookies-policy/'>
              Cookies
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/legal/privacy-policy/#s3'>
              About ads
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/accessibility'>
              Accessability
            </CustomLink>
          </div>
          <Button className='flex w-fit border-neutral-400 px-4 py-1 text-white'>
            {/* <span>icon language</span> */}
            English
          </Button>
        </footer>
      </section>
    </div>
  );
};

export default Library;
