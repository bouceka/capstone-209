// @flow
import * as React from 'react';
import { Button } from '../../components/button/button.component';
import { LinkButton } from '../../components/link-button/link-button.component';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { ButtonCSSSample, ButtonExampleSample, ButtonTSXSample } from './button-sample';

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

type Props = {};
export const ButtonsDS = (props: Props) => {
  return (
    <section className='button-ds'>
      <h2 className='heading'>Buttons</h2>

      <div className='button-ds__examples'  >
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
