import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignIn from './SignIn';
import '@testing-library/jest-dom';

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
  useNavigate: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

test('submits the form and navigates to the home page on successful sign-in', async () => {
  const mockEmail = 'test@example.com';
  const mockPassword = 'password123';

  const signInWithEmailAndPasswordMock = jest.fn().mockResolvedValue({ user: {} });
  signInWithEmailAndPassword.mockImplementation(signInWithEmailAndPasswordMock);

  const navigateMock = jest.fn();
  useNavigate.mockReturnValue(navigateMock);

  render(<SignIn />);

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const form = screen.getByRole('form');

  fireEvent.change(emailInput, { target: { value: mockEmail } });
  fireEvent.change(passwordInput, { target: { value: mockPassword } });
  fireEvent.submit(form);

  expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(getAuth(), mockEmail, mockPassword);
  expect(navigateMock).toHaveBeenCalledWith('/');
});

test('displays an error toast when sign-in fails', async () => {
  const mockEmail = 'test@example.com';
  const mockPassword = 'password123';

  const signInWithEmailAndPasswordMock = jest.fn().mockRejectedValue(new Error('Authentication failed'));
  signInWithEmailAndPassword.mockImplementation(signInWithEmailAndPasswordMock);

  render(<SignIn />);

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const form = screen.getByRole('form');

  fireEvent.change(emailInput, { target: { value: mockEmail } });
  fireEvent.change(passwordInput, { target: { value: mockPassword } });
  fireEvent.submit(form);

  expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(getAuth(), mockEmail, mockPassword);
  expect(toast.error).toHaveBeenCalledWith('Bad User Credentials');
});
