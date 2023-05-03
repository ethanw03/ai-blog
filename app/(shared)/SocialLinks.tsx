import Image from 'next/image';
import React from 'react';
import Twitter from '../../public/assets/social_twitter.png';
import Facebook from '../../public/assets/social_facebook.png';
import Instagram from '../../public/assets/social_instagram.png';
import Google from '../../public/assets/social_google.png';
import Discord from '../../public/assets/social_discord.png';

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className='flex items-center justify-between gap-7'>
      <a
        href='https://twitter.com'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          className={`${isDark ? 'brightness-0' : ''}hover:opacity-50`}
          alt='Twitter'
          src={Twitter}
          width={20}
          height={20}
        />
      </a>
      <a
        href='https://facebook.com'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          className={`${isDark ? 'brightness-0' : ''}hover:opacity-50`}
          alt='Facebook'
          src={Facebook}
          width={20}
          height={20}
        />
      </a>
      <a
        href='https://instagram.com'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          className={`${isDark ? 'brightness-0' : ''}hover:opacity-50`}
          alt='Instagram'
          src={Instagram}
          width={20}
          height={20}
        />
      </a>
      <a
        href='https://google.com'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          className={`${isDark ? 'brightness-0' : ''}hover:opacity-50`}
          alt='Google'
          src={Google}
          width={20}
          height={20}
        />
      </a>
      <a
        href='https://Discord.com'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          className={`${isDark ? 'brightness-0' : ''}hover:opacity-50`}
          alt='Discord'
          src={Discord}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
