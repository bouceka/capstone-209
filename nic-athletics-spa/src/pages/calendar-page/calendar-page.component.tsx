// @flow
import * as React from 'react';
import { Calendar } from '../../components/calendar/calendar.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { Title } from '../../components/title/title.component';
import './calendar-page.styles.scss';

type Props = {};

export const CalendarPage = (props: Props) => {
  return (
    <>
      <Header />
      <Title>Calendar</Title>
      <div style={{ marginTop: '2.4rem', marginBottom: '2.4rem' }}>
        <Calendar />
      </div>
      <Footer />
    </>
  );
};
