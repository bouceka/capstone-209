// @flow
import * as React from 'react';
import { Button } from '../button/button.component';
import { MOCK_EVENTS } from '../calendar/calendar-mock.data';
import { EventResultsAsideItem } from './event-results-aside-item.component';
type Props = {};
export const EventResultsAside = (props: Props) => {
  return (
    <div className='event-results-aside'>
      <div className='event-results-aside__header'>
        <h6 className='heading'>Schedule</h6>
        <div className='event-results-aside__buttons'>
          <Button className='header--small'>EVENTS</Button>
          <span className='event-results-aside__divider' ></span>
          <Button className='header--small'>RESULTS</Button>
        </div>
      </div>
      <div className='event-results-aside__group'>
        {MOCK_EVENTS.map((event, index) => (
          <EventResultsAsideItem key={index} />
        ))}
      </div>
      <div className='event-results-aside__cta'>
        <Button className='outline'>Full Schedule</Button>
      </div>
    </div>
  );
};
