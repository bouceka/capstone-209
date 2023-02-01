// @flow
import * as React from 'react';
import Logo from '../assets/nic-athletics-logo-64x.png';
import GitHub from '../assets/icons/social-media/github.svg';
import { Link } from 'react-router-dom';
import { LinkButton } from '../components/link-button/link-button.component';

type Props = {};
export const HeaderDS = (props: Props) => {
  return (
    <header className='headerDS'>
      <div className='row'>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>
                <img className='header__image' src={Logo} alt='NIC Athletics logo' />
              </Link>
            </li>
            <li>
              <Link className='btn btn--link' to={'/'}>
                Example
              </Link>
            </li>
            <li>
              1.0 <LinkButton size='medium' to={'https://github.com/bouceka/capstone-209'}>GitHub Repo <img className='' src={GitHub} /></LinkButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
