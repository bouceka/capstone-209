// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LinkButton } from '../components/link-button/link-button.component';
type Props = {};
export const SidebarDS = (props: Props) => {
  return (
    <aside className='sidebarDS card'>
      <ul className='sidebarDS__title'>
        <LinkButton size='large' to={'#start-ds'}>
          <li>Getting started</li>
        </LinkButton>
        <LinkButton size='large' to={'#atoms-ds'}>
          <li>Atoms</li>
        </LinkButton>
        <li>
          <ul>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#spacing-ds'}>
                Spacing
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#typography-ds'}>
                Typography
              </LinkButton>
            </li>
            <li className='sidebarDS__items'>
              <LinkButton size='medium' to={'#colors-ds'}>
                Colors
              </LinkButton>
            </li>
          </ul>
        </li>
        <LinkButton size='large' to={'#molecules-ds'}>
          <li>Molecules</li>
        </LinkButton>
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
        <LinkButton size='large' to={'#components-ds'}>
          <li>Components</li>
        </LinkButton>
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
