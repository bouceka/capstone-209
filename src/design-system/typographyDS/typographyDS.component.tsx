// @flow
import * as React from 'react';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { TypoCSSSample, TypoExampleSample, TypoTableData } from './typography-sample';
import { TypographyTable } from './typography-table.component';
import { Highlight } from '../highlight/highlight.component';
import { LinkButton } from '../../components/link-button/link-button.component';
type Props = {};
export const TypographyDS = (props: Props) => {
  return (
    <section id='typography-ds' className='typography-ds'>
      <h4 className='heading'>Typography</h4>
      <p className='paragraph--medium'>
        For this project I will use sans serif typeface{' '}
        <LinkButton to='https://befonts.com/switzer-font-family.html'>Switzer</LinkButton>. It is a neat typeface that
        came from magazine ads of the 80s and 90s.
      </p>
      <p className='paragraph--medium'>
        For all the sizing I use 4px rule for better usability and broader options when to use the text. Most of the
        sizes contains font weights of medium, semibold, and bold. I created two display, six heading, three paragraph,
        and two caption sizes. Displays should be used on a <Highlight>h1</Highlight> tags. Headings and be used on any{' '}
        <Highlight>h#</Highlight> tag. Captions and paragraphs can be used on <Highlight>span</Highlight> and{' '}
        <Highlight>p</Highlight> tags.
      </p>
      <TypographyTable typographyList={TypoTableData} />
      <h6 className='heading'>Usage</h6>
      <p className='paragraph--medium'>
        You can use typography classes in this syntax <Highlight>{`.{type-name}--{size}--{weight}`}</Highlight>, for
        example for Paragraph 1 Bold <Highlight>{`.paragraph--large--bold`}</Highlight>.
      </p>
      <CodeSnippet SCSSCode={TypoCSSSample} exampleCode={TypoExampleSample} />
    </section>
  );
};
