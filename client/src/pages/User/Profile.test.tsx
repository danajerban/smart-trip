import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { getAuth, updateProfile } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Profile from './Profile';
import '@testing-library/jest-dom'

jest.mock('../../firebase.config', () => ({
  db: {
    collection: jest.fn(),
  },
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  updateProfile: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  updateDoc: jest.fn(),
  doc: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

test('renders the profile details correctly', () => {
  const mockDisplayName = 'John Doe';
  const mockEmail = 'test@example.com';

  getAuth.mockReturnValue({
    currentUser: {
      displayName: mockDisplayName,
      email: mockEmail,
    },
  });

  render(<Profile />);

  expect(screen.getByText('My Profile')).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockDisplayName)).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockEmail)).toBeInTheDocument();
});

// test('updates the profile details', () => {
//   const mockDisplayName = 'John Doe';
//   const mockEmail = 'test@example.com';
//   const mockUpdatedName = 'Jane Smith';

//   getAuth.mockReturnValue({
//     currentUser: {
//       displayName: mockDisplayName,
//       email: mockEmail,
//     },
//   });

//   updateProfile.mockResolvedValue();
//   updateDoc.mockResolvedValue();

//   render(<Profile />);

//   fireEvent.change(screen.getByLabelText('Name'), { target: { value: mockUpdatedName } });
//   fireEvent.click(screen.getByText('change'));

//   expect(updateProfile).toHaveBeenCalledWith(getAuth().currentUser, {
//     displayName: mockUpdatedName,
//   });

//   expect(updateDoc).toHaveBeenCalledWith(doc(db, 'users', getAuth().currentUser.uid), {
//     name: mockUpdatedName,
//   });

//   expect(screen.getByText('done')).toBeInTheDocument();
// });

// test('handles errors when updating profile details', () => {
//   const mockError = new Error('Update error');

//   getAuth.mockReturnValue({
//     currentUser: {
//       displayName: 'John Doe',
//       email: 'test@example.com',
//     },
//   });

//   updateProfile.mockRejectedValue(mockError);

//   render(<Profile />);

//   fireEvent.click(screen.getByText('change'));

//   expect(toast.error).toHaveBeenCalledWith('Could not update profile details');
// });
