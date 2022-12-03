// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
type Props = {
  imageURL: string;
  title: string;
  link: string;
};
export const CardItem = (props: Props) => {
  return (
    <Link to={props.link} className='cards__item'>
      <img src={props.imageURL} alt={props.title} />
      <div className='cards__title'>
        <h4 className='heading--bold'>{props.title}</h4>
      </div>
    </Link>
  );
};
