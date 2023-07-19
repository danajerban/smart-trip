import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';
import SignUp from './SignUp';
import '@testing-library/jest-dom'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  updateProfile: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  setDoc: jest.fn().mockResolvedValue(),
  doc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('../../firebase.config', () => ({
  db: {
    collection: jest.fn(),
  },
}));

describe('SignUp', () => {
  test('renders without errors', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });

  // test('submits the form and creates a new user successfully', async () => {
  //   const mockName = 'John Doe';
  //   const mockEmail = 'test@example.com';
  //   const mockPassword = 'password123';

  //   const createUserWithEmailAndPasswordMock = jest.fn().mockResolvedValue();
  //   createUserWithEmailAndPassword.mockImplementation(createUserWithEmailAndPasswordMock);

  //   const updateProfileMock = jest.fn().mockResolvedValue();
  //   updateProfile.mockImplementation(updateProfileMock);

  //   const setDocMock = jest.fn().mockResolvedValue();
  //   setDoc.mockImplementation(setDocMock);
  //   const mockUser = { uid: 'mockUserId' };
  //   getAuth.mockReturnValue({ currentUser: mockUser });

  //   render(
  //     <BrowserRouter>
  //       <SignUp />
  //     </BrowserRouter>
  //   );

  //   const nameInput = screen.getByPlaceholderText('Name');
  //   const emailInput = screen.getByPlaceholderText('Email');
  //   const passwordInput = screen.getByPlaceholderText('Password');
  //   const form = screen.getByRole('form');

  //   fireEvent.change(nameInput, { target: { value: mockName } });
  //   fireEvent.change(emailInput, { target: { value: mockEmail } });
  //   fireEvent.change(passwordInput, { target: { value: mockPassword } });
  //   fireEvent.submit(form);

  //   await waitFor(() => {
  //     expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(getAuth(), mockEmail, mockPassword);
  //     expect(updateProfileMock).toHaveBeenCalledWith(getAuth().currentUser, {
  //       displayName: mockName,
  //     });
  //     // expect(setDocMock).toHaveBeenCalledWith(doc(db, 'users', getAuth().currentUser?.uid), {
  //     //   name: mockName,
  //     //   email: mockEmail,
  //     //   timestamp: serverTimestamp(),
  //     // });
  //     expect(toast.success).toHaveBeenCalledWith('User registered successfully');
  //   });
  // });

  test('submits the form and displays error toast if user registration fails', async () => {
    const mockName = 'John Doe';
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';

    const createUserWithEmailAndPasswordMock = jest.fn().mockRejectedValue(new Error('Registration failed'));
    createUserWithEmailAndPassword.mockImplementation(createUserWithEmailAndPasswordMock);

    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const form = screen.getByRole('form');

    fireEvent.change(nameInput, { target: { value: mockName } });
    fireEvent.change(emailInput, { target: { value: mockEmail } });
    fireEvent.change(passwordInput, { target: { value: mockPassword } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(getAuth(), mockEmail, mockPassword);
      expect(toast.error).toHaveBeenCalledWith('Something went wrong with registration');
    });
  });

});
