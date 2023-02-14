// @flow
import * as React from 'react';
import { HeaderDS } from '../../design-system/headerDS.component';
import { SidebarDS } from '../../design-system/sidebarDS.component';
import { MainDS } from '../../design-system/mainDS.component';

export const DesignSystem = () => {
  return (
    <>
      <HeaderDS />
      <div className='row'>
        <div className='container-ds'>
          <SidebarDS />
          <MainDS />
        </div>
      </div>
    </>
  );
};
