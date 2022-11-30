// @flow
import * as React from 'react';
import { AwardCard } from './award-card';
type Props = {};
export const AthleteOfMonth = (props: Props) => {
  return (
    <section className='athlete-of-month'>
      <div className='row'>
        <div className='athlete-of-month__group'>
          <AwardCard />
          <p className='display--large'>Athletes of the MONTH</p>
          <AwardCard />
        </div>
      </div>
    </section>
  );
};
