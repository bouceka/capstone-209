// @flow
import './calendar-day-item.styles.scss';

import { format, isSameDay, isSameMonth, isToday, parseISO } from 'date-fns';
import * as React from 'react';

import { MOCK_EVENTS } from '../../../mock/events-mock';
import { LinkButton } from '../../link-button/link-button.component';
import { CalendarEvent } from '../calendar-event/calendar-event.component';

type Props = {
  date: Date;
  disabled?: boolean;
  isCurrentMonth: boolean;
};
export const CalendarDayItem = (props: Props) => {
  const renderEvents = () => {
    let countEvent = 0;
    return MOCK_EVENTS.map((event, index) => {
      if (isSameDay(parseISO(event.date), props.date) && countEvent <= 1) {
        countEvent++;
        return <CalendarEvent key={index} event={event} />;
      } else if (isSameDay(parseISO(event.date), props.date) && countEvent > 1) {
        return (
          <LinkButton key={index} className="u-center-text " size="small">
            Show More
          </LinkButton>
        );
      }
    });
  };

  return (
    <div
      className={`calendar-day-item ${isToday(props.date) ? 'today' : ''} ${props.isCurrentMonth ? '' : 'disabled'}`}
    >
      <time className="paragraph--medium--bold" dateTime={format(props.date, 'yyyy-MM-dd')}>
        {format(props.date, 'd')}
      </time>
      {renderEvents()}
    </div>
  );
};
