// @flow
import * as React from 'react';
import Logo from '../../assets/nic-athletics-logo-64x.png';
import { Link } from 'react-router-dom';
import { useWindowDimensions } from '../../hooks/window-dimensions';
import { useState } from 'react';

export const Header = () => {
  const { width } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuButton = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className='header'>
      <nav>
        <div className='header__top'>
          <div className='row'>
            <span className='header__top'>
              THE OFFICIAL SITE OF <span>NORTH ISLAND COLLEGE BEARS</span>
            </span>
          </div>
        </div>
        <div className='main-nav row'>
          {width <= 959 ? (
            <div className='collapsed-nav'>
              <Link to={'/'}>
                <img className='header__image' src={Logo} alt='NIC Athletics logo' />
              </Link>
              <div id='nav-icon3' onClick={handleMenuButton} className={openMenu ? 'open' : ''}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : null}

          <ul className={`main-nav-list ${openMenu ? 'is-active' : ''}`}>
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
            {/* <li>
              <Link className='btn btn--header' to={'/fan-zone'}>
                Fan Zone
              </Link>
            </li> */}
            {width >= 960 ? (
              <li>
                <Link to={'/'}>
                  <img className='header__image' src={Logo} alt='NIC Athletics logo' />
                </Link>
              </li>
            ) : null}
            <li>
              <Link className='btn btn--header' to={'/inside-athletics'}>
                Inside Athletics
              </Link>
            </li>
            {/* <li>
              <Link className='btn btn--header' to={'/support'}>
                Support
              </Link>
            </li> */}
            <li>
              <Link className='btn btn--secondary' to={'/sign-up'}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
