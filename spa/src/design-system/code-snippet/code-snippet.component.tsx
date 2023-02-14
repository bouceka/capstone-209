// @flow

import * as React from 'react';
import { HighlightedCode } from './highlighted-code.component';
type Props = {
  TSXCode?: string;
  SCSSCode?: string;
  exampleCode?: string;
};
export const CodeSnippet = ({ TSXCode = '', SCSSCode = '', exampleCode = '' }: Props) => {
  return (
    <div className='code-snippet'>
      {TSXCode ? (
        <div className='code-snippet__TSX'>
          <div className='code-snippet__label'>TSX Code</div>
          <div className='code-snippet__content'>
            <HighlightedCode lang='tsx' code={TSXCode} />
          </div>
        </div>
      ) : null}
      {SCSSCode ? (
        <div className='code-snippet__CSS'>
          <div className='code-snippet__label'>SCSS Code</div>
          <div className='code-snippet__content'>
            <HighlightedCode lang='scss' code={SCSSCode} />
          </div>
        </div>
      ) : null}
      {exampleCode ? (
        <div className='code-snippet__example'>
          <div className='code-snippet__label'>Example Usage</div>
          <div className='code-snippet__content'>
            <HighlightedCode lang='tsx' code={exampleCode} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
