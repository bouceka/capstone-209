// @flow
import * as React from 'react';
import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark'

type Props = {
  code: string;
  lang: Language;
};

export const HighlightedCode = ({ code, lang }: Props) => {
  return (
    <Highlight {...defaultProps} theme={vsDark} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{whiteSpace:'break-spaces',...style}}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span className='line-no'>{i + 1}</span>
              <span style={{ display: 'table-cell' }}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
