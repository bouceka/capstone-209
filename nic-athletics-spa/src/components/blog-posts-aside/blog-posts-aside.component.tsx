import { format } from 'date-fns';
import * as React from 'react';
import { CAROUSEL_DATA } from '../carousel/mock-carousel.data';
import './blog-post-aside.styles.scss';
export interface Props {}

export function BlogPostsAside(props: Props) {
  return (
    <aside className='blog-posts-aside'>
      {CAROUSEL_DATA.map(
        (post, index) =>
          index > 2 && (
            <div key={index} className='blog-posts-aside__item'>
              <img src={post.featuredImage} alt='' />
              <div className='blog-posts-aside__text'>
                <h6>{post.title}</h6>
                <div className='blog-posts-aside__overline'>
                  <span className='blog-posts-aside__date'>{format(new Date(), 'MMM dd, yyyy')}</span>
                  <span className='blog-posts-aside__divider'></span>
                  <span className='blog-posts-aside__category'>{post.category}</span>
                </div>
              </div>
            </div>
          )
      )}
    </aside>
  );
}
