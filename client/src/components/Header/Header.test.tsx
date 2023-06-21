import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Header component', () => {
  test('renders the home icon', () => {
    render(
        <Header setCoordinates={jest.fn()} setSelectedSearch={jest.fn()} />
    );

    const homeIcon = screen.getByTestId('home-icon');
    expect(homeIcon).toBeInTheDocument();
  });

  test('renders the search component', () => {
    render(
      <Header setCoordinates={jest.fn()} setSelectedSearch={jest.fn()} />
    );

    const searchComponent = screen.getByTestId('search-bar');
    expect(searchComponent).toBeInTheDocument();
  });
  // test('home icon links to home page', () => {
  //   render(
  //     <Header setCoordinates={jest.fn()} setSelectedSearch={jest.fn()} />
  //   );

  //   const homeIcon = screen.getByTestId('home-icon');
  //   expect(homeIcon).toHaveAttribute('href', '/');
  // })
});


