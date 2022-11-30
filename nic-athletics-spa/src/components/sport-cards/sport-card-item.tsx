// @flow 
import * as React from 'react';
type Props = {
    imageURL:string,
    sportType:string
};
export const SportCardItem = (props: Props) => {
    return (
        <div className='sport-cards__item'>
            <img src={props.imageURL} alt={props.sportType} />
            <div className="sport-cards__title"><h4 className='heading--bold'>{props.sportType}</h4></div>
        </div>
    );
};