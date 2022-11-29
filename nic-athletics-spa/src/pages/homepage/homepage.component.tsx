import * as React from 'react';
import { BlogPostsAside } from '../../components/blog-posts-aside/blog-posts-aside.component';
import { Carousel } from '../../components/carousel/carousel.component';
import { CTA } from '../../components/CTA/cta.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { TrustedCompanies } from '../../components/trusted-companies/trusted-companies.component';
import { VideoCarousel } from '../../components/video-carousel/video-carousel.component';
import './homepage.styles.scss';

interface IHomepageProps {}

const Homepage: React.FunctionComponent<IHomepageProps> = (props) => {
  return (
    <>
      <Header />
      <div className='row'>
        <div className='page-grid'>
          <Carousel />

          <div style={{display: 'flex', marginTop: '24px', gap: '2.4rem'}}>
            <TableResultsLarge />
            <BlogPostsAside />
          </div>
        </div>
      </div>
          <CTA />
					<div style={{display: 'flex', marginTop: '24px', gap: '2.4rem'}}></div>
          <VideoCarousel />
          <TrustedCompanies />
      <Footer />
    </>
  );
};

export default Homepage;
