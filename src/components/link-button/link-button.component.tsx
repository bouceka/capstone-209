// @flow
import * as React from 'react';
import './link-button.styles.scss';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  to?: string;
}
export const LinkButton = ({ children, size = 'medium', to = '#!', ...props }: Props) => {
  return (
    <a href={to} {...props} className={`link paragraph--${size} ${props.className}`}>
      {children}
    </a>
  );
};
