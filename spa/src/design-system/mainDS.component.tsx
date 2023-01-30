// @flow
import * as React from 'react';
import { Button } from '../components/button/button.component';
import { LinkButton } from '../components/link-button/link-button.component';
import { ButtonsDS } from './buttonsDS/buttonsDS.component';
import { InputDS } from './inputDS/inputDS.component';
import { TypographyDS } from './typographyDS/typographyDS.component';
type Props = {};
export const MainDS = (props: Props) => {
  return (
    <main className='main-ds card'>
      <h2 className='heading'>Atoms</h2>
      <TypographyDS />
      <h2 className='heading'>Molecules</h2>
      <ButtonsDS />
      <InputDS/>
    </main>
  );
};
