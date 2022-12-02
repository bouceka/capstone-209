// @flow 
import * as React from 'react';
type Props = {
    imageURL:string,
    title:string
};
export const CardItem = (props: Props) => {
    return (
        <div className='cards__item'>
            <img src={props.imageURL} alt={props.title} />
            <div className="cards__title"><h4 className='heading--bold'>{props.title}</h4></div>
        </div>
    );
};