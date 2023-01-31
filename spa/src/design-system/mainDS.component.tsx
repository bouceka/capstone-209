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
type Props = {};
export const MainDS = (props: Props) => {
  return (
    <main className='main-ds card'>
      <h2 className='heading'>Atoms</h2>
      <TypographyDS />
      <ColorsDS />
      <h2 className='heading'>Molecules</h2>
      <BreadcrumbsDS />
      <ButtonsDS />
      <InputDS/>
      <ModalDS/>
      <NavbarDS/>
    </main>
  );
};
