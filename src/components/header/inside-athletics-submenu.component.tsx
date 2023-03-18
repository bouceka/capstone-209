// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

export const InsideAthleticsSubmenu = () => {
  return (
    <ul className="main-nav__submenu">
      <li>
        <Link className="btn btn--header" to={'/inside-athletics/contact-us'}>
          Contact
        </Link>
      </li>
      <li>
        <Link className="btn btn--header" to={'/teams/about-us'}>
          About Us
        </Link>
      </li>
      <li>
        <Link className="btn btn--header" to={'/teams/staff-directors'}>
          Staff Directors
        </Link>
      </li>
    </ul>
  );
};
