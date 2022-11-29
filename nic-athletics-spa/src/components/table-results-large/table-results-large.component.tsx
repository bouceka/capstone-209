import { format } from 'date-fns';
import * as React from 'react';
import { Button } from '../button/button.component';
import { MOC_EVENTS } from '../calendar/calendar-mock.data';
import './table-results-large.styles.scss';

const TABLE_MOCk_DATA = {};

interface Props {}

export const TableResultsLarge: React.FunctionComponent<Props> = (props) => {
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
        {MOC_EVENTS.map((event, index) => (
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
        ))}
      </div>
    </section>
  );
};

export default TableResultsLarge;
