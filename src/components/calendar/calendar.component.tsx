// @flow
import './calendar.styles.scss';

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import * as React from 'react';
import { useState } from 'react';

import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { useWindowDimensions } from '../../hooks/window-dimensions';
import { Button } from '../button/button.component';
import { CalendarDayItem } from './calendar-day-item/calendar-day-item.component';
import { CalendarThItem } from './calendar-th-item/calendar-th-item.component';

const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const Calendar = () => {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM yyyy'));
  const { windowWidth } = useWindowDimensions();

  const firstDayCurrentMonth = parse(currentMonth, 'MMMM yyyy', new Date());
  const header = windowWidth < 1024 ? daysShort : daysFull;

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMMM yyyy'));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMMM yyyy'));
  };

  return (
    <div className="row calendar">
      <div className="calendar-head">
        <div className="calendar-header">
          <div className="calendar-header__buttons">
            <button className="calendar__button" onClick={previousMonth}>
              <ChevronLeft aria-label="Previous month" />
            </button>
            <button className="calendar__button" onClick={nextMonth}>
              <ChevronRight aria-label="Next month" />
            </button>
          </div>
          <div className="calendar-header__month ">
            <h2 className="heading">{currentMonth}</h2>
          </div>
          <div className="calendar-header__filter">
            <Button aria-label="Filter" className="outline">
              <FilterIcon />
              Filter
            </Button>
          </div>
        </div>
        <div className="calendar-th-group">
          {header.map((th, index) => (
            <CalendarThItem key={index} day={th} />
          ))}
        </div>
      </div>
      <div className="calendar-body">
        <div className="calendar-body-group">
          {days.map((day, index) => (
            <CalendarDayItem isCurrentMonth={isSameMonth(day, firstDayCurrentMonth)} key={index} date={day} />
          ))}
        </div>
      </div>
    </div>
  );
};
