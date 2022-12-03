// @flow
import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
}
export const Input = ({ label, helpText, ...otherProps }: Props) => {
  return (
    <div className='form-item'>
      {label ? <label htmlFor={otherProps.name}>{label}</label> : null}
      <input type='text' className='form-input' {...otherProps} />
      {helpText ? <span className='help-text'>{helpText}</span> : null}
    </div>
  );
};
