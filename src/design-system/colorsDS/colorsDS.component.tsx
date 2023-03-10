// @flow
import * as React from 'react';
import { ColorsCSSeColors, NeutralColors, PrimaryColors, SecondaryColors, WarningColors } from './colors-sample';
import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { Highlight } from '../highlight/highlight.component';

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
      <p className='paragraph--medium'>
        The primary and the secondary color are based on the colors NIC uses. The primary color uses{' '}
        <Highlight>Hue: 213, Sat: 100</Highlight> and the secondary colors uses <Highlight>Hue: 56, Sat: 100</Highlight>
        . The lightness changes based on need from ~98% to ~30%.
      </p>
      <p className='paragraph--medium'>
        The warning color could be used also as an error color and it should be used only for warning purposes. The
        neutral colors are shades of grey for various purposes.
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
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <tr key={index}>
                <td
                  style={{
                    backgroundColor: PrimaryColors[index] ? PrimaryColors[index].hex : 'white',
                    color: PrimaryColors[index] ? getContrastYIQ(PrimaryColors[index].hex) : 'black',
                  }}
                >
                  {PrimaryColors[index] ? PrimaryColors[index].hex : null}
                </td>
                <td
                  style={{
                    backgroundColor: SecondaryColors[index] ? SecondaryColors[index].hex : 'white',
                    color: SecondaryColors[index] ? getContrastYIQ(SecondaryColors[index].hex) : 'black',
                  }}
                >
                  {SecondaryColors[index] ? SecondaryColors[index].hex : null}
                </td>
                <td
                  style={{
                    backgroundColor: WarningColors[index] ? WarningColors[index].hex : 'white',
                    color: WarningColors[index] ? getContrastYIQ(WarningColors[index].hex) : 'black',
                  }}
                >
                  {WarningColors[index] ? WarningColors[index].hex : null}
                </td>
                <td
                  style={{
                    backgroundColor: NeutralColors[index] ? NeutralColors[index].hex : 'white',
                    color: NeutralColors[index] ? getContrastYIQ(NeutralColors[index].hex) : 'black',
                  }}
                >
                  {NeutralColors[index] ? NeutralColors[index].hex : null}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h6 className='heading'>Usage</h6>
      <p className='paragraph--medium'>
        A developer can use the colors as <span className='paragraph--medium--bold'>variable</span> in syntax:{' '}
        <Highlight>{`$color-{color-type}-{lightness-level}`}</Highlight>, for example, for primary color with its
        default value 600 you use <Highlight>{`$color-primary-600`}</Highlight>.
      </p>
      <CodeSnippet SCSSCode={ColorsCSSeColors} />
    </section>
  );
};
