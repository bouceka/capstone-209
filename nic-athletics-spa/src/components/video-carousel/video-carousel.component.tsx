// @flow
import * as React from 'react';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import { Button } from '../button/button.component';
import './video-carousel.styles.scss';

type Props = {};
export const VideoCarousel = (props: Props) => {
  return (
    <section className='video-carousel'>
      <div className='row'>
        <div className='video-carousel__header'>
          <h2 className='heading'>Videos</h2>
          <Button className='outline'>All Videos</Button>
        </div>
        <div className='video-carousel__content'>
          <div className='video-thumbnail'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/S8UeFIFitao'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div className='video-thumbnail'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/nR9nwVQwAI4'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='video-carousel__buttons'>
          <button className='video-carousel__button'>
            <ChevronLeft />
          </button>
          <button className='video-carousel__button'>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
