import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import ForgotPassword from './ForgotPassword';
import '@testing-library/jest-dom'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('ForgotPassword', () => {
  test('renders without errors', () => {
    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );
    expect(screen.getByText('Forgot Password')).toBeInTheDocument();
  });

  test('submits the form and sends reset email successfully', async () => {
    const mockEmail = 'test@example.com';
    const sendPasswordResetEmailMock = jest.fn().mockResolvedValue();
    sendPasswordResetEmail.mockImplementation(sendPasswordResetEmailMock);

    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const form = screen.getByRole('form');

    fireEvent.change(emailInput, { target: { value: mockEmail } });
    fireEvent.submit(form);

    expect(sendPasswordResetEmailMock).toHaveBeenCalledWith(getAuth(), mockEmail);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Email was sent');
    });
  });

  test('submits the form and displays error toast if reset email fails', async () => {
    const mockEmail = 'test@example.com';
    const sendPasswordResetEmailMock = jest.fn().mockRejectedValue(new Error('Email sending failed'));
    sendPasswordResetEmail.mockImplementation(sendPasswordResetEmailMock);

    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const form = screen.getByRole('form');

    fireEvent.change(emailInput, { target: { value: mockEmail } });
    fireEvent.submit(form);

    expect(sendPasswordResetEmailMock).toHaveBeenCalledWith(getAuth(), mockEmail);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Could not send reset email');
    });
  });
});
