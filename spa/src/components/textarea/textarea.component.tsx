// @flow 
import * as React from 'react';
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helpText?: string;
};
export const Textarea = ({ label, helpText, ...otherProps }: Props) => {

    // TODO: Add letter counter
    return (
        <div className='form-item'>
        {label ? <label htmlFor={otherProps.name}>{label}</label> : null}
        <textarea className='form-input' {...otherProps} />
        {helpText ? <span className='help-text'>{helpText}</span> : null}
      </div>
    );
};