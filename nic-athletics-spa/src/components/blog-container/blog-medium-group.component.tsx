// @flow
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { BlogPost } from '../../models/blog-post';
import { POSTS_DATA } from '../carousel/mock-carousel.data';
import { BlogCardHorizontalComponent } from './blog-card-horizontal.component';
import { BlogCardLarge } from './blog-card-large.component';
type Props = {
  blogPosts: BlogPost[];
};
export const BlogMediumGroup = ({ blogPosts }: Props) => {
  const [currentItem, setCurrentItem] = useState(0);
  const slideInterval = useRef(0);

  const size = blogPosts.length - 1;

  const startCarousel = () => {
    slideInterval.current = setInterval(() => {
      setCurrentItem((currSlide) => (currSlide < blogPosts.length - 1 ? currSlide + 1 : 0));
    }, 8000);
  };

  const stopCarousel = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, []);

  const restPosts = blogPosts.filter((_, index) => index !== currentItem);
  console.log(restPosts);

  return (
    <div className='blog-medium-group'>
      <BlogCardLarge blogPost={blogPosts[currentItem]} />
      <aside className='blog-medium-group__aside'>
        {restPosts.map((blogPost, index) => (
          <BlogCardHorizontalComponent blogPost={blogPost} key={index} />
        ))}
      </aside>
    </div>
  );
};
