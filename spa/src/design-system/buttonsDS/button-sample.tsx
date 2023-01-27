export const ButtonExampleSample = `<div style={{ display: 'grid', gap: '10px' }}>
    <Button className='primary'>Button Primary</Button>
    <Button className='primary disabled'>Primary Disabled</Button>
</div>`;

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
};
`;
