// @flow
import * as React from 'react';

import { Breadcrumbs } from '../../../components/breadcrumbs/breadcrumbs.component';
import { Header } from '../../../components/header/header.component';
import { StaffProfile } from '../../../components/staff-profile/staff-profile.component';
import { Title } from '../../../components/title/title.component';
import { STAFF_DATA } from './staff-data';
export const StaffDirectors = () => {
  return (
    <div className="page">
      <Header />
      <Breadcrumbs />
      <Title>Staff Directors</Title>
      <section className="staff-directors row">
        {STAFF_DATA.map((profile, index) => (
          <StaffProfile key={index} staffProfile={profile} />
        ))}
      </section>
    </div>
  );
};
