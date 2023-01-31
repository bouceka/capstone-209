// @flow
import * as React from 'react';
import { AthleteOfMonth } from '../../components/athlete-of-month/athlete-of-month.component';
import { BlogContainer } from '../../components/blog-container/blog-container.component';
import { BlogPostsAside } from '../../components/blog-posts-aside/blog-posts-aside.component';
import { Button } from '../../components/button/button.component';
import { Calendar } from '../../components/calendar/calendar.component';
import { Carousel } from '../../components/carousel/carousel.component';
import { CTA } from '../../components/CTA/cta.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { LinkButton } from '../../components/link-button/link-button.component';
import { Cards } from '../../components/cards/cards.component';
import { EventResultsAside } from '../../components/table-results-aside/event-results-aside.component';
import TableResultsLarge from '../../components/table-results-large/table-results-large.component';
import { Title } from '../../components/title/title.component';
import { TrustedCompanies } from '../../components/trusted-companies/trusted-companies.component';
import { VideoCarousel } from '../../components/video-carousel/video-carousel.component';
import { INSIDE_ATHLETICS_DATA, SPORT_DATA } from '../../components/cards/card-data';
import { TestimonyImage } from '../../components/testimony-image/testimony-image.component';
import { Input } from '../../components/input/input.component';
import { StaffDirectors } from '../inside-athletics/staff-directors/staff-directors.component';
import { HeaderDS } from '../../design-system/headerDS.component';
import { SidebarDS } from '../../design-system/sidebarDS.component';
import { MainDS } from '../../design-system/mainDS.component';

export const DesignSystem = () => {
  return (
    <>
      <HeaderDS />
      <div className='row'>
        <div className='container-ds'>
          <SidebarDS />
          <MainDS />
        </div>
      </div>
    </>
  );
};
