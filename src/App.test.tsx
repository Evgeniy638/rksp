import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Main', () => {
  render(<App />);
  const linkElement = screen.getByText(/Main/i);
  expect(linkElement).toBeInTheDocument();
});
