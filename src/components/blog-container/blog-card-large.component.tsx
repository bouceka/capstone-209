// @flow
import * as React from 'react';

import { ReactComponent as IconArrowRight } from '../../assets/icons/arrow-right.svg';
import { BlogPost } from '../../models/blog-post';
import { Button } from '../button/button.component';

type Props = {
  blogPost: BlogPost;
};
export const BlogCardLarge = ({ blogPost }: Props) => {
  return (
    <div className="blog-card-large">
      <img className="blog-card__preview-image" src={blogPost.featuredImage} alt="" />
      <div className="blog-card__text">
        <h5 className="heading">{blogPost.title}</h5>
        <span className="blog-card__category caption--large--bold">{blogPost.category}</span>
        <p className="blog-card__description paragraph--medium">{blogPost.content}</p>
      </div>
      <div className="blog-card__author">
        <div className="blog-card__author__container">
          <img
            className="blog-card__author-image"
            src="/assets/illustrative-img/Avatar.png"
            alt="Marley Dokidis profile"
          />
          <div className="blog-card__author__text">
            <p className="paragraph--large--bold">Marley Dokidis</p>
            <div className="caption--large">English student</div>
            <div className="blog-card__author-date">Sept 25 2022 8min read</div>
          </div>
        </div>
        <Button className="link">
          Learn More <IconArrowRight />
        </Button>
      </div>
    </div>
  );
};
