import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CalendarPage } from './pages/calendar-page/calendar-page.component';
import { DesignSystem } from './pages/design-system/design-system.component';
import Homepage from './pages/homepage/homepage.component';
import { AboutUs } from './pages/inside-athletics/about-us/about-us.component';
import { ContactUs } from './pages/inside-athletics/contact-us/contact-us.component';
import { InsideAthletics } from './pages/inside-athletics/inside-athletics.component';
import { StaffDirectors } from './pages/inside-athletics/staff-directors/staff-directors.component';
import { Layout } from './pages/Layout';
import { Login } from './pages/login/login.component';
import { Teams } from './pages/teams/teams.component';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/design-system',
        element: <DesignSystem />,
      },
      {
        path: '/calendar',
        element: <CalendarPage />,
      },
      {
        path: '/teams',
        element: <Teams />,
      },
      {
        path: '/inside-athletics',
        element: <InsideAthletics />,
      },
      {
        path: '/sign-up',
        element: <Login />,
      },
      { path: '/inside-athletics/contact-us', element: <ContactUs /> },
      { path: '/inside-athletics/staff-directors', element: <StaffDirectors /> },
      { path: '/inside-athletics/about-us', element: <AboutUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
