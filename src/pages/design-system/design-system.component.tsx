// @flow
import * as React from 'react';
import { useState } from 'react';
import { SuperSEO } from 'react-super-seo';

import { HeaderDS } from '../../design-system/headerDS.component';
import { MainDS } from '../../design-system/mainDS.component';
import { SidebarDS } from '../../design-system/sidebarDS.component';

export const DesignSystem = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <SuperSEO
        title="Design System | NIC Athletics"
        description="This is the design system of NIC Athletics. You can find all the dev guides here."
        lang="en"
      />
      <HeaderDS openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="row">
        <div className="container-ds">
          <SidebarDS openMenu={openMenu} />
          <MainDS openMenu={openMenu} />
        </div>
      </div>
    </>
  );
};
