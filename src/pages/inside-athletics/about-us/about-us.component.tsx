// @flow
import * as React from 'react';

import { Breadcrumbs } from '../../../components/breadcrumbs/breadcrumbs.component';
import Footer from '../../../components/footer/footer.component';
import { Header } from '../../../components/header/header.component';
import { Title } from '../../../components/title/title.component';

export const AboutUs = () => {
  return (
    <div className="page">
      <Header />
      <Breadcrumbs />
      <Title>About Us</Title>
      <div className="row">
        <section className="about-page">
          <div className="about-page__about">
            <h3 className="heading--bold">About Us</h3>
            <p className="paragraph--medium">
              Our mission is to provide a positive student-athlete experience that fosters a culture of excellence in
              academics, athletics and community engagement.
            </p>
          </div>
          <div className="about-page__vision">
            <h3 className="heading--bold"> Values</h3>
            <p className="paragraph--medium">
              <span className="paragraph--medium--bold">Responsibility</span> to connect with others to foster mutual
              growth.
            </p>
            <p className="paragraph--medium">
              <span className="paragraph--medium--bold">Accountability</span> for actions and conduct in the community.
            </p>
            <p className="paragraph--medium">
              <span className="paragraph--medium--bold">Integrity</span> makes our community humble, accountable,
              transparent and ethical.
            </p>
            <p className="paragraph--medium">
              <span className="paragraph--medium--bold">Well-being </span> commitment to health and balance where all
              students thrive.
            </p>
            <p className="paragraph--medium">
              <span className="paragraph--medium--bold">Respect </span> for the rights, differences and dignity of
              others.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
