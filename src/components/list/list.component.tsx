// @flow
import * as React from 'react';
type Props = {
  children: React.ReactNode;
};
export const List = ({ children, ...props }: Props) => {
  return <ul className="list">{children}</ul>;
};
