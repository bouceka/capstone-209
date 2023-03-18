// @flow
import * as React from 'react';

import { BlogContainer } from '../../components/blog-container/blog-container.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { INSIDE_ATHLETICS_DATA } from '../../components/cards/card-data';
import { Cards } from '../../components/cards/cards.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { EventResultsAside } from '../../components/table-results-aside/event-results-aside.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { TestimonyImage } from '../../components/testimony-image/testimony-image.component';
import { Title } from '../../components/title/title.component';
import { useWindowDimensions } from '../../hooks/window-dimensions';

export const InsideAthletics = () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <div className="page">
      <Header />
      <Breadcrumbs />
      <Title>Inside Athletics</Title>
      <div className="row col-2x1">
        <Cards cardData={INSIDE_ATHLETICS_DATA} />
        {windowWidth <= 1024 ? <TableResultsLarge /> : <EventResultsAside />}
      </div>
      <TestimonyImage />
      <BlogContainer />
      <Footer />
    </div>
  );
};
