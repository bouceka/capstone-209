// @flow
import * as React from 'react';
import { List } from '../../components/list/list.component';
import { ListItem } from '../../components/list/listItem.component';
import { Highlight } from '../highlight/highlight.component';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { ListCSSSample, ListExampleSample, ListTSXSample } from './list-sample';
type Props = {};
export const ListDS = (props: Props) => {
  return (
    <section id='list-ds' className='list-ds'>
      <h4 className='heading'>List</h4>
      <p className='paragraph--medium'>
        List is a very simple and flexible component for displaying a series of data. You can modify their visual by
        adding attributes such as <Highlight>pointer, hover, className</Highlight>.
      </p>
      <div className='list-ds__example'>
        <List>
          <ListItem className='active'>Active List Item</ListItem>
          <ListItem className='hover'>Hover List Item</ListItem>
          <ListItem className='hover' link='/' pointer={true}>
            Link Cursor Pointer List Item
          </ListItem>
          <ListItem>List Item</ListItem>
        </List>
      </div>

      <h6 className='heading'>Usage</h6>
      <p className='paragraph--medium'>
        A developer must use the list as series of <span className='paragraph--medium--bold'>JSX tags</span> in syntax:{' '}
        <Highlight>{`<List><ListItem>List Item</ListItem></List>`}</Highlight> If you need to display an array of
        strings you simply map the array and pass the data as children into list items.
      </p>
      <CodeSnippet TSXCode={ListTSXSample} exampleCode={ListExampleSample} SCSSCode={ListCSSSample} />
    </section>
  );
};
