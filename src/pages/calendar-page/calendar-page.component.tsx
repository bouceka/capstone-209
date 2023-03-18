// @flow
import './calendar-page.styles.scss';

import * as React from 'react';

import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Calendar } from '../../components/calendar/calendar.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { Title } from '../../components/title/title.component';

export const CalendarPage = () => {
  return (
    <div className="page">
      <Header />
      <Breadcrumbs />
      <Title>Calendar</Title>
      <div style={{ marginTop: '2.4rem', marginBottom: '2.4rem' }}>
        <Calendar />
      </div>
      <Footer />
    </div>
  );
};
