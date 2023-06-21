import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';
import { mockPlaces } from '../../mockPlaces';
import '@testing-library/jest-dom'

describe('List', () => {
  it('should render loading spinner when loading is true', () => {
    render(<List places={[]} type="restaurants" setType={() => {}} loading={true} />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render select element and list of places when loading is false', () => {
    render(<List places={mockPlaces} type="restaurants" setType={() => {}} loading={false} />);

    const selectElement = screen.getByTestId('type');
    expect(selectElement).toBeInTheDocument();

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);

    const placeElements = screen.getAllByTestId('place-details');
    expect(placeElements).toHaveLength(mockPlaces.length);
  });

  it('should call setType function when selecting a different type', () => {
    const setTypeMock = jest.fn();
    render(<List places={[]} type="restaurants" setType={setTypeMock} loading={false} />);

    const selectElement = screen.getByTestId('type');
    userEvent.selectOptions(selectElement, 'hotels');

    expect(setTypeMock).toHaveBeenCalledWith('hotels');
  });
});
