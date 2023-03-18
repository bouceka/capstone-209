// @flow
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { LinkButton } from '../link-button/link-button.component';

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const styleCrumb = (crumb: string) => {
  return capitalize(crumb.replace('-', ' '));
};
export const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <LinkButton size="medium" to={currentLink}>
            {styleCrumb(crumb)}
          </LinkButton>
        </div>
      );
    });

  crumbs.unshift(
    <div className="crumb" key="home">
      <LinkButton size="medium" to={'/'}>
        Home
      </LinkButton>
    </div>,
  );
  return (
    <div>
      <div className="row breadcrumbs">{crumbs}</div>
    </div>
  );
};
