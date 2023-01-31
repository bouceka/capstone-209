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
      <p className='paragraph--large'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio sint accusamus assumenda dolor id
        iusto eveniet fugit, ipsa vitae cum debitis, sed molestiae blanditiis harum distinctio quibusdam, aut obcaecati.
      </p>

      <Breadcrumbs />
      <CodeSnippet
        exampleCode={BreadcrumbsExampleSample}
        CSSCode={BreadcrumbsCSSSample}
        TSXCode={BreadcrumbsTSXSample}
      />
    </section>
  );
};
