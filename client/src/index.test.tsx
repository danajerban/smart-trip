import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { getPlacesData } from './TravelAdvisorAPI';
import {mockPlaces} from './mockPlaces';
import '@testing-library/jest-dom'


jest.mock('./TravelAdvisorAPI', () => ({
  getPlacesData: () => new Promise(() => mockPlaces)
}));

test('renders the app inside BrowserRouter', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();
});