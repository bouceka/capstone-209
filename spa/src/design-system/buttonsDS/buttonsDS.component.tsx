// @flow
import * as React from 'react';
import { Button } from '../../components/button/button.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { ButtonCSSSample, ButtonExampleSample, ButtonTSXSample } from './button-sample';


type Props = {};
export const ButtonsDS = (props: Props) => {
  return (
    <section id='button-ds' className='element-ds'>
      <h3 className='heading'>Buttons</h3>
      <p className='paragraph--large'>
        Use NIC Athletics’s custom buttons styles for any typo of component such as forms, cards, CTA and more.{' '}
      </p>
      <div className='element-ds__examples buttons'>
        <Button className='primary'>Button Primary</Button>
        <Button className='primary disabled'>Primary Disabled</Button>
        <Button className='secondary'>Button Secondary</Button>
        <Button className='secondary disabled'>Secondary Disabled</Button>
        <Button className='outline'>Button Outline</Button>
        <Button className='outline disabled'>Outline Disabled</Button>
        <Button className='link'>Button Link</Button>
        <Button className='link disabled'>Link Disabled</Button>
      </div>
      <CodeSnippet TSXCode={ButtonTSXSample} exampleCode={ButtonExampleSample} CSSCode={ButtonCSSSample} />
    </section>
  );
};
