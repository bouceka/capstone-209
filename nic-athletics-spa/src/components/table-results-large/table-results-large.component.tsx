import { format } from 'date-fns';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { MOCK_EVENTS, Event } from '../../mock/events-mock';
import { Button } from '../button/button.component';
import './table-results-large.styles.scss';

interface Props {}

export const TableResultsLarge: React.FunctionComponent<Props> = (props) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((response) => response.json())
      .then((events: Event[]) => setEvents(events))
      .catch(() => setEvents(MOCK_EVENTS));
  }, []);

  return (
    <section className='table-results-large'>
      <div className='table-results__header'>
        <div className='table-results__header__buttons'>
          <Button className='header active'>EVENT RESULTS</Button>
          <span className='divider'></span>
          <Button className='header'>FUTURE EVENTS</Button>
        </div>
        <Button className='secondary--small'>Full Schedule</Button>
      </div>
      <div className='table-results__group'>
        {events.map((event, index) =>
          index < 6 ? (
            <div className='table-results-item' key={index}>
              <div className='table-results__event'>
                <div className='table-results__date'>{format(new Date(event.date), 'MMM dd H:mmaaa')}</div>
                <div className='table-results__venue'>{event.venue}</div>
              </div>
              <div className='table-results__teams'>
                <div className='table-results__team home'>{event.homeTeam}</div>
                <div className='table-results__score-group'>
                  <img src={event.guestTeamImg} className='table-results__logo' alt='' />
                  <div className='table-results__score'>
                    <span className='paragraph--large--bold'>{event.result}</span>
                    <span className='caption--medium'>VS</span>
                  </div>
                  <img src={event.guestTeamImg} className='table-results__logo' alt='' />
                </div>
                <div className='table-results__team'>{event.guestTeam}</div>
              </div>
              <div className='table-results__cta'>
                <span>Recap</span>
                <hr />
                <span>Box Score</span>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default TableResultsLarge;
