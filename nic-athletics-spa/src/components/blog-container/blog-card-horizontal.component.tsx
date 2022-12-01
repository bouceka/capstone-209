// @flow
import * as React from 'react';
import { BlogPost } from '../../models/blog-post';
import { Button } from '../button/button.component';
import { ReactComponent as IconArrowRight } from '../../assets/icons/arrow-right.svg';
type Props = {
  blogPost: BlogPost;
};
export const BlogCardHorizontalComponent = ({ blogPost }: Props) => {
  return (
    <div className='blog-card-horizontal'>
      <img src={blogPost.featuredImage} alt='' />
      <div className='blog-card-horizontal__content'>
        <div className='blog-card-horizontal__text'>
          <h6 className='heading'>{blogPost.title}</h6>
          <span className='blog-card-horizontal__category'>{blogPost.category}</span>
        </div>
        <Button className='link--small'>
          Read More
          <IconArrowRight />
        </Button>
      </div>
    </div>
  );
};
