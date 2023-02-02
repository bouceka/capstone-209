// @flow
import * as React from 'react';
import { LinkButton } from '../../components/link-button/link-button.component';
import SpacingImg from '../../assets/illustrative-img/8px-rule.png';

type Props = {};
export const SpacingDS = (props: Props) => {
  return (
    <section id='spacing-ds' className='spacing-ds'>
      <h4 className='heading'>Spacing</h4>
      <p className='paragraph--medium'>
        Before diving into other components I have clarify the base unit for spacing. The base unit is important to
        know what every measurement will be a multiple of. This easies work between developers and designers. The
        recommended unit for this project will be <span className='paragraph--medium--bold'>8px</span>. The reason is
        that because the most screen resolutions are dividable by 8 and itself it is dividable by 2 and 4.{' '}
        <LinkButton to='https://medium.com/swlh/the-comprehensive-8pt-grid-guide-aa16ff402179'>
          More you can read here.
        </LinkButton>
      </p>
      <p className='paragraph--medium'>
        In addition I will use 4px rules for some elements, icons, and text to align spacing areas and make
        implementation easier.
      </p>
      <img src={SpacingImg} alt='8px rule illustration' />
      <h6 className='heading'>Breakpoints</h6>
      <p className='paragraph--medium'>
        In this project we follow breakpoints rule based on David Gilbertson's article{' '}
        <LinkButton to='https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/'>
          "The 100% correct way to do CSS breakpoints"
        </LinkButton>
        . The break points are:
      </p>
      <ul>
        <li>Phone (0px - 599px)</li>
        <li>Tablet Portrait (600px - 899px)</li>
        <li>Tablet Landscape (900px - 1199px)</li>
        <li>Desktop (1200px - 1799px)</li>
        <li>Large Desktop (1800px and up)</li>
      </ul>
    </section>
  );
};
