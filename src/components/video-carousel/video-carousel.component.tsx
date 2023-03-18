// @flow
import './video-carousel.styles.scss';

import * as React from 'react';
import { useEffect } from 'react';

import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import { ReactComponent as PlayArrow } from '../../assets/icons/play-arrow.svg';
import { useWindowDimensions } from '../../hooks/window-dimensions';
import { POSTS_DATA } from '../../mock/posts-mock';
import { Button } from '../button/button.component';

export const VideoCarousel = () => {
  const [currentItem, setCurrentItem] = React.useState(0);
  const { width } = useWindowDimensions();
  const slideInterval = React.useRef(0);

  const displayedCards = width > 1023 ? 2 : 1;

  const size = (POSTS_DATA.length - 1) / displayedCards - 1; // minus one we have to get even number // TODO: Make it functional even for odd number
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
      setCurrentItem((currSlide) => (currSlide < size ? currSlide + 1 : 0));
    }, 5000);
  };

  const stopCarousel = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, []);

  return (
    <section className="video-carousel">
      <div className="row">
        <div className="video-carousel__header">
          <h2 className="heading">Videos</h2>
          <Button className="outline">All Videos</Button>
        </div>
        <div className="video-carousel__content">
          <div className="video-carousel__wrapper" style={{ transform: `translateX(${-currentItem * 100}%)` }}>
            {POSTS_DATA.map((item, index) =>
              index < 4 ? (
                <div key={index} className="video-thumbnail">
                  <img src={item.featuredImage} alt={item.title} />
                  <h6 className="video-carousel__title heading">{item.title}</h6>
                  <span className="video-carousel__play">
                    <PlayArrow />
                  </span>
                  <div className="video-carousel__bear">
                    <img src="/assets/nic-athletics-logo-64x.png" alt="NIC Athletics logo" />
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
        <div className="video-carousel__buttons">
          <button className="video-carousel__button" onClick={() => prevItem()}>
            <ChevronLeft />
          </button>
          <button className="video-carousel__button" onClick={() => nextItem()}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
