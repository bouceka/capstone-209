// @flow
import * as React from 'react';
import './link-button.styles.scss';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size: 'small' | 'medium';
}
export const LinkButton = ({ children, size, ...props }: Props) => {
  return (
    <a href='#!' {...props} className={`link paragraph--${size} ${props.className}`}>
      {children}
    </a>
  );
};
