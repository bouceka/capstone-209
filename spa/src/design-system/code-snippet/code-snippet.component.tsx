// @flow
import Highlight, { defaultProps } from 'prism-react-renderer';
import * as React from 'react';
type Props = {
  TSXCode: string;
  CSSCode: string;
};
export const CodeSnippet = ({ TSXCode, CSSCode }: Props) => {
  return (
    <div className='code-snippet'>
      <div className='code-snippet__TSX'>
        <div className="code-snippet__label">TSX Code</div>
        <Highlight {...defaultProps} code={TSXCode} language='tsx'>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      <div className='code-snippet__CSS'>
      <div className="code-snippet__label">TSX Code</div>
        <Highlight {...defaultProps} code={CSSCode} language='scss'>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
