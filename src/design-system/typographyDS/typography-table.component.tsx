// @flow
import * as React from 'react';
import { TypographySampleProps } from './typography-sample';



type Props = {
  typographyList: TypographySampleProps[];
};
export const TypographyTable = ({ typographyList }: Props) => {
  return (
    <section className='typography-ds__box'>
      <table className='typography-ds__table'>
        <thead>
          <tr>
            <th>
              <span className='paragraph--bold'>Sample Text</span>
            </th>
            <th>
              <span className='paragraph--bold'>Weight</span>
            </th>
            <th>
              <span className='paragraph--bold'>Size</span>
            </th>
            <th>
              <span className='paragraph--bold'>Height</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {typographyList.map(({ typeface, weight, size, height, className,content }, index) => (
            <tr key={index}>
              <td dangerouslySetInnerHTML={{ __html: content }}></td>
              <td>
                <p className='paragraph--medium'>{weight}</p>
              </td>
              <td>
                <p className='paragraph--medium'>{size}</p>
              </td>
              <td>
                <p className='paragraph--medium'>{height}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
