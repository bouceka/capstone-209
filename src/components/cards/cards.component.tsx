// @flow
import * as React from 'react';

import { CardData, SPORT_DATA } from './card-data';
import { CardItem } from './card-item';
type Props = {
  cardData: CardData[];
};
export const Cards = ({ cardData }: Props) => {
  return (
    <section className="cards">
      {cardData.map((sportType, index) => (
        <CardItem key={index} {...sportType} />
      ))}
    </section>
  );
};
