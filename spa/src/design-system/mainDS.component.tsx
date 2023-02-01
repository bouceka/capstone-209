// @flow
import * as React from 'react';
import { Button } from '../components/button/button.component';
import { LinkButton } from '../components/link-button/link-button.component';
import { ButtonsDS } from './buttonsDS/buttonsDS.component';
import { InputDS } from './inputDS/inputDS.component';
import { TypographyDS } from './typographyDS/typographyDS.component';
import { ColorsDS } from './colorsDS/colorsDS.component';
import { ModalDS } from './modalDS/modalDS.component';
import { NavbarDS } from './navbarDS/navbarDS.component';
import { BreadcrumbsDS } from './breadcrumbsDS/breadcrumbsDS.component';
import { CarouselDS } from './carouselDS/carouselDS.component';
type Props = {};
export const MainDS = (props: Props) => {
  return (
    <main className='main-ds card'>
      <h1 className='heading'>NIC Athletics Design System</h1>
      <h2 className='heading'>Get started</h2>
      <h5 className='heading--medium'>
        NIC Athletics design system is here for any developer that needs to find a way how to build anything from
        contact form to the entire page by using this guideline.
      </h5>
      <h2 className='heading'>Introduction</h2>
      <p className='paragraph--medium'>
        This design system is divided into
        <LinkButton to='https://atomicdesign.bradfrost.com/chapter-2/'> Atomic Design.</LinkButton> This methodology
        helps designers to look at the web app elements from bigger picture. There are three main blocks
        <span className='paragraph--medium--bold'> Atoms</span>,
        <span className='paragraph--medium--bold'> Molecules</span>, and
        <span className='paragraph--medium--bold'> Organisms (Components).</span> This website contains the "Atoms" the
        building blocks for this app such as color pallette, spacing rules, and typography. Molecules are more complex
        elements that are combined from "Atoms" for instance buttons, field inputs, etc. Components are higher level
        elements that combine multiple molecules and create a functional piece of the app.
      </p>
      <p className='paragraph--medium'>
        Every element either it is an atom or molecule is described as precise as possible which means that has a full
        description, external links that supports designer's decisions and includes code snippets for immediate usage
        within the project app.
      </p>
      <h2 className='heading'>Atoms</h2>
      <TypographyDS />
      <ColorsDS />
      <h2 className='heading'>Molecules</h2>
      <ButtonsDS />
      <InputDS />
      <h2 className='heading'>Components</h2>
      <BreadcrumbsDS />
      <CarouselDS />
      <ModalDS />
      <NavbarDS />
    </main>
  );
};
