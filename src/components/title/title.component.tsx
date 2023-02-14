// @flow 
import * as React from 'react';
type Props = {
    children: React.ReactNode
};
export const Title = ({children}: Props) => {
    return (
        <div className='row title'>
            <h1 className='display--small--bold'>{children}</h1>
        </div>
    );
};