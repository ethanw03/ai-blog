import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className='px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50'>
        Subscribe and Follow
      </h4>
      <div className='mx-5 my-5'>
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className='bg-wh-900'>advert image</div>
      <h4 className='px-5 py-3 text-xs font-bold text-center text-wh-500'>
        About the Blog
      </h4>
      <div className='bg-wh-900'>profile image</div>
      <h4 className='px-5 py-3 font-bold text-center text-wh-500'>
        Ethan Nicholas
      </h4>
      <p className='text-sm text-center text-wh-500'>
        Lorem vitae ut augue auctor faucibus eget eget ut libero.
      </p>
    </section>
  );
};

export default Sidebar;
