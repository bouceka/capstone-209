// @flow
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from '../../hooks/window-dimensions';
import { BlogPost, POSTS_DATA } from '../../mock/posts-mock';
import { Button } from '../button/button.component';
import { CarouselButtons } from './carousel-buttons/carousel-buttons.component';
import { CarouselProgressBar } from './carousel-progress-bar/carousel-progress-bar.component';
import './carousel.styles.scss';

type Props = {
  autoplay?: boolean;
  width?: string;
  posts: BlogPost[]
};
export const Carousel = ({ autoplay = true,posts, ...props }: Props) => {
  const [currentItem, setCurrentItem] = useState(0);
  const slideInterval = useRef(0);

  let carouselWidth;

  if (!!props.width) {
    carouselWidth = props.width;
  } else {
    const { width } = useWindowDimensions();
    carouselWidth = width < 1024 ? width.toString() : '115.2rem';
  }

  // useEffect(() => {
  //   fetch('http://localhost:3000/posts')
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts))
  //     .catch(() => setPosts(POSTS_DATA));
  // }, []);

  const size = posts.length - 1;
  const prevItem = () => {
    const index = currentItem > 0 ? currentItem - 1 : size;
    setCurrentItem(index);
  };

  const nextItem = () => {
    const index = currentItem >= size ? 0 : currentItem + 1;
    setCurrentItem(index);
  };

  const startCarousel = () => {
    slideInterval.current = setInterval(() => {
      setCurrentItem((currSlide) => (currSlide < posts.length - 1 ? currSlide + 1 : 0));
    }, 5000);
  };

  const stopCarousel = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    if (autoplay) startCarousel();
    return () => stopCarousel();
  }, []);

  return (
    <div className='carousel-wrapper '>
      <section className='carousel' style={{ width: carouselWidth }}>
        {POSTS_DATA.map((slide, index) => {
          return (
            <div className={`${index === currentItem ? 'slide active wrapper' : 'slide'}`} key={index}>
              <div className='carousel-item'>
                <img src={slide.featuredImage} alt='travel image' className='image' />
                <div className='carousel__content'>
                  <div className='carousel__text'>
                    <p className='carousel__category paragraph--large--bold '>{slide.category}</p>
                    <h5 className='heading carousel__title'>{slide.title}</h5>
                  </div>
                  <div className='carousel__cta'>
                    <Button className='primary'>Learn more</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <CarouselProgressBar currentIndex={currentItem} size={size} />

        <CarouselButtons prevItem={prevItem} nextItem={nextItem} />
      </section>
    </div>
  );
};
