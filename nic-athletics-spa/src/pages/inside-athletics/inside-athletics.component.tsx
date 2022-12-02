// @flow
import * as React from 'react';
import { BlogContainer } from '../../components/blog-container/blog-container.component';
import { INSIDE_ATHLETICS_DATA } from '../../components/cards/card-data';
import { Cards } from '../../components/cards/cards.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { EventResultsAside } from '../../components/table-results-aside/event-results-aside.component';
import { TestimonyImage } from '../../components/testimony-image/testimony-image.component';
import { Title } from '../../components/title/title.component';
type Props = {};
export const InsideAthletics = (props: Props) => {
  return (
    <div className='page'>
      <Title>Inside Athletics</Title>
      <div className='row' style={{ display: 'flex', gap: '2.4rem' }}>
        <Cards cardData={INSIDE_ATHLETICS_DATA} />
        <EventResultsAside />
      </div>
      <TestimonyImage />
      <BlogContainer />
    </div>
  );
};
