// @flow
import * as React from 'react';
import { Input } from '../../components/input/input.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { InputCSSSample, InputExampleSample, InputTSXSample } from './input-sample';
type Props = {};
export const InputDS = (props: Props) => {
  return (
    <section id='input-ds' className='element-ds'>
      <h3 className='heading'>Inputs</h3>
      <p className='paragraph--large'>
        Use NIC Athletics’s custom buttons styles for any typo of component such as forms, cards, CTA and more.{' '}
      </p>
      <div className='element-ds__examples'>
        <Input label='Input label' helpText='Add help text' placeholder='Placeholder' />
      </div>
      <CodeSnippet TSXCode={InputTSXSample} exampleCode={InputExampleSample} CSSCode={InputCSSSample} />
    </section>
  );
};
