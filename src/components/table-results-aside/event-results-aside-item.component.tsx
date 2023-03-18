// @flow
import { format } from 'date-fns';
import * as React from 'react';

import { Event } from '../../mock/events-mock';
type Props = {
  event: Event;
};
export const EventResultsAsideItem = ({ event }: Props) => {
  const [homeScore, guestScore] = event.result.split(':'); // TODO: Change the whole interface of event

  return (
    <div className="event-results-aside__item">
      <div className="event-results-aside__date">{format(new Date(event.date), 'MMM dd | H:mmaaa')}</div>
      <div className="event-results-aside__teams">
        <div className="event-results-aside__team">
          <img src={event.homeTeamImg} alt={event.homeTeam} />
          <span className="caption--large--bold">{event.homeTeam}</span>
          <span className="caption--large--bold event-results-aside__score">{homeScore}</span>
        </div>
        <div className="event-results-aside__team">
          <img src={event.guestTeamImg} alt={event.guestTeam} />
          <span className="caption--large--bold ">{event.guestTeam}</span>
          <span className="caption--large--bold event-results-aside__score">{guestScore}</span>
        </div>
      </div>
    </div>
  );
};
