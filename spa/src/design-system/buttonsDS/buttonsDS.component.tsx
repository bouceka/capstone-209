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
    <section>
      <h2 className='heading'>Buttons</h2>

      <div
        style={{
          marginTop: '10px',
          display: 'grid',
          gap: '10px',
          justifyContent: 'flex-start',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
        }}
      >
        <div style={{ display: 'grid', gap: '10px' }}>
          <Button className='primary'>Button Primary</Button>
          <Button className='primary disabled'>Primary Disabled</Button>
        </div>
        <div style={{ display: 'grid', gap: '10px' }}>
          <Button className='secondary'>Button Secondary</Button>
          <Button className='secondary disabled'>Secondary Disabled</Button>
        </div>
        <div style={{ display: 'grid', gap: '10px' }}>
          <Button className='outline'>Button Outline</Button>
          <Button className='outline disabled'>Outline Disabled</Button>
        </div>
        <div style={{ display: 'grid', gap: '10px' }}>
          <Button className='link'>Button Link</Button>
          <Button className='link disabled'>Link Disabled</Button>
        </div>
      </div>

      <CodeSnippet TSXCode={ButtonTSXSample} exampleCode={ButtonExampleSample} CSSCode={ButtonCSSSample} />
    </section>
  );
};
