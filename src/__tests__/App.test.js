import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App></App>
    </Provider>
  );
  const loginButtonElement = screen.getByRole('link', {
    name: /Log in with email/i,
  });
  expect(loginButtonElement).toBeInTheDocument();
});
