export const ListCSSSample = `.list {
    list-style: none;
    max-width: 40rem;
  
    &__item:not(:first-child) {
      border-top-width: 0;
    }
  
    &__item:first-child {
      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;
    }
    &__item:last-child {
      border-bottom-left-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
    }
    &__item {
      padding: 0.8rem 1.6rem;
      border: 1px solid $color-neutral-600;
      &.hover:hover {
        background-color: $color-primary-25;
      }
      &.active {
        background-color: $color-primary-600;
        color: $text-white-primary;
      }
      &.pointer {
        cursor: pointer;
      }
    }
  }`;
export const ListTSXSample = `type Props = {
  children: React.ReactNode;
  className?: string;
  link?: string;
  pointer?: boolean;
};
export const ListItem = ({
    children,
    className,
    pointer = false,
    link,
    ...props 
  }: Props) => {
  const navigate = useNavigate();
  const handleLink = (to: string) => {
    navigate(to);
  };
  return (
    <li
      onClick={() => (link ? handleLink(link) : null)}
      className={\`list__item \${className ? className : ''} 
      \${pointer ? 'pointer' : ''}\`}
    >
      {children}
    </li>
  );
};
`;
export const ListExampleSample = `<List>
    <ListItem className='active'>Active List Item</ListItem>
    <ListItem className='hover'>Hover List Item</ListItem>
    <ListItem className='hover' link='/' pointer={true}>
    Link Cursor Pointer List Item
    </ListItem>
    <ListItem>List Item</ListItem>
</List>`;
