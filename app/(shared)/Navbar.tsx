import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
      <nav className='flex items-center justify-between w-full px-10 bg-wh-900 text-wh-10'>
        <div className='hidden sm:block'>social link</div>
        <div className='flex items-center justify-between gap-10'>
          <Link href='/'>Home</Link>
          <Link href='/'>Trending</Link>
          <Link href='/'>About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className='flex justify-between gap-8 mx-10 mt-5 mb-4'>
        <div className='basis-2/3 md:mt-3 '>
          <h1 className='text-3xl font-bold md:text-5xl'>BLOG OF THE FUTURE</h1>
          <p className='mt-3 text-sm'>
            Blog dedicated towards AI and Machine Learning. We are the future.
          </p>
        </div>
        <div className='relative w-auto h-32 basis-full'></div>
      </div>
    </header>
  );
};

export default Navbar;
