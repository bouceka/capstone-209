// @flow
import * as React from 'react';
import { BlogPost } from '../../../models/blog-post';
import { Button } from '../../button/button.component';
import { CarouselProgressBar } from '../carousel-progress-bar/carousel-progress-bar.component';
import './carousel-item.styles.scss';

interface Props {
  carousel: BlogPost;
  className?: string;
}
export const CarouselItem = ({ carousel, className }: Props) => {
  console.log('asdasd');
  return (
    <div className={`carousel-item slide`}>
      <img src={carousel.url} alt='' />
      <div className='carousel__content'>
        <div className='carousel__text'>
          <p className='carousel__category paragraph--large--bold '>{carousel.category}</p>
          <h5 className='heading carousel__title'>{carousel.title}</h5>
        </div>
        <div className='carousel__cta'>
          <Button className='primary'>Learn more</Button>
        </div>
      </div>
    </div>
  );
};
