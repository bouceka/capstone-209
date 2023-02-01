// @flow
import * as React from 'react';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { TypoCSSSample, TypoExampleSample, TypoTableData } from './typography-sample';
import { TypographyTable } from './typography-table.component';
import { Highlight } from '../highlight/highlight.component';
type Props = {};
export const TypographyDS = (props: Props) => {
  return (
    <section id='typography-ds' className='typography-ds'>
      <h4 className='heading'>Typography</h4>
      <p className='paragraph--large'>
        A set of <Highlight>asdasdasda</Highlight> harmonious typography scale with font weight variations. These text
        style perfectly fit for 4px grid and go well with each other.
      </p>

      <TypographyTable typographyList={TypoTableData} />
      <CodeSnippet CSSCode={TypoCSSSample} exampleCode={TypoExampleSample} />
    </section>
  );
};
