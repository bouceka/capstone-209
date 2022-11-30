// @flow
import * as React from 'react';
import { BlogPostsAside } from '../../components/blog-posts-aside/blog-posts-aside.component';
import { Button } from '../../components/button/button.component';
import { Calendar } from '../../components/calendar/calendar.component';
import { Carousel } from '../../components/carousel/carousel.component';
import { CTA } from '../../components/CTA/cta.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { LinkButton } from '../../components/link-button/link-button.component';
import { SportCards } from '../../components/sport-cards/sport-cards.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { TrustedCompanies } from '../../components/trusted-companies/trusted-companies.component';
import { VideoCarousel } from '../../components/video-carousel/video-carousel.component';

export const DesignSystem = () => {
  return (
    <>
      <div className='row' style={{ marginTop: '10px' }}>
        <div className='card'>
          <div className='display--large--bold'>Display Text Large Bold</div>
          <div className='display--large'>Display Text Large Semibold</div>
          <div className='display--large--medium'>Display Text Large Medium</div>
          <div className='display--small--bold'>Display Text Bold</div>
          <div className='display--small'>Display Text Small Semibold</div>
          <div className='display--small--medium'>Display Text Medium</div>
        </div>
        <div className='card' style={{ marginTop: '10px' }}>
          <h1 className='heading--bold'>Heading 1 Bold</h1>
          <h1 className='heading'>Heading 1</h1>
          <h1 className='heading--medium'>Heading 1 Medium</h1>
          <h2 className='heading--bold'>Heading 2 Bold</h2>
          <h2 className='heading'>Heading 2</h2>
          <h2 className='heading--medium'>Heading 2 Medium</h2>
          <h3 className='heading--bold'>Heading 3 Bold</h3>
          <h3 className='heading'>Heading 3</h3>
          <h3 className='heading--medium'>Heading 3 Medium</h3>
          <h4 className='heading--bold'>Heading 4 Bold</h4>
          <h4 className='heading'>Heading 4</h4>
          <h4 className='heading--medium'>Heading 4 Medium</h4>
          <h5 className='heading--bold'>Heading 5 Bold</h5>
          <h5 className='heading'>Heading 5</h5>
          <h5 className='heading--medium'>Heading 5 Medium</h5>
          <h6 className='heading--bold'>Heading 6 Bold</h6>
          <h6 className='heading'>Heading 6</h6>
          <h6 className='heading--medium'>Heading 6 Medium</h6>
        </div>
        <div className='card' style={{ marginTop: '10px' }}>
          <p className='paragraph--large--bold'>Body Text Large Bold</p>
          <p className='paragraph--large'>Body Text Large</p>
          <p className='paragraph--medium--bold'>Body Text Medium Bold</p>
          <p className='paragraph--medium'>Body Text Medium</p>
          <p className='paragraph--small--bold'>Body Text Small Bold</p>
          <p className='paragraph--small'>Body Text Small</p>
        </div>
        <div className='card' style={{ marginTop: '10px' }}>
          <div className='caption--large--bold'>Caption Text Large Bold</div>
          <div className='caption--large'>Caption Text Large</div>
          <div className='caption--medium--bold'>Caption Text Medium Bold</div>
          <div className='caption--medium'>Caption Text Medium</div>
        </div>
        <div
          className='card'
          style={{
            marginTop: '10px',
            display: 'grid',
            gap: '10px',
            justifyContent: 'flex-start',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
          }}
        >
          <div style={{ display: 'grid', gap: '10px' }}>
            <Button className='primary'>Button Primary</Button>
            <Button className='primary disabled'>Primary Disabled</Button>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Button className='secondary'>Button Secondary</Button>
            <Button className='secondary disabled'>Secondary Disabled</Button>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Button className='outline'>Button Outline</Button>
            <Button className='outline disabled'>Outline Disabled</Button>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Button className='link'>Button Link</Button>
            <Button className='link disabled'>Link Disabled</Button>
          </div>
          <div style={{ display: 'grid', gap: '10px', backgroundColor: 'blue' }}>
            <Button className='header'>Button Header</Button>
            <Button className='header disabled'>Button Disabled</Button>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <LinkButton size='medium'>Button Link</LinkButton>
            <LinkButton size='medium' className='disabled'>
              Link Disabled
            </LinkButton>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <LinkButton size='small'>Button Link</LinkButton>
            <LinkButton size='small' className='disabled'>
              Link Disabled
            </LinkButton>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Footer />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Header />
      </div>
      <div style={{ margin: '10px' }}>
        <Carousel />
      </div>
      <div style={{ margin: '10px' }}>
        <Calendar />
      </div>
      <div style={{ margin: '10px' }}>
        <CTA />
      </div>
      {/* <div style={{ margin: '10px' }}>
        <VideoCarousel />
      </div> */}
      <div style={{ margin: '10px' }}>
        <TrustedCompanies />
      </div>
      <div className='row' style={{ display: 'flex', gap: '2.4rem' }}>
        <TableResultsLarge />
        <BlogPostsAside />
      </div>
      <div style={{ margin: '10px' }}>
        <SportCards />
      </div>
    </>
  );
};
