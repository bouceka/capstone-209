// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import Logo from '/assets/nic-athletics-logo-64x.png';

import { InsideAthleticsSubmenu } from '../../components/header/inside-athletics-submenu.component';
import { TeamsSubmenu } from '../../components/header/teams-submenu.component';

export const NavbarDSExample = () => {
  return (
    <header className="header-example" style={{ zIndex: 11 }}>
      <nav>
        <div className="header__top">
          <div className="row">
            <span className="header__top">
              THE OFFICIAL SITE OF <span>NORTH ISLAND COLLEGE BEARS</span>
            </span>
          </div>
        </div>
        <div className="main-nav row">
          <ul className="main-nav-list">
            <li>
              <Link to={'#!'}>
                <img className="header__image" src={Logo} alt="NIC Athletics logo" />
              </Link>
            </li>
            <li className="main-nav__teams">
              <Link className="btn btn--header" to={'#!'}>
                Teams
              </Link>
              <TeamsSubmenu />
            </li>
            <li>
              <Link className="btn btn--header" to={'#!'}>
                Calendar
              </Link>
            </li>

            <li className="main-nav__inside-athletics">
              <Link className="btn btn--header" to={'#!'}>
                Inside Athletics
              </Link>
              <InsideAthleticsSubmenu />
            </li>
            <li>
              <Link className="btn btn--secondary" to={'#!'}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
