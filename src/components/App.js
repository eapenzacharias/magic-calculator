import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotMatch from '../pages/NotMatch';
import Quotes from '../pages/Quotes';
import Calculator from './Calculator';
import Navbar from './Navbar';

const AppContainer = () => {
  const CalcContainer = () => (
    <>
      <div className="row">
        <div className="col col-4">
          <h2>Let&apos;s do some math!</h2>
        </div>
        <div className="col col-6">
          <Calculator />
        </div>
      </div>
    </>
  );
  return (
    <>
      <Navbar />
      <div className="container" data-testid="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalcContainer />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </div>
    </>
  );
};

export default AppContainer;
