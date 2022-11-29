// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '../button/button.component';
import { CarouselButtons } from './carousel-buttons/carousel-buttons.component';
import { CarouselItem } from './carousel-item/carousel-item.component';
import { CarouselProgressBar } from './carousel-progress-bar/carousel-progress-bar.component';
import './carousel.styles.scss';
import { CAROUSEL_DATA } from './mock-carousel.data';

type Props = {
};
export const Carousel = (props: Props) => {
  const [currentItem, setCurrentItem] = useState(0);

  const size = CAROUSEL_DATA.length - 1;
  const prevItem = () => {
    const index = currentItem > 0 ? currentItem - 1 : size;
    setCurrentItem(index);
  };
  const nextItem = () => {
    const index = currentItem >= size ? 0 : currentItem + 1;
    setCurrentItem(index);
  };
  useEffect(() => {
    const slideInterval = setTimeout(() => {
      setCurrentItem((currentItem) =>
        currentItem < size - 1 ? currentItem + 1 : 0
      );
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel row">
      {CAROUSEL_DATA.map((slide, index) => {
        return (
          <div
            className={`${
              index === currentItem ? 'slide active wrapper' : 'slide'
            }`}
            key={index}
          >
            <div className="carousel-item">
              <img src={slide.url} alt="travel image" className="image" />
              <div className="carousel__content">
                <div className="carousel__text">
                  <p className="carousel__category paragraph--large--bold ">
                    {slide.category}
                  </p>
                  <h5 className="heading carousel__title">{slide.title}</h5>
                </div>
                <div className="carousel__cta">
                  <Button className="primary">Learn more</Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <CarouselProgressBar currentIndex={currentItem} size={size} />

      <CarouselButtons prevItem={prevItem} nextItem={nextItem} />
    </div>
  );
};
