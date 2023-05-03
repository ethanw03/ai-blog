import Link from 'next/link';
import React from 'react';

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  return (
    <div className={className}>
      card
      <Link
        className='basis-full hover:opacity-70'
        href='/'
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>image</div>
      </Link>
      <div className='basis-full'>
        <Link href='/'>
          <h4
            className={`font-bold hover:text-accent-green ${
              isSmallCard ? 'text-base' : 'text-lg'
            } ${isSmallCard ? 'line-clamp-2' : ''}
            `}
          >
            title
          </h4>
        </Link>
        <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3`}></div>
        <h5 className='text-xs font-semibold'>author</h5>
        <h6 className='text-xs text-wh-300'>date</h6>
      </div>
      <p
        className={`text-wh-100 ${isLongForm} ? "line-clamp-5" : "line-clamp-3"`}
      >
        snippet
      </p>
    </div>
  );
};
export default Card;
