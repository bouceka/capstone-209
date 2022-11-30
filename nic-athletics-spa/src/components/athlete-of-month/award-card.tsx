// @flow 
import * as React from 'react';
import { LinkButton } from '../link-button/link-button.component';
type Props = {
    
};
export const AwardCard = (props: Props) => {
    return (
        <div className='award-card'>
            <img src="/src/assets/illustrative-img/man-illustration.png" alt="" />
            <p className='paragraph--large--bold'>Josh Smith</p>
            <span className='caption--large'>Men's Soccer</span>
            <LinkButton size='medium'>Read More</LinkButton>
        </div>
    );
};