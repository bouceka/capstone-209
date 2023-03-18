// @flow
import * as React from 'react';

import { CodeSnippet } from '../code-snippet/code-snippet.component';
import { Highlight } from '../highlight/highlight.component';
import { ColorsCSSeColors, NeutralColors, PrimaryColors, SecondaryColors, WarningColors } from './colors-sample';

export const ColorsDS = () => {
  //from: https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
  const getContrastYIQ = (hexColor: string) => {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000e0' : '#eee';
  };

  return (
    <section id="colors-ds" className="colors-ds">
      <h4 className="heading">Colors</h4>
      <p className="paragraph--medium">
        The primary and the secondary color are based on the colors NIC uses. The primary color uses{' '}
        <Highlight>Hue: 213, Sat: 100</Highlight> and the secondary colors uses <Highlight>Hue: 56, Sat: 100</Highlight>
        . The lightness changes based on need from ~98% to ~30%.
      </p>
      <p className="paragraph--medium">
        The warning color could be used also as an error color and it should be used only for warning purposes. The
        neutral colors are shades of grey for various purposes.
      </p>

      <h6 className="heading">Primary Color</h6>
      <div className="color-row">
        {PrimaryColors.map((color, index) => (
          <div className="color-card-ds" key={index}>
            <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
            <div className="hex">{color.hex}</div>
          </div>
        ))}
      </div>
      <h6 className="heading">Secondary Color</h6>
      <div className="color-row">
        {SecondaryColors.map((color, index) => (
          <div className="color-card-ds" key={index}>
            <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
            <div className="hex">{color.hex}</div>
          </div>
        ))}
      </div>
      <h6 className="heading">Neutral Color</h6>
      <div className="color-row">
        {NeutralColors.map((color, index) => (
          <div className="color-card-ds" key={index}>
            <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
            <div className="hex">{color.hex}</div>
          </div>
        ))}
      </div>
      <h6 className="heading">Warning Color</h6>
      <div className="color-row">
        {WarningColors.map((color, index) => (
          <div className="color-card-ds" key={index}>
            <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
            <div className="hex">{color.hex}</div>
          </div>
        ))}
      </div>
      <h6 className="heading">Usage</h6>
      <p className="paragraph--medium">
        A developer can use the colors as <span className="paragraph--medium--bold">variable</span> in syntax:{' '}
        <Highlight>{`$color-{color-type}-{lightness-level}`}</Highlight>, for example, for primary color with its
        default value 600 you use <Highlight>{`$color-primary-600`}</Highlight>.
      </p>
      <CodeSnippet SCSSCode={ColorsCSSeColors} />
    </section>
  );
};
