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
import { useWindowDimensions } from '../../hooks/window-dimensions';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
type Props = {};
export const Teams = (props: Props) => {
  // TODO rename to TeamsPage
  const { windowWidth } = useWindowDimensions();
  return (
    <div className='page'>
      <Title>Teams</Title>
      <div className='row col-2x1'>
        <Cards cardData={SPORT_DATA} />
        {windowWidth <= 1024 ? <TableResultsLarge /> : <EventResultsAside />}
      </div>
      <AthleteOfMonth />
      <BlogContainer />
    </div>
  );
};
