// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LinkButton } from '../components/link-button/link-button.component';
type Props = {};
export const SidebarDS = (props: Props) => {
  return (
    <aside className='sidebarDS card'>
      <ul className='sidebarDS__title'>
        <li>Getting started</li>
        <li>Atoms</li>
        <li>
          <ul>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#colors-ds'}>
                Colors
              </LinkButton>
            </li>
            {/* <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#icons-section'}>
                Icons
              </LinkButton>
            </li> */}
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#spacing-section'}>
                Spacing
              </LinkButton>
            </li>
            {/* <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#drop-shadows-section'}>
                Drop Shadows
              </LinkButton>
            </li> */}
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#typography-ds'}>
                Typography
              </LinkButton>
            </li>
          </ul>
        </li>
        <li>Molecules</li>
        <li>
          <ul>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#button-ds'}>
                Button
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#input-ds'}>
                Input
              </LinkButton>
            </li>
          </ul>
        </li>
        <li>Components</li>
        <li>
          <ul>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#breadcrumbs-ds'}>
                Breadcrumbs
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#carousel-ds'}>
                Carousel
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#modal-ds'}>
                Modal
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#navbar-ds'}>
                Navbar
              </LinkButton>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};
