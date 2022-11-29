// @flow
import * as React from 'react';
import { ReactComponent as ChevronLeft } from '../../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../../assets/icons/chevron-right.svg';
// import './carousel-buttons.styles.scss';

interface Props {
  nextItem: () => void;
  prevItem: () => void;
}

export const CarouselButtons = ({ prevItem, nextItem }: Props) => {
  return (
    <div className='badge'>
      <button className='badge-button left '>
        <ChevronLeft onClick={prevItem} />
      </button>
      <button className='badge-button right'>
        <ChevronRight onClick={nextItem} />
      </button>
    </div>
  );
};
