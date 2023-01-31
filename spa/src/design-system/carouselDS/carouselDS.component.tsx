// @flow
import * as React from 'react';
import { Carousel } from '../../components/carousel/carousel.component';
import { CTA } from '../../components/CTA/cta.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { CarouselCSSSample, CarouselExampleSample, CarouselTSXSample } from './carouselDS-example';
type Props = {};
export const CarouselDS = (props: Props) => {
  return (
    <section id='carousel-ds' className='carousel-ds'>
      <h4 className='heading'>Carousel</h4>
      <p className='paragraph--large'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis alias exercitationem quisquam magni
        excepturi modi, repudiandae porro aliquid id rerum eius accusantium cupiditate voluptates magnam aut. Sit
        exercitationem expedita veniam.
      </p>
      <Carousel width='100%' autoplay={false} />
      <CodeSnippet TSXCode={CarouselTSXSample} CSSCode={CarouselCSSSample} exampleCode={CarouselExampleSample} />
    </section>
  );
};
