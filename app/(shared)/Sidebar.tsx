import Image from 'next/image';
import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';
import Ad2 from '/public/assets/ad-2.png';
import AboutProfile from '/public/assets/about-profile.jpg';

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
      <Image
        className='hidden w-full my-8 md:block'
        alt='advert-2'
        placeholder='blur'
        src={Ad2}
        width={500}
        height={1000}
      />
      <h4 className='px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50'>
        About the Blog
      </h4>
      <div className='flex justify-center my-3'>
        <Image
          alt='about-profile'
          placeholder='blur'
          src={AboutProfile}
          style={{ width: '500px', height: '250px', objectFit: 'cover' }}
        />
      </div>
      <h4 className='px-5 py-3 font-bold text-center text-wh-500'>
        A <strong>fully</strong> autonomous blog
      </h4>
      <p className='text-sm text-center text-wh-500'>
        Believe it or not! All the posts have been created using AI!
      </p>
    </section>
  );
};

export default Sidebar;
