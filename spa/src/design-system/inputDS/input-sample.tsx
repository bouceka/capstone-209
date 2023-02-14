export const InputExampleSample = `<Input label='Input label' placeholder='Placeholder' />`;

export const InputCSSSample = `.form-item {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
  label {
    @extend .paragraph--small--bold;
  }

  .form-input {
    border: .16rem solid $color-neutral-200;
    padding: 0.8rem;
    @extend .paragraph--small;
    font-family: inherit;
    border-radius: 0.2rem;

    &:focus-visible{
      outline: .1rem solid $color-primary-400;
      border-color: $color-primary-400;
    }
  }

  .help-text {
    @extend .paragraph--small;
    color: $text-black-secondary;
  }

  textarea{
    height: 10.8rem;
    font-family: inherit;
  }
}`;

export const InputTSXSample = `import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  type?: string;
}
export const Input = (
{ label, type = 'text', helpText, ...otherProps }: Props
) => {
  return (
    <div className='form-item'>
      {label ? <label htmlFor={otherProps.name}>{label}</label> : null}
      <input type={type} className='form-input' {...otherProps} />
      {helpText ? <span className='help-text'>{helpText}</span> : null}
    </div>
  );
};`;
