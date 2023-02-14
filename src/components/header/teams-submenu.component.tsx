// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
type Props = {};
export const TeamsSubmenu = (props: Props) => {
  return (
    <ul className='main-nav__submenu'>
      <li>
        <Link className='btn btn--header' to={'/teams/volleyball'}>
          Volleyball
        </Link>
      </li>
      <li>
        <Link className='btn btn--header' to={'/teams/soccer'}>
          Soccer
        </Link>
      </li>
      <li>
        <Link className='btn btn--header' to={'/teams/ice-hockey'}>
          Ice Hockey
        </Link>
      </li>
      <li>
        <Link className='btn btn--header' to={'/teams/Basketball'}>
          Basketball
        </Link>
      </li>
    </ul>
  );
};
