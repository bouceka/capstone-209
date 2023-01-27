// @flow
import * as React from 'react';
import './calendar-th-item.styles.scss';
type Props = {
  day: string;
};
export const CalendarThItem = (props: Props) => {
  return (
    <div className='calendar__th'>
      <span className='paragraph--medium--bold'>{props.day}</span>
    </div>
  );
};
