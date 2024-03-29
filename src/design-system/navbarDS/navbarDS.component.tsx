// @flow
import * as React from 'react';

import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { Highlight } from '../highlight/highlight.component';
import { NavbarCSSSample, NavbarTSXSample } from './navbar-sample';
import { NavbarDSExample } from './navbarDS-example';
import { NavbarDSMobileExample } from './navbarDS-mobile-example';

export const NavbarDS = () => {
  return (
    <section id="navbar-ds" className="navbar-ds">
      <h4 className="heading">Navbar</h4>
      <p className="paragraph--medium">
        Navbar is complex component that a developer has to build, but the example code leads how to do it. The reason
        for it is, that it allows to change the list of navigation items. The navbar collapses once it hits the{' '}
        <Highlight>Breakpoint: 899px (Tablet Portrait)</Highlight>. The navbar uses the primary color as background and
        for Sign Up we use secondary button to achieve the best contrast.
      </p>
      <div className="navbar-ds__example">
        <NavbarDSExample />
        <NavbarDSMobileExample />
      </div>
      <CodeSnippet SCSSCode={NavbarCSSSample} TSXCode={NavbarTSXSample} />
    </section>
  );
};
