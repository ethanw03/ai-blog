import Link from 'next/link';
import React from 'react';

type TrendingCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_BASE_URL}/post/${post?.id}`}
      href='/'
    >
      <div className='relative z-0 w-full h-full bg-wh-500'>image</div>
      <div className='absolute top-0 left-0 w-full h-full z-1 bg-gradient-gradual' />
      <div className='absolute bottom-0 left-0 p-3 z-2'>
        <h4 className='inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900'>
          category
        </h4>
        <div className='mt-2 text-wh-100'>post title</div>
      </div>
    </Link>
  );
};

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
        <TrendingCard className='basis-1/2 bg-wh-500 h-96'></TrendingCard>
        <TrendingCard className='flex flex-col gap-3 basis-1/2 h-96'>
          <TrendingCard className='basis-1/2 bg-wh-500'></TrendingCard>
          <TrendingCard className='flex gap-3 basis-1/2'>
            <TrendingCard className='basis-1/2 bg-wh-500'></TrendingCard>
            <TrendingCard className='basis-1/2 bg-wh-500'></TrendingCard>
          </TrendingCard>
        </TrendingCard>
      </div>
    </section>
  );
};

export default Trending;
