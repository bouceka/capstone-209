import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import './index.css'
import { CalendarPage } from './pages/calendar-page/calendar-page.component';
import { DesignSystem } from './pages/design-system/design-system.component';
import Homepage from './pages/homepage/homepage.component';
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/design-system",
    element: <DesignSystem/>,
  },
  {
    path: "/design-system",
    element: <CalendarPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
