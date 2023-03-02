// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LinkButton } from '../components/link-button/link-button.component';
import { ScrollButton } from '../components/scroll-button/scroll-button.component';
import { useState } from 'react';
type Props = {
  openMenu: boolean;
};
export const SidebarDS = ({ openMenu }: Props) => {
  return (
    <aside className={`sidebarDS card ${openMenu ? '' : 'closed'}`}>
      <ul className='sidebarDS__title'>
        <ScrollButton size='large' to={'start-ds'}>
          <li>Getting started</li>
        </ScrollButton>
        <ScrollButton size='large' to={'atoms-ds'}>
          <li>Atoms</li>
        </ScrollButton>
        <li>
          <ul>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'spacing-ds'}>
                Spacing
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'images-ds'}>
                Images
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'typography-ds'}>
                Typography
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'colors-ds'}>
                Colors
              </ScrollButton>
            </li>
          </ul>
        </li>
        <ScrollButton size='large' to={'molecules-ds'}>
          <li>Molecules</li>
        </ScrollButton>
        <li>
          <ul>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'button-ds'}>
                Button
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'input-ds'}>
                Input
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'list-ds'}>
                List
              </ScrollButton>
            </li>
          </ul>
        </li>
        <ScrollButton size='large' to={'components-ds'}>
          <li>Components</li>
        </ScrollButton>
        <li>
          <ul>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'breadcrumbs-ds'}>
                Breadcrumbs
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'carousel-ds'}>
                Carousel
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'modal-ds'}>
                Modal
              </ScrollButton>
            </li>
            <li className='sidebarDS__items'>
              <ScrollButton size='medium' to={'navbar-ds'}>
                Navbar
              </ScrollButton>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};
