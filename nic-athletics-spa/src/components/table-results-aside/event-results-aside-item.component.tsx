// @flow
import * as React from 'react';
type Props = {};
export const EventResultsAsideItem = (props: Props) => {
  return (
    <div className='event-results-aside__item'>
      <div className='event-results-aside__date'>APR 21 | 5:00pm</div>
      <div className='event-results-aside__teams'>
        <div className='event-results-aside__team'>
          <img src={'/src/assets/nic-athletics-logo-64x.png'} alt='' />
          <span className='caption--large--bold'>Bears Basketball</span>
          <span className='caption--large--bold'>102</span>
        </div>
        <div className='event-results-aside__team'>
          <img src={'/src/assets/nic-athletics-logo-64x.png'} alt='' />
          <span className='caption--large--bold'>Bears Basketball</span>
          <span className='caption--large--bold'>89</span>
        </div>
      </div>
      
    </div>
  );
};
