import React from 'react';

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
      <div className='flex gap-3 item-center'>
        <div className='px-8 py-2 text-sm font-bold bg-wh-900 text-wh-10'>
          TRENDING
        </div>
        <p className='text-sm'>
          Lorem vitae ut augue auctor faucibus eget eget ut libero.
        </p>
      </div>
      <div className='flex justify-between gap-3 my-3'>
        <div className='basis-1/2 bg-wh-500 h-96'></div>
        <div className='flex flex-col gap-3 basis-1/2 bg-wh-500 h-96'></div>
        <div className=''></div>
      </div>
    </section>
  );
};

export default Trending;
