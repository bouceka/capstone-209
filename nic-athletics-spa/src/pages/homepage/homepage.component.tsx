import * as React from 'react';
import { Carousel } from '../../components/carousel/carousel.component';
import Footer from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import './homepage.styles.scss'

interface IHomepageProps {}

const Homepage: React.FunctionComponent<IHomepageProps> = (props) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="page-grid">
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
