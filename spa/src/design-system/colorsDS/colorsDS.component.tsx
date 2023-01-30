// @flow
import * as React from 'react';
import { ColorsCSSeColors, NeutralColors, PrimaryColors, SecondaryColors, WarningColors } from './colors-sample';
import { CodeSnippet } from '../code-snippet/code-snippet.component';

type Props = {};
export const ColorsDS = (props: Props) => {
  //from: https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
  const getContrastYIQ = (hexColor: string) => {
    var r = parseInt(hexColor.substring(1, 3), 16);
    var g = parseInt(hexColor.substring(3, 5), 16);
    var b = parseInt(hexColor.substring(5, 7), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000e0' : '#eee';
  };

  return (
    <section id='colors-ds' className='colors-ds'>
      <h4 className='heading'>Colors</h4>
      <p className='paragraph--large'>
        A set of harmonious typography scale with font weight variations. These text style perfectly fit for 4px grid
        and go well with each other.
      </p>

      <table className='colors-ds__table'>
        <thead>
          <tr>
            <th>Primary Colors</th>
            <th>Secondary Colors</th>
            <th>Warning Colors</th>
            <th>Neutral Colors</th>
          </tr>
        </thead>
        <tbody>
          {PrimaryColors.map((color, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: color.hex, color: getContrastYIQ(color.hex) }}>{color.hex}</td>
              <td
                style={{
                  backgroundColor: SecondaryColors[index].hex,
                  color: getContrastYIQ(SecondaryColors[index].hex),
                }}
              >
                {SecondaryColors[index].hex}
              </td>
              <td
                style={{ backgroundColor: WarningColors[index].hex, color: getContrastYIQ(WarningColors[index].hex) }}
              >
                {WarningColors[index].hex}
              </td>
              <td
                style={{ backgroundColor: NeutralColors[index].hex, color: getContrastYIQ(NeutralColors[index].hex) }}
              >
                {NeutralColors[index].hex}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CodeSnippet CSSCode={ColorsCSSeColors} />
    </section>
  );
};
