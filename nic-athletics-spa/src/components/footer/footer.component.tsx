import React from 'react';
import Logo from '../../assets/nic-athletics-logo-64x.png';
import NICLogo from '../../assets/nic-logo.png';
import { LinkButton } from '../link-button/link-button.component';
import './footer.styles.scss';
import { ReactComponent as FacebookIcon } from '../../assets/icons/social-media/facebook.svg';
import { ReactComponent as YouTubeIcon } from '../../assets/icons/social-media/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/social-media/instagram.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='content'>
          <div className='row'>
            <div className='column'>
              <img className='content__image' src={NICLogo} alt='North Island College logo' />
              <ul className='link-group'>
                <li>
                  <a className='footer-link' href='#!'>
                    Teams
                  </a>
                </li>
                <li>
                  <a className='footer-link' href='#!'>
                    Inside Athletics
                  </a>
                </li>
                <li>
                  <a className='footer-link' href='#!'>
                    Calendar
                  </a>
                </li>
                <li>
                  <a className='footer-link' href='#!'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className='column'>
              <img className='content__image' src={Logo} alt='NIC Athletics logo' />
            </div>
            <div className='column'>
              <p className='paragraph-medium'>
                NIC is honoured to acknowledge the traditional territories of the combined 35 First Nations of the
                Nuu-chah-nulth, Kwakwaka&apos;wakw and Coast Salish traditions, on whose traditional and unceded
                territories the college&apos;s campuses are situated.
              </p>
            </div>
          </div>
        </div>
        <div className='social'>
          <div className='row'>
            <div className='social__media'>
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
            <div className='social__terms'>
              <LinkButton size='medium'>Terms of Service</LinkButton>
              <LinkButton size='medium'>Privacy Policy</LinkButton>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
