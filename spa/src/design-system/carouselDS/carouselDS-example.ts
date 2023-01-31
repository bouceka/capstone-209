export const CarouselExampleSample = `<Carousel width='100%' autoplay={false} />`;

export const CarouselCSSSample = `.carousel {
    height: 56rem;
    position: relative;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.12));
    border-radius: 0.5rem;
    background-color: $background-color-primary;
    overflow: hidden;
  
    &-item {
      height: 56rem;
      position: relative;
      display: inline-block;
      width: 100%;
  
      & > img {
        position: absolute;
        border-radius: 0.5rem;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  
    &__content {
      position: absolute;
      z-index: 25;
      bottom: 3.2rem;
      left: 0;
      padding-left: 3.2rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
  
      &__cta {
        width: fit-content;
      }
    }
  
    &__text {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
  
    &__category {
      width: fit-content;
      border-bottom: 2px solid $color-primary-600;
    }
  }
  
  .slide {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0;
    transition-duration: 0.5s ease;
  }
  
  @keyframes fadeEffect {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }
  .slide.active {
    z-index: 1;
    opacity: 1;
    animation: fadeEffect 0.5s ease;
    transition-duration: 0.5s;
  }
  
  .wrapper::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    background-image: linear-gradient(
        6deg,
        rgba(255, 255, 255, 0.75) 22.46%,
        rgba(230, 215, 0, 0.3) 35.46%,
        rgba(230, 214, 0, 0) 99.34%
      ),
      linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
  }`;

export const CarouselTSXSample = `import * as React from 'react';
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
};

export const Carousel = ({ autoplay = true, ...props }: Props) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [posts, setPosts] = useState<BlogPost[]>(POSTS_DATA);
  const slideInterval = useRef(0);

  let carouselWidth;

  if (!!props.width) {
    carouselWidth = props.width;
  } else {
    const { width } = useWindowDimensions();
    carouselWidth = width < 1024 ? width.toString() : '115.2rem';
  }

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
            <div className={\`\${index === currentItem ? 'slide active wrapper' : 'slide'}\`} key={index}>
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
};`;
