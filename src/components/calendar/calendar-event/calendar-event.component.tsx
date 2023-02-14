// @flow
import * as React from 'react';
import { IconSport } from '../../../helper/sport-icons.util';
import { Event } from '../../../mock/events-mock';

type Props = {
  event: Event;
};

export const CalendarEvent = (props: Props) => {
  return (
    <div className='calendar-event'>
      <div className='calendar-event__icon'>
        <IconSport sportType={props.event.sport} />
      </div>
      <div className='calendar-event__text'>
        <span className='calendar-event__team'>{props.event.homeTeam}</span>
        <span className='calendar-event__divider'>vs</span>
        <span className='calendar-event__team'>{props.event.guestTeam}</span>
        <span className='calendar-event__location'>{props.event.venue}</span>
      </div>
    </div>
  );
};
