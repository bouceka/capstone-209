// @flow
import * as React from 'react';
import './header.styles.scss';
import Logo from '../../assets/nic-athletics-logo-64x.png';

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="college-label">
          <div className="row">
            <span> THE OFFICIAL SITE OF NORTH ISLAND COLLEGE BEARS</span>
          </div>
        </div>
        <div className="main-nav row">
          <ul className="main-nav-list">
            <li>
              <a className="btn btn--header" href="">
                Teams
              </a>
            </li>
            <li>
              <a className="btn btn--header" href="">
                Calendar
              </a>
            </li>
            <li>
              <a className="btn btn--header" href="">
                Fan Zone
              </a>
            </li>
            <li>
              <a href="">
                <img className="header__image" src={Logo} alt="NIC Athletics logo" />
              </a>
            </li>
            <li>
              <a className="btn btn--header" href="">
                Inside Athletics
              </a>
            </li>
            <li>
              <a className="btn btn--header" href="">
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
