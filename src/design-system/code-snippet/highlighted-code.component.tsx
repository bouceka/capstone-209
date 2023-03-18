// @flow
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import * as React from 'react';

type Props = {
  code: string;
  lang: Language;
};

export const HighlightedCode = ({ code, lang }: Props) => {
  return (
    <Highlight {...defaultProps} theme={vsDark} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ whiteSpace: 'break-spaces', ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span className="line-no">{i + 1}</span>
              <span style={{ display: 'table-cell' }}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
