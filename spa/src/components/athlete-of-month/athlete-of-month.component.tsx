// @flow
import * as React from 'react';
import { ATHLETE_OF_MONTH_MOCK } from '../../mock/athlete-of-month-mock';
import { AwardCard } from './award-card';
type Props = {};
export const AthleteOfMonth = (props: Props) => {
  return (
    <section className='athlete-of-month'>
      <div className='row'>
        <div className='athlete-of-month__group'>
          <AwardCard athleteOfMonth={ATHLETE_OF_MONTH_MOCK[0]} />
          <p className='display--large'>Athletes of the MONTH</p>
          <AwardCard athleteOfMonth={ATHLETE_OF_MONTH_MOCK[1]} />
        </div>
      </div>
    </section>
  );
};
