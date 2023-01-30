// @flow
import * as React from 'react';
import { Button } from '../components/button/button.component';
import { LinkButton } from '../components/link-button/link-button.component';
import { ButtonsDS } from './buttonsDS/buttonsDS.component';
import { InputDS } from './input/inputDS.component';
import { TypographyDS } from './typography/typographyDS.component';
type Props = {};
export const MainDS = (props: Props) => {
  return (
    <main className='main-ds card'>
      <TypographyDS />
      <ButtonsDS />
      <InputDS/>
    </main>
  );
};
