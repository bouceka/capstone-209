// @flow
import * as React from 'react';
type Props = {
  children: React.ReactNode;
};
export const Highlight = ({children}: Props) => {
  return <span className='highlight-code'>{children}</span>;
};
