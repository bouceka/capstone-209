import './blog-post-aside.styles.scss';

import { format } from 'date-fns';
import * as React from 'react';

import { POSTS_DATA } from '../../mock/posts-mock';

export function BlogPostsAside() {
  return (
    <aside className="blog-posts-aside">
      {POSTS_DATA.map(
        (post, index) =>
          index > 2 && (
            <div key={index} className="blog-posts-aside__item">
              <img src={post.featuredImage} alt="" />
              <div className="blog-posts-aside__text">
                <h6>{post.title}</h6>
                <div className="blog-posts-aside__overline">
                  <span className="blog-posts-aside__date">{format(new Date(), 'MMM dd, yyyy')}</span>
                  <span className="blog-posts-aside__divider"></span>
                  <span className="blog-posts-aside__category">{post.category}</span>
                </div>
              </div>
            </div>
          ),
      )}
    </aside>
  );
}
