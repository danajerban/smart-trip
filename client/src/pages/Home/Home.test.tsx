import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom';

test('renders the home component with correct class names', () => {
  render(<Home />);

  const mainElement = screen.getByRole('main');
  const earthElement = screen.getByTestId('earth');
  const spaceElement = screen.getByTestId('space');

  expect(mainElement).toHaveClass('flexHome');
  expect(mainElement).toHaveClass('bodyHome');
  expect(earthElement).toHaveClass('earth');
  expect(earthElement).toHaveClass('filterHome');
  expect(spaceElement).toHaveClass('space');
});
