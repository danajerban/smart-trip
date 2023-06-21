import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react'
import '@testing-library/jest-dom'

describe('Navbar', () => {
  test('renders the navbar correctly', () => {
    render(<Navbar />, { wrapper: MemoryRouter });


    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Chat')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  test('navigates to the correct route when navbar items are clicked', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    fireEvent.click(screen.getByText('Explore'));
    expect(mockNavigate).toHaveBeenCalledWith('/explore');

    fireEvent.click(screen.getByText('Chat'));
    expect(mockNavigate).toHaveBeenCalledWith('/chat');

    fireEvent.click(screen.getByText('Profile'));
    expect(mockNavigate).toHaveBeenCalledWith('/profile');
  });

  test('applies active styles to the current route', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    // Mock the `useLocation` hook to return different paths
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLocation: () => ({
        pathname: '/chat',
      }),
    }));

    const chatItem = screen.getByText('Chat');
    fireEvent.click(screen.getByText('Chat'));
    expect(chatItem).toHaveClass('navbarListItemNameActive');

    const exploreItem = screen.getByText('Explore');
    const profileItem = screen.getByText('Profile');
    expect(exploreItem).not.toHaveClass('navbarListItemNameActive');
    expect(profileItem).not.toHaveClass('navbarListItemNameActive');
  });
});
