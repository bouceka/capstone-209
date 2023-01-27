// @flow
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer.component';
import { Header } from '../components/header/header.component';
type Props = {};
export const Layout = (props: Props) => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
};
