// @flow
import './cta.styles.scss';

import * as React from 'react';

import { Button } from '../button/button.component';
export const CTA = () => {
  return (
    <section className="cta">
      <div className="row">
        <div className="cta__content">
          <img src="/assets/nic-athletics-logo-64x.png" alt="NIC Athletics logo" />
          <div className="cta__text">
            <h4 className="heading--bold">Do you want to join us?</h4>
            <p className="paragraph--large">
              Join one of our teams, have fun and make our community bigger. NIC will help you with registration to the
              Comox leagues.
            </p>
          </div>
          <Button className="secondary">Sign Up</Button>
        </div>
      </div>
    </section>
  );
};
