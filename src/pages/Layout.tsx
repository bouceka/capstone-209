// @flow
import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/footer/footer.component';
import { Header } from '../components/header/header.component';
import { useEffect, useState } from 'react';
import { Modal } from '../components/modal/modal.component';
type Props = {};
export const Layout = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getWarning = localStorage.getItem('warning');
    if (!getWarning) {
      setOpenModal(true);
      localStorage.setItem('warning', JSON.stringify('displayed'));
    }
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Modal
        primaryBtnContent='Navigate to Design System'
        secondaryBtnContent='Close'
        primaryAction={() => {
          setOpenModal(false);
          navigate('/design-system');
        }}
        secondaryAction={() => setOpenModal(false)}
        open={openModal}
        onClose={() => setOpenModal(false)}
        title='READ ME!'
        desc='This is not a real website of NIC Athletics! This is a school project from Adam Boucek.'
      />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
