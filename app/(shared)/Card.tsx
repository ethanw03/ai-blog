import Link from 'next/link';
import React from 'react';

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLargeCard?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLargeCard = false,
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
    </div>
  );
};
export default Card;
