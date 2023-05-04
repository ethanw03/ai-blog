import Image from 'next/image';
import Trending from './(home)/Trending';
import Tech from './(home)/Tech';
import Travel from './(home)/Travel';
import Other from './(shared)/Other';
import Subscribe from './(shared)/Subscribe';
import Sidebar from './(shared)/Sidebar';
import { prisma } from './api/client';
import { Post } from '@prisma/client';

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

export default async function Home() {
  const posts = await getPosts();
  console.log('posts:', posts);

  const formatPost = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      } else if (post?.category === 'tech') {
        techPosts.push(post);
      } else if (post?.category === 'travel') {
        travelPosts.push(post);
      } else if (post?.category === 'other') {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPost();

  return (
    <main className='px-10 leading-7'>
      <Trending trendingPosts={trendingPosts} />
      <div className='gap-10 mb-5 md:flex'>
        <div className='basis-3/4'>
          <Tech />
          <Travel />
          <Other />
          <div className='hidden md:block'>
            <Subscribe />
          </div>
        </div>
        <div className='basis-1/4'>
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
