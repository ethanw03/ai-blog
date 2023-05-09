import Card from '../(shared)/Card';
import { Post } from '@prisma/client';
import React from 'react';

type Props = {
  techPosts: Array<Post>;
};

const Tech = ({ techPosts }: Props) => {
  console.log('techPosts:', techPosts);
  return (
    <section>
      <hr className='border-1 ' />
      {/* Header */}
      <div className='flex items-center gap-3 my-8'>
        <h4 className='px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900'>
          HOT
        </h4>
        <p className='text-2xl font-bold'>Latest News In Technology</p>
      </div>

      <div className='grid-cols-2 grid-rows-3 my-5 sm:grid gap-x-8 gap-y-8'>
        {/* Card Large  */}
        <Card
          className='col-span-1 row-span-3 bg-wh-500'
          imageHeight='h-96'
          isLongForm
          post={techPosts[0]}
        />
        {/* Card Small */}
        <Card
          className='flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0'
          imageHeight='h-48'
          isSmallCard
          post={techPosts[1]}
        />
        <Card
          className='flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0'
          imageHeight='h-48'
          isSmallCard
          post={techPosts[2]}
        />
        <Card
          className='flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0'
          imageHeight='h-48'
          isSmallCard
          post={techPosts[3]}
        />
      </div>
    </section>
  );
};

export default Tech;
