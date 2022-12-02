// @flow
import * as React from 'react';
import { AthleteOfMonth } from '../../components/athlete-of-month/athlete-of-month.component';
import { BlogContainer } from '../../components/blog-container/blog-container.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { Cards } from '../../components/cards/cards.component';
import { EventResultsAside } from '../../components/table-results-aside/event-results-aside.component';
import { Title } from '../../components/title/title.component';
import { SPORT_DATA } from '../../components/cards/card-data';
type Props = {};
export const Teams = (props: Props) => { // TODO rename to TeamsPage
  return (
    <div className='page'>
      <Title>Teams</Title>
      <div className='row' style={{ display: 'flex', gap: '2.4rem' }}>
        <Cards cardData={SPORT_DATA} />
        <EventResultsAside />
      </div>
      <AthleteOfMonth />
      <BlogContainer />
    </div>
  );
};
