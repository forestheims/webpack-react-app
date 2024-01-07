import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App></App>);
  const homeLinkElement = screen.getByRole('link', { name: /Home/i });
  expect(homeLinkElement).toBeInTheDocument();

  const aboutLinkElement = screen.getByRole('link', { name: /About/i });
  expect(aboutLinkElement).toBeInTheDocument();
});
