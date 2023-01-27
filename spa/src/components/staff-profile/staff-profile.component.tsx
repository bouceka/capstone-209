// @flow
import * as React from 'react';

export interface IStaffProfile {
  imagURL: string;
  name: string;
  bio: string;
  phoneNumber: string;
  email: string;
  position: string;
}

type Props = {
  staffProfile: IStaffProfile;
};
export const StaffProfile = ({ staffProfile }: Props) => {
  return (
    <div className='staff-profile'>
      <img src={staffProfile.imagURL} alt={staffProfile.name} />
      <div className='staff-profile__content'>
        <div className='staff-profile__title'>
          <h4 className='heading'>{staffProfile.name}</h4>
          <h4 className='heading--medium'>{staffProfile.position}</h4>
        </div>
        <p className='paragraph--medium'>{staffProfile.bio}</p>
        <p className='paragraph--medium'>{staffProfile.phoneNumber}</p>
        <p className='paragraph--medium'>{staffProfile.email}</p>
      </div>
    </div>
  );
};
