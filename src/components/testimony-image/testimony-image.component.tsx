// @flow
import * as React from 'react';

import { Button } from '../button/button.component';

export const TestimonyImage = () => {
  return (
    <div className="testimony">
      <div className="row">
        <div className="testimony__content">
          <div className="testimony__text">
            <p className="paragraph--medium">
              Above all the wins, championships and awards, Joe Doe&apos;s legacy is his contribution to the discipline
              of coaching itself. His approach and techniques were revolutionary at the time, and had a deep impact that
              lives on in the work of modern coaches who to this day regard Joe as a mentor and innovator.
            </p>
            <Button className="secondary">Learn More</Button>
          </div>

          <img
            src="/assets/staff-directory/foto-sushi-6anudmpILw4-unsplash-removebg-preview 1.png"
            alt="John Doe's testimony "
          />
        </div>
      </div>
    </div>
  );
};
