import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AppContainer from './App';

describe('All pages open on nav link click', () => {
  it('Homepage opens on \'Home\' button', () => {
    render(
      <MemoryRouter>
        <AppContainer />
      </MemoryRouter>,
    );
    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Math magicians')).toBeInTheDocument();
  });

  it('Calculator opens on \'Calculator\' button', () => {
    render(
      <MemoryRouter>
        <AppContainer />
      </MemoryRouter>,
    );
    userEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Let\'s do some math!')).toBeInTheDocument();
  });
});
