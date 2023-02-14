// @flow
import * as React from 'react';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { BreadcrumbsCSSSample, BreadcrumbsExampleSample, BreadcrumbsTSXSample } from './breadcrumbs-sample';
type Props = {};
export const BreadcrumbsDS = (props: Props) => {
  return (
    <section className='breadcrumbs-ds' id='breadcrumbs-ds'>
      <h4 className='heading'>Breadcrumbs</h4>
      <p className='paragraph--medium'>
        Breadcrumbs is a very simple component what is created from links. It can be used anywhere on the page and on
        any page. It doesn't need any property because it gets all the information from the current URL. It always
        displays home and then the address.
      </p>

      <Breadcrumbs />
      <CodeSnippet
        exampleCode={BreadcrumbsExampleSample}
        SCSSCode={BreadcrumbsCSSSample}
        TSXCode={BreadcrumbsTSXSample}
      />
    </section>
  );
};
