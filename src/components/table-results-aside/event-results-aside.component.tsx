// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import { MOCK_EVENTS } from '../../mock/events-mock';
import { Button } from '../button/button.component';
import { EventResultsAsideItem } from './event-results-aside-item.component';

export const EventResultsAside = () => {
  return (
    <div className="event-results-aside">
      <div className="event-results-aside__header">
        <h6 className="heading">Schedule</h6>
        <div className="event-results-aside__buttons">
          <Button className="header--small">EVENTS</Button>
          <span className="event-results-aside__divider"></span>
          <Button className="header--small">RESULTS</Button>
        </div>
      </div>
      <div className="event-results-aside__group">
        {MOCK_EVENTS.map((event, index) => (
          <EventResultsAsideItem event={event} key={index} />
        ))}
      </div>
      <div className="event-results-aside__cta">
        <Link to={'/calendar'} className="btn--outline">
          Full Schedule
        </Link>
      </div>
    </div>
  );
};
