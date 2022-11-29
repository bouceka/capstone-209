// @flow
import * as React from 'react';
import { Button } from '../button/button.component';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { CalendarDayItem } from './calendar-day-item/calendar-day-item.component';
import { CalendarThItem } from './calendar-th-item/calendar-th-item.component';
import './calendar.styles.scss';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import { useState } from 'react';

const th = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

type Props = {};
export const Calendar = (props: Props) => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMMM yyyy', new Date());

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
  //console.log(days);

  return (
    <div className='row calendar'>
      <div className='calendar-head'>
        <div className='calendar-header'>
          <div className='calendar-header__buttons'>
            <button className='calendar__button' onClick={previousMonth}>
              <ChevronLeft />
            </button>
            <button className='calendar__button' onClick={nextMonth}>
              <ChevronRight />
            </button>
          </div>
          <div className='calendar-header__month '>
            <h2 className='heading'>{currentMonth}</h2>
          </div>
          <div className='calendar-header__filter'>
            <Button className='outline'>
              <FilterIcon />
              Filter
            </Button>
          </div>
        </div>
        <div className='calendar-th-group'>
          {th.map((th, index) => (
            <CalendarThItem key={index} day={th} />
          ))}
        </div>
      </div>
      <div className='calendar-body'>
        <div className='calendar-body-group'>
          {days.map((day, index) => (
            <CalendarDayItem isCurrentMonth={isSameMonth(day, firstDayCurrentMonth)} key={index} date={day} />
          ))}
        </div>
      </div>
    </div>
  );
};
