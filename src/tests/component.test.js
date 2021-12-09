import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';
import Quotes from '../pages/Quotes';
import Home from '../pages/Home';

describe('Component snapshots should match', () => {
  it('Nav bar should render', () => {
    const render = TestRenderer.create(<Router><Navbar /></Router>).toJSON();
    expect(render).toMatchSnapshot();
  });

  it('Homepage should render', () => {
    const render = TestRenderer.create(<Home />).toJSON();
    expect(render).toMatchSnapshot();
  });

  it('Calculator should render', () => {
    const render = TestRenderer.create(<Calculator />).toJSON();
    expect(render).toMatchSnapshot();
  });

  it('Quotes should render', () => {
    const render = TestRenderer.create(<Quotes />).toJSON();
    expect(render).toMatchSnapshot();
  });
});
