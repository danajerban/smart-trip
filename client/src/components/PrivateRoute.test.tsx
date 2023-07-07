import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { useAuthStatus } from '../useAuthStatus';
import '@testing-library/jest-dom';
import React from 'react';

jest.mock('../useAuthStatus', () => ({
  useAuthStatus: jest.fn(),
}));

test('renders the Spinner when checkingStatus is true', () => {
  useAuthStatus.mockReturnValue({ loggedIn: false, checkingStatus: true });

  const { getByTestId } = render(
    <BrowserRouter>
      <PrivateRoute />
    </BrowserRouter>
  );

  expect(getByTestId('spinner')).toBeInTheDocument();
});

test('renders the Outlet when loggedIn is true', () => {
  useAuthStatus.mockReturnValue({ loggedIn: true, checkingStatus: false });

  const { queryByTestId } = render(
    <BrowserRouter>
      <PrivateRoute />
    </BrowserRouter>
  );

  expect(queryByTestId('spinner')).toBeNull();

});
