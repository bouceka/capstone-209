// @flow
import * as React from 'react';
import Highlight, { Language, defaultProps } from 'prism-react-renderer';

type Props = {
  code: string;
  lang: Language;
};

export const HighlightedCode = ({ code, lang }: Props) => {
  return (
    <Highlight {...defaultProps} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span className='line-no'>{i + 1}</span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
