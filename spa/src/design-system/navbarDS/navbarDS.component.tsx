// @flow
import * as React from 'react';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { Header } from '../../components/header/header.component';
import { NavbarDSExample } from './navbarDS-example';
import { NavbarDSMobileExample } from './navbarDS-mobile-example';
import { NavbarCSSSample, NavbarTSXSample } from './navbar-sample';
type Props = {};
export const NavbarDS = (props: Props) => {
  return (
    <section id='navbar-ds' className='navbar-ds'>
      <h4 className='heading'>Navbar</h4>
      <p className='paragraph--large'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eligendi sequi sint delectus officia quis
        architecto dicta voluptate repellat suscipit rem illo inventore autem totam, alias similique ut, nemo vero!
      </p>
      <div className='navbar-ds__example'>
        <NavbarDSExample />
        <NavbarDSMobileExample />
      </div>
       <CodeSnippet CSSCode={NavbarCSSSample} TSXCode={NavbarTSXSample} /> 
    </section>
  );
};
