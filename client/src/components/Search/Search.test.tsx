import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom';
import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';

jest.mock('use-places-autocomplete', () => {
  const originalModule = jest.requireActual('use-places-autocomplete');
  
  return {
    __esModule: true,
    ...originalModule,
    default: () => ({
      ready: true,
      value: '',
      setValue: jest.fn(),
      suggestions: {
        status: 'OK',
        data: [
          {
            place_id: '1',
            structured_formatting: {
              main_text: 'Main Text 1',
              secondary_text: 'Secondary Text 1',
            },
          },
          {
            place_id: '2',
            structured_formatting: {
              main_text: 'Main Text 2',
              secondary_text: 'Secondary Text 2',
            },
          },
        ],
      },
      clearSuggestions: jest.fn(),
    }),
    getGeocode: jest.fn().mockResolvedValue({ lat: 123, lng: 456 }),
    getLatLng: jest.fn().mockResolvedValue({ lat: 123, lng: 456 }),
  }
});

// usePlacesAutocomplete.default.mockImplementation(() => mockUsePlacesAutocomplete);
// getGeocode.mockImplementation(() => mockGetGeocode);
// getLatLng.mockImplementation(() => mockGetLatLng);

describe('Search', () => {
  const setCoordinatesMock = jest.fn();
  const setSelectedSearchMock = jest.fn();

  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });

  it('renders search input and suggestions correctly', () => {
    render(
      <Search
        setCoordinates={setCoordinatesMock}
        setSelectedSearch={setSelectedSearchMock}
      />
    );

    const searchInput = screen.getByTestId('search-bar');
    expect(searchInput).toBeInTheDocument();

    const suggestionItems = screen.getAllByRole('option');
    expect(suggestionItems).toHaveLength(2);
    expect(suggestionItems[0]).toHaveTextContent('Main Text 1');
    expect(suggestionItems[1]).toHaveTextContent('Main Text 2');
  });

  it('updates search input value correctly', () => {
    render(
      <Search
        setCoordinates={setCoordinatesMock}
        setSelectedSearch={setSelectedSearchMock}
      />
    );

    const searchInput: HTMLInputElement = screen.getByTestId('search-bar');

    fireEvent.change(searchInput, { target: { value: 'New York' } });
    expect(searchInput.value).toBe('New York');
  
  });

  // it('selects a suggestion and updates coordinates correctly', async () => {
  //   render(
  //     <Search
  //       setCoordinates={setCoordinatesMock}
  //       setSelectedSearch={setSelectedSearchMock}
  //     />
  //   );

  //   // const searchInput = screen.getByTestId('search-bar');
  //   // fireEvent.change(searchInput, { target: { value: 'New York' } });
  //   // const { getGeocode } = require('use-places-autocomplete');
  //   // const spy = jest.spyOn(window, 'getGeocode');
  //   // spy.mockResolvedValue({address: 'New York'})
    
  //   const usePlacesAutocompleteResult = usePlacesAutocomplete();
  //   const mockedGetGeocode = usePlacesAutocomplete().getGeocode;

  //   const suggestionItem = screen.getByText('Main Text 1');
  //   expect(suggestionItem).toBeInTheDocument();
  //   fireEvent.click(suggestionItem);
    

  //   await waitFor(() => {
  //     expect(getGeocode).toReturnWith([{address: 'Mian Street'},{address: 'Main Street 1'}]);
  //     expect(setSelectedSearchMock).toHaveBeenCalled()
  // });
  // });
});
