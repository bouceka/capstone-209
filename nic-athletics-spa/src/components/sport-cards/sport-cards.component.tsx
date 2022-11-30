// @flow
import * as React from 'react';
import { SPORT_DATA } from './sport-card-data';
import { SportCardItem } from './sport-card-item';
type Props = {};
export const SportCards = (props: Props) => {
  return (
    <div className='row'>
      <section className='sport-cards'>
        {SPORT_DATA.map((sportType,index) =>( <SportCardItem key={index} {...sportType} />))}
       
      </section>
    </div>
  );
};
