// @flow
import * as React from 'react';
import './header.styles.scss';
import Logo from '../../assets/nic-athletics-logo-64x.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <nav>
        <div className='college-label'>
          <div className='row'>
            <span> THE OFFICIAL SITE OF NORTH ISLAND COLLEGE BEARS</span>
          </div>
        </div>
        <div className='main-nav row'>
          <ul className='main-nav-list'>
            <li>
              <Link className='btn btn--header' to={'/teams'}>
                Teams
              </Link>
            </li>
            <li>
              <Link className='btn btn--header' to={'/calendar'}>
                Calendar
              </Link>
            </li>
            <li>
              <Link className='btn btn--header' to={'/fan-zone'}>
                Fan Zone
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <img className='header__image' src={Logo} alt='NIC Athletics logo' />
              </Link>
            </li>
            <li>
              <Link className='btn btn--header' to={'/inside-athletics'}>
                Inside Athletics
              </Link>
            </li>
            <li>
              <Link className='btn btn--header' to={'/support'}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
