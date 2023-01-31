export const BreadcrumbsExampleSample = `<Breadcrumbs/>`;

export const BreadcrumbsCSSSample = `.breadcrumbs {
  width: 100%;
  margin: 0;

  & > * {
    display: inline-block;
    margin-right: .8rem;
  }

  & .crumb:after {
    content: '/';
    margin-left: .8rem;
  }

  & .crumb:last-child:after {
    display: none;
  }
}`;
export const BreadcrumbsTSXSample = `import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkButton } from '../link-button/link-button.component';
type Props = {};

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const styleCrumb = (crumb: string) => {
  return capitalize(crumb.replace('-', ' '));
};
export const Breadcrumbs = (props: Props) => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += \`/\${crumb}\`;
      return (
        <div className='crumb' key={crumb}>
          <LinkButton size='medium' to={currentLink}>
            {styleCrumb(crumb)}
          </LinkButton>
        </div>
      );
    });

  crumbs.unshift(
    <div className='crumb' key='home'>
      <LinkButton size='medium' to={'/'}>
        Home
      </LinkButton>
    </div>
  );
  return (
    <div>
      <div className='row breadcrumbs'>{crumbs}</div>
    </div>
  );
};`;
