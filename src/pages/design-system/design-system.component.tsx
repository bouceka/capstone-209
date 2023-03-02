// @flow
import * as React from 'react';
import { HeaderDS } from '../../design-system/headerDS.component';
import { SidebarDS } from '../../design-system/sidebarDS.component';
import { MainDS } from '../../design-system/mainDS.component';
import { useState } from 'react';

export const DesignSystem = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <HeaderDS openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className='row'>
        <div className='container-ds'>
          <SidebarDS openMenu={openMenu} />
          <MainDS openMenu={openMenu} />
        </div>
      </div>
    </>
  );
};
