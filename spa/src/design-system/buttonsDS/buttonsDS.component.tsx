// @flow
import * as React from 'react';
import { Button } from '../../components/button/button.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { ButtonCSSSample, ButtonExampleSample, ButtonTSXSample } from './button-sample';
import { Highlight } from '../highlight/highlight.component';
import ButtonGrid from '../../assets/illustrative-img/button-grid.png';

type Props = {};
export const ButtonsDS = (props: Props) => {
  return (
    <section id='button-ds' className='buttons-ds'>
      <h4 className='heading'>Buttons</h4>
      <p className='paragraph--medium'>
        Developers can use pre-created buttons styles for any typo of component such as forms, cards, CTA and more. All
        these buttons have typography size <Highlight>.paragraph--medium--bold</Highlight>. The colors are used based on
        color hierarchy (primary and secondary). The spacing around the text is <Highlight>24px</Highlight> horizontally
        and <Highlight>10px</Highlight> vertically. 
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
      <CodeSnippet TSXCode={ButtonTSXSample} exampleCode={ButtonExampleSample} CSSCode={ButtonCSSSample} />
    </section>
  );
};
