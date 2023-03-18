// @flow
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '/assets/nic-athletics-logo-64x.png';

export const NavbarDSMobileExample = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuButton = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="header-example-mobile">
      <nav>
        <div className="header__top">
          <div className="row">
            <span className="header__top">
              THE OFFICIAL SITE OF <span>NORTH ISLAND COLLEGE BEARS</span>
            </span>
          </div>
        </div>
        <div className="main-nav row">
          <div className="collapsed-nav">
            <Link to={'/'}>
              <img className="header__image" src={Logo} alt="NIC Athletics logo" />
            </Link>
            <div id="nav-icon" onClick={handleMenuButton} className={openMenu ? 'open' : ''}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`main-nav-list ${openMenu ? 'is-active' : ''}`}>
            <li>
              <Link className="btn btn--header" to={'/teams'}>
                Teams
              </Link>
            </li>
            <li>
              <Link className="btn btn--header" to={'/calendar'}>
                Calendar
              </Link>
            </li>
            <li>
              <Link className="btn btn--header" to={'/inside-athletics'}>
                Inside Athletics
              </Link>
            </li>
            <li>
              <Link className="btn btn--secondary" to={'/sign-up'}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
