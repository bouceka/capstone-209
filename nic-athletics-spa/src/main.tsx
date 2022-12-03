import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Footer from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import './index.css';
import { CalendarPage } from './pages/calendar-page/calendar-page.component';
import { DesignSystem } from './pages/design-system/design-system.component';
import Homepage from './pages/homepage/homepage.component';
import { ContactUs } from './pages/inside-athletics/contact-us/contact-us.component';
import { InsideAthletics } from './pages/inside-athletics/inside-athletics.component';
import { Layout } from './pages/Layout';
import { Teams } from './pages/teams/teams.component';
import './styles/main.scss';

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
      { path: '/inside-athletics/contact-us', element: <ContactUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
