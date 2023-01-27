import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './styles/main.scss';
import { DesignSystem } from './pages/design-system/design-system.component';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Homepage from './pages/homepage/homepage.component';
import { CalendarPage } from './pages/calendar-page/calendar-page.component';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes></Routes>
      <DesignSystem />
    </>
  );
}

export default App;
