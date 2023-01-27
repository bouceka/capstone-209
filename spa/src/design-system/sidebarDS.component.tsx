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
              <LinkButton size='medium' to={'#button-section'}>
                Colors
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#button-section'}>
                Icons
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#button-section'}>
                Spacing
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#button-section'}>
                Grids
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#button-section'}>
                Drop Shadows
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#button-section'}>
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
                Buttons
              </LinkButton>
            </li>
          </ul>
        </li>
        <li>Components</li>
        <li>
          <ul>
          <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#button-section'}>
                Carousel
              </LinkButton>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};
