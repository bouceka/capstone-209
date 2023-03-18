// @flow
import * as React from 'react';

import { POSTS_DATA } from '../../mock/posts-mock';
import { BlogMediumGroup } from './blog-medium-group.component';

export const BlogContainer = () => {
  return (
    <div className="row">
      <section className="blog-container">
        <BlogMediumGroup blogPosts={POSTS_DATA} />
      </section>
    </div>
  );
};
