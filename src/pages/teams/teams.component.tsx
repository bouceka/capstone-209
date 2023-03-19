// @flow
import * as React from 'react';
import { SuperSEO } from 'react-super-seo';

import { AthleteOfMonth } from '../../components/athlete-of-month/athlete-of-month.component';
import { BlogContainer } from '../../components/blog-container/blog-container.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { SPORT_DATA } from '../../components/cards/card-data';
import { Cards } from '../../components/cards/cards.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { EventResultsAside } from '../../components/table-results-aside/event-results-aside.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { Title } from '../../components/title/title.component';
import { useWindowDimensions } from '../../hooks/window-dimensions';
export const Teams = () => {
  // TODO rename to TeamsPage
  const { windowWidth } = useWindowDimensions();
  return (
    <>
      <SuperSEO
        title="Teams | NIC Athletics"
        description="Explore all our NIC teams. Support your friends or join one of our teams."
        lang="en"
      />
      <div className="page">
        <Header />
        <Breadcrumbs />
        <Title>Teams</Title>
        <div className="row col-2x1">
          <Cards cardData={SPORT_DATA} />
          {windowWidth <= 1024 ? <TableResultsLarge /> : <EventResultsAside />}
        </div>
        <AthleteOfMonth />
        <BlogContainer />
        <Footer />
      </div>
    </>
  );
};
