// @flow
import * as React from 'react';
import { StaffProfile } from '../../../components/staff-profile/staff-profile.component';
import { Title } from '../../../components/title/title.component';
import { STAFF_DATA } from './staff-data';
type Props = {};
export const StaffDirectors = (props: Props) => {
  return (
    <div className='page'>
      <Title>Staff Directors</Title>
      <section className='staff-directors row'>
        {STAFF_DATA.map((profile, index) => (
          <StaffProfile key={index} staffProfile={profile} />
        ))}
      </section>
    </div>
  );
};
