// @flow
import * as React from 'react';

import PixelatedRuleImg from '/assets/illustrative-img/pixel-rule.webp';
import RatioRuleImg from '/assets/illustrative-img/ratio-rule.webp';

import { Highlight } from '../highlight/highlight.component';

export const ImagesDS = () => {
  return (
    <section className="images-ds">
      <h4 className="heading">Images</h4>
      <p className="paragraph--medium">
        Most of components that require images do not need additional styling. A developer or an admin should focus only
        on aspect ratio and size. The recommended aspect ratio is <Highlight>3:2, 4:3, 5:4, 16:9</Highlight>.
        Recommended formats are JPG/JPEG and WEBP. Before uploading any image you should aim for file size between{' '}
        <Highlight>200KB and 2MB</Highlight> anything larger would slow down loading sites and smaller sizes might make
        the image pixelated.
      </p>
      <h6 className="heading">Do and don&apos;t</h6>
      <p className="paragraph--medium">
        <span className="paragraph--large--bold">Small size</span> might lead to decrease quality and the result will
        not look professional. Try to aim for the best looking pictures and its size will not go over 2MB.
      </p>
      <img src={PixelatedRuleImg} alt="pixel rule" />
      <p className="paragraph--medium">
        <span className="paragraph--large--bold">Aspect ration</span> should be on of{' '}
        <Highlight>3:2, 4:3, 5:4, 16:9</Highlight>. The reason is that most components that use images make the image
        centered. If an image is in portrait mode it might crop the image disproportionally.
      </p>
      <img src={RatioRuleImg} alt="ratio rule" />
    </section>
  );
};
