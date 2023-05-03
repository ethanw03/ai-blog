import React from 'react';

type Props = {};

const Tech = (props: Props) => {
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
      <div>
        <div className='grid-cols-2 grid-rows-3 my-5 sm:grid gap-x-8 gap-y-8'></div>
        <div className='col-span-1 row-span-3 bg-wh-500'></div>
        <div className='col-span-1 row-span-1 bg-wh-500'></div>
        <div className='col-span-1 row-span-1 bg-wh-500'></div>
        <div className='col-span-1 row-span-1 bg-wh-500'></div>
      </div>
    </section>
  );
};

export default Tech;
