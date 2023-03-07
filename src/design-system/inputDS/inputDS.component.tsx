// @flow
import * as React from 'react';
import { Input } from '../../components/input/input.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { InputCSSSample, InputExampleSample, InputTSXSample } from './input-sample';
import { Highlight } from '../highlight/highlight.component';
import inputGrid from '/assets/illustrative-img/input-grid.png';
import { LinkButton } from '../../components/link-button/link-button.component';
import { Button } from '../../components/button/button.component';
type Props = {};
export const InputDS = (props: Props) => {
  return (
    <section id='input-ds' className='input-ds'>
      <h4 className='heading'>Inputs</h4>
      <p className='paragraph--medium'>
        Inputs can be used for any types of form. Every input has label, help text, and the field. If the field type is
        not specified, it default sets type <Highlight>text</Highlight>. Inserting help text and label text is optional,
        however, it is highly recommended to use <Highlight>label</Highlight>. The input field is high{' '}
        <Highlight>40rem</Highlight>
        {', '}
        <LinkButton to='https://uxplanet.org/designing-perfect-text-field-clarity-accessibility-and-user-effort-d03c1e26004b'>
          based on recommended height between 32px and 40px.
        </LinkButton>
      </p>
      <div className='input-ds__examples'>
        <img src={inputGrid} alt='input grid' />
        <Input label='Input label' helpText='Add help text' placeholder='Placeholder' />
      </div>

      <h6 className='heading'>Example</h6>
      <section className='contact-page'>
        <div className='contact-page__wrapper'>
          <h2 className='heading u-center-text'>NIC Athletics - Registration</h2>
          <p className='paragraph--medium u-center-text'>Sign up for the fall season 2022</p>
          <form action=''>
            <div className='form-group'>
              <Input label='First Name' name='firstName' placeholder='John' />
              <Input label='Last Name' name='lastName' placeholder='Doe' />
            </div>
            <div className='form-group'>
              <Input label='North Island College Email' name='email' placeholder='john.doe@example.com' />
            </div>
            <div className='form-group'>
              <Input label='Password' type='password' name='password' placeholder='Password' />
            </div>
            <div className='form-group'>
              <Input label='School Number' name='schoolNumber' placeholder='n0123456' />
            </div>
            <div className='form-group'>
              <Input label='Sport Type' name='email' placeholder='Basketball, Volleyball' />
            </div>
            <p className='caption--medium'>
              This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <Button className='primary'>Submit</Button>
          </form>
        </div>
      </section>
      <h6 className='heading'>Usage</h6>
      <p className='paragraph--medium'>
        A developer can use an input as <span className='paragraph--medium--bold'>JSX tag</span> in syntax:{' '}
        <Highlight>{`<Input label='Input label' type='text' placeholder='Placeholder' />`}</Highlight>. You can treat
        the input tag as a regular button when you can pass any attributes that belong to HTML input.
      </p>
      <CodeSnippet TSXCode={InputTSXSample} exampleCode={InputExampleSample} SCSSCode={InputCSSSample} />
    </section>
  );
};
