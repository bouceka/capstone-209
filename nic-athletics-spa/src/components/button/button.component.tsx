// @flow
import * as React from 'react';
import './button.styles.scss';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={`btn btn--${props.className}`}>
      {children}
    </button>
  );
};
