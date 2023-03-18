// @flow
import * as React from 'react';

import { SportType } from '../../mock/events-mock';
import { LinkButton } from '../link-button/link-button.component';

export interface AoM {
  name: string;
  sportType: SportType;
  imageURL: string;
}

type Props = {
  athleteOfMonth: AoM;
};
export const AwardCard = ({ athleteOfMonth }: Props) => {
  return (
    <div className="award-card">
      <img src={athleteOfMonth.imageURL} alt="" />
      <p className="paragraph--large--bold">{athleteOfMonth.name}</p>
      <span className="caption--large">{athleteOfMonth.sportType}</span>
      <LinkButton size="medium">Read More</LinkButton>
    </div>
  );
};
