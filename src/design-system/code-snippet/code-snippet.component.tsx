// @flow

import * as React from 'react';
import { useState } from 'react';

import { Button } from '../../components/button/button.component';
import { HighlightedCode } from './highlighted-code.component';
type Props = {
  TSXCode?: string;
  SCSSCode?: string;
  exampleCode?: string;
};
export const CodeSnippet = ({ TSXCode = '', SCSSCode = '', exampleCode = '' }: Props) => {
  //TODO: Needs to be refactored
  const [openSnippetTSX, setOpenSnippetTSX] = useState(false);
  const [openSnippetSCSS, setOpenSnippetSCSS] = useState(false);
  const [openSnippetCode, setOpenSnippetCode] = useState(false);
  return (
    <div className="code-snippet">
      {TSXCode ? (
        <div className="code-snippet__TSX">
          <div className="code-snippet__tabs">
            <div className="code-snippet__label">TSX Code</div>
            <Button className="outline code-snippet__label-button" onClick={() => setOpenSnippetTSX(!openSnippetTSX)}>
              Show
            </Button>
          </div>
          <div className={`code-snippet__content ${openSnippetTSX ? 'open' : 'closed'}`}>
            <HighlightedCode lang="tsx" code={TSXCode} />
          </div>
        </div>
      ) : null}
      {SCSSCode ? (
        <div className="code-snippet__CSS">
          <div className="code-snippet__tabs">
            <div className="code-snippet__label">SCSS Code</div>
            <Button className="outline code-snippet__label-button" onClick={() => setOpenSnippetSCSS(!openSnippetSCSS)}>
              Show
            </Button>
          </div>
          <div className={`code-snippet__content ${openSnippetSCSS ? 'open' : 'closed'}`}>
            <HighlightedCode lang="scss" code={SCSSCode} />
          </div>
        </div>
      ) : null}
      {exampleCode ? (
        <div className="code-snippet__example">
          <div className="code-snippet__tabs">
            <div className="code-snippet__label">Example Usage</div>
            <Button className="outline code-snippet__label-button" onClick={() => setOpenSnippetCode(!openSnippetCode)}>
              Show
            </Button>
          </div>
          <div className={`code-snippet__content ${openSnippetCode ? 'open' : 'closed'}`}>
            <HighlightedCode lang="tsx" code={exampleCode} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
