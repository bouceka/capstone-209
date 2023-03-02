// @flow
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
type Props = {
  children: React.ReactNode;
  className?: string;
  link?: string;
  pointer?: boolean;
};
export const ListItem = ({ children, className, pointer = false, link, ...props }: Props) => {
  const navigate = useNavigate();
  const handleLink = (to: string) => {
    navigate(to);
  };
  return (
    <li
      onClick={() => (link ? handleLink(link) : null)}
      className={`list__item ${className ? className : ''} ${pointer ? 'pointer' : ''}`}
    >
      {children}
    </li>
  );
};
