// @flow
import * as React from 'react';
import { Carousel } from '../../components/carousel/carousel.component';
import { CTA } from '../../components/CTA/cta.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { CarouselCSSSample, CarouselExampleSample, CarouselTSXSample } from './carouselDS-example';
import { POSTS_DATA } from '../../mock/posts-mock';
import { Highlight } from '../highlight/highlight.component';
type Props = {};
export const CarouselDS = (props: Props) => {
  return (
    <section id='carousel-ds' className='carousel-ds'>
      <h4 className='heading'>Carousel</h4>
      <p className='paragraph--medium'>
        Carousel is a more complex component that displays post data. A developer can use it anywhere on the app. It has
        three arguments it can consume. Post data is the only one that is required{' '}
        <Highlight>posts(BlogPosts[])</Highlight>, the next one is <Highlight>autoplay(boolean)</Highlight> that allows to
        change the posts in time intervals. The last one <Highlight>width(string)</Highlight> that allows to stretch the
        carousel as needed.
      </p>
      <Carousel posts={POSTS_DATA} width='100%' autoplay={false} />
      <CodeSnippet TSXCode={CarouselTSXSample} SCSSCode={CarouselCSSSample} exampleCode={CarouselExampleSample} />
    </section>
  );
};
