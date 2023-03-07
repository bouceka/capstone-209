// @flow
import * as React from 'react';
import Logo from '/assets/nic-athletics-logo-64x.png';
import GitHub from '../assets/icons/social-media/github.svg';
import { Link } from 'react-router-dom';
import { LinkButton } from '../components/link-button/link-button.component';
import { useState } from 'react';

type Props = {
  setOpenMenu: (value: boolean) => void;
  openMenu: boolean;
};
export const HeaderDS = ({ setOpenMenu, openMenu }: Props) => {
  return (
    <header className='headerDS'>
      <div className='row'>
        <nav>
          <ul>
            <li>
              <div id='nav-icon-ds' onClick={() => setOpenMenu(!openMenu)} className={openMenu ? 'open' : ''}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <Link to={'/'}>
                <img className='header__image' src={Logo} alt='NIC Athletics logo' />
              </Link>
            </li>
            <li>
              <Link className='btn btn--link' to={'/'}>
                Demo site
              </Link>
            </li>
            <li>
              1.0{' '}
              <LinkButton size='medium' to={'https://github.com/bouceka/capstone-209'}>
               <span className='headerDS__git'>GitHub Repo </span><img className='' src={GitHub} />
              </LinkButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
