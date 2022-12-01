// @flow
import * as React from 'react';
import { CAROUSEL_DATA } from '../carousel/mock-carousel.data';
import { BlogCardHorizontalComponent } from './blog-card-horizontal.component';
import { BlogCardLarge } from './blog-card-large.component';
import { BlogMediumGroup } from './blog-medium-group.component';
type Props = {};
export const BlogContainer = (props: Props) => {
  return (
    <div className='row'>
      <section className='blog-container'>
        {/* {CAROUSEL_DATA.map((post, index) => (
          <BlogCardLarge key={index} blogPost={post} />
          ))}
          <BlogCardHorizontalComponent /> */}

          <BlogMediumGroup blogPosts={CAROUSEL_DATA}/>
      </section>
    </div>
  );
};
