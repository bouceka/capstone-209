import './homepage.styles.scss';

import * as React from 'react';
import { SuperSEO } from 'react-super-seo';

import { BlogPostsAside } from '../../components/blog-posts-aside/blog-posts-aside.component';
import { Carousel } from '../../components/carousel/carousel.component';
import { CTA } from '../../components/CTA/cta.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { TrustedCompanies } from '../../components/trusted-companies/trusted-companies.component';
import { VideoCarousel } from '../../components/video-carousel/video-carousel.component';
import { POSTS_DATA } from '../../mock/posts-mock';

const Homepage: React.FunctionComponent = () => {
  return (
    <>
      <SuperSEO
        title="Homepage | NIC Athletics"
        description="This is the (not) official web of NIC Athletics. You can find all the sport activities at NIC here."
        lang="en"
      />
      <div className="page">
        <Header />
        <div className="row tiles">
          <Carousel posts={POSTS_DATA} autoplay={false} />
          <div className="col-2x1">
            <TableResultsLarge />
            <BlogPostsAside />
          </div>
        </div>
        <CTA />
        <VideoCarousel />
        <TrustedCompanies />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
