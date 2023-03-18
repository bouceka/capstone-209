// @flow
import './trusted-companies.styles.scss';

import * as React from 'react';

export const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <div className="row">
        <div className="trusted-companies__group">
          <div className="trusted-companies__item">
            <img src="/assets/nic-logo.png" alt="NIC logo" />
          </div>
          <div className="trusted-companies__item">
            <img src="/assets/logos/Name=Delta.png" alt="Delta airlines logo" />
          </div>
          <div className="trusted-companies__item">
            <img src="/assets/logos/Name=Doordash.png" alt="Doordash logo" />
          </div>
          <div className="trusted-companies__item">
            <img src="/assets/logos/Name=Gladstone.png" alt="Gladstone logo" />
          </div>
          <div className="trusted-companies__item">
            <img src="/assets/logos/Name=Crown Isle.png" alt="Crown Isle logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
