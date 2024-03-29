// @flow
import './scroll-button.styles.scss';

import * as React from 'react';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll, Link, scroller, scrollSpy } from 'react-scroll';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  to?: string;
  offset?: number;
}
export const ScrollButton = ({ children, size = 'medium', to = '#!', offset = 0, ...props }: Props) => {
  return (
    <Link
      href={to}
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      //   offset={offset}
      offset={-80}
      activeClass="active"
      className={`scroll-link paragraph--${size} ${props.className!}`}
    >
      {children}
    </Link>
  );
};
