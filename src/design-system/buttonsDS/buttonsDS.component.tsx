// @flow
import * as React from 'react';
import { Button } from '../../components/button/button.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { ButtonCSSSample, ButtonExampleSample, ButtonTSXSample } from './button-sample';
import { Highlight } from '../highlight/highlight.component';
import ButtonGrid from '/assets/illustrative-img/button-grid.png';
import { LinkButton } from '../../components/link-button/link-button.component';

type Props = {};
export const ButtonsDS = (props: Props) => {
  return (
    <section id='button-ds' className='buttons-ds'>
      <h4 className='heading'>Buttons</h4>
      <p className='paragraph--medium'>
        Developers can use pre-created buttons styles for any typo of component such as forms, cards, CTA and more. All
        these buttons have typography size <Highlight>.paragraph--medium--bold</Highlight>. The colors are used based on
        color hierarchy (primary and secondary). The spacing around the text is <Highlight>24rem</Highlight>{' '}
        horizontally and <Highlight>10rem</Highlight> vertically. Disabled buttons you can activate by adding{' '}
        <Highlight>disabled</Highlight> class. Disabled buttons are always opacity of 38%{' '}
        <LinkButton to='https://m2.material.io/design/interaction/states.html#disabled'>
          (following Material Design guide)
        </LinkButton>
      </p>
      <img src={ButtonGrid} alt='button grid' />
      <div className='buttons-ds__examples buttons'>
        <Button className='primary'>Primary</Button>
        <Button className='primary disabled'>Disabled</Button>
        <Button className='secondary'>Secondary</Button>
        <Button className='secondary disabled'> Disabled</Button>
        <Button className='outline'>Outline</Button>
        <Button className='outline disabled'>Disabled</Button>
        <Button className='link'>Link</Button>
        <Button className='link disabled'>Disabled</Button>
      </div>
      <h6 className='heading'>Usage</h6>
      <p className='paragraph--medium'>
        A developer can use the buttons as <span className='paragraph--medium--bold'>JSX tag</span> in syntax:{' '}
        <Highlight>{`<Button className='primary'>Button Primary</Button>`}</Highlight>. You can treat the Button tag as
        a regular button when you can pass any attributes that belong to HTML button and use class name to get desired
        button style.
      </p>
      <CodeSnippet TSXCode={ButtonTSXSample} exampleCode={ButtonExampleSample} SCSSCode={ButtonCSSSample} />
    </section>
  );
};
