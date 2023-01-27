export const ButtonExampleSample = `<Button className='primary'>Button Primary</Button>
<Button className='primary disabled'>Primary Disabled</Button>`;

export const ButtonCSSSample = `.btn {
  &,
  &:link,
  &:visited {
    text-decoration: none;
    position: relative;
    transition: all 0.2s;
    display: inline-block;
    padding: 1rem 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    border: none;
    white-space: nowrap;
  }

  &--primary {
    color: $text-white-primary;
    background-color: $color-primary-700;
    @include body-text(600, 1.6rem, 2.4rem);
    border-radius: 0.2rem;

    &:hover {
      background-color: $color-primary-800;
    }
    &:active {
      background-color: $color-primary-900;
    }
  }

  &--secondary {
    color: $color-primary-900;
    background-color: $color-secondary-400;
    border: 1px solid $color-secondary-500;

    @include body-text(600, 1.6rem, 2.4rem);
    border-radius: 0.2rem;

    &:hover {
      background-color: $color-secondary-500;
    }
    &:active {
      background-color: $color-secondary-600;
    }

    &--small {
      @extend .caption--large--bold;
      padding: 0.8rem 1.6rem !important;

      color: $color-primary-900;
      background-color: $color-secondary-400;
      border: 1px solid $color-secondary-500;

      &:hover {
        background-color: $color-secondary-500;
      }
      &:active {
        background-color: $color-secondary-600;
      }
    }
  }
  &--outline {
    @extend .btn;
    color: $color-primary-700;
    background-color: transparent;
    border: 1px solid $color-primary-700;
    @include body-text(600, 1.6rem, 2.4rem);
    border-radius: 0.2rem;

    &:hover {
      color: $color-primary-800;
      @include background-opacity($color-primary-800, 0.1);
    }
    &:active {
      color: $color-primary-900;
      @include background-opacity($color-primary-800, 0.15);
    }
  }
  &--link {
    color: $color-primary-600;
    background-color: transparent;
    text-transform: uppercase;
    @include body-text(600, 1.6rem, 2.4rem);
    border-radius: 0.2rem;

    &:hover {
      color: $color-primary-700;
      @include background-opacity($color-primary-800, 0.1);
    }
    &:active {
      color: $color-primary-900;
      @include background-opacity($color-primary-800, 0.15);
    }

  &.disabled {
    opacity: 38%;
    pointer-events: none;
  }
}`;
export const ButtonTSXSample = `import * as React from 'react';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={\`btn btn--\${props.className}\`}>
      {children}
    </button>
  );
};`;
