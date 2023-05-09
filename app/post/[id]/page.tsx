import { FormattedPost } from '@/app/types';
import { Post as PostType } from '@prisma/client';
import React from 'react';
import Sidebar from '../../(shared)/Sidebar';
import { prisma } from '@/app/api/client';

type Props = {
  params: { id: string };
};

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className='px-10 leading-7'>
      <div className='gap-10 mb-5 md:flex'>
        <div className='basis-3/4'>
          <Content />
          <div className='hidden md:block'></div>
        </div>
        <div className='basis-1/4'>
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
