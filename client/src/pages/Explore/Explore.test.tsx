import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Explore from './Explore';
import { getPlacesData } from '../../TravelAdvisorAPI';
import {mockPlaces} from '../../mockPlaces';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

jest.mock('../../TravelAdvisorAPI', () => ({
  getPlacesData: () => new Promise(() => mockPlaces)
}));

describe('Explore', () => {
  
  test('renders without errors', () => {
    render(
    <BrowserRouter>
      <Explore />
    </BrowserRouter>
    );
    expect(screen.getByTestId('explore-component')).toBeInTheDocument();
  });

  // test('fetches places data and renders the list', async () => {

  //   render(
  //     <BrowserRouter>
  //       <Explore />
  //     </BrowserRouter>
  //     );

  //   await waitFor(() => {
  //     expect(screen.getByTestId('list-component')).toBeInTheDocument();
  //     expect(screen.getAllByTestId('place-details')).toHaveLength(2);
  //   });
  // });

  test('displays loading state while fetching places data', async () => {

    render(
      <BrowserRouter>
        <Explore />
      </BrowserRouter>
      );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('place-details')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('loading-spinner')).toBeNull();

  });
});
  
  //   it('renders markers for each place', () => {
  //     const places = [
  //       { name: 'Place 1', latitude: 52.52477179506519, longitude: 13.397221820955055 },
  //       { name: 'Place 2', latitude: 52.52477179506519, longitude: 13.397221820955056 },
  //     ];
  
  //     render(
  //       <Map
  //         setCoordinates={jest.fn()}
  //         setBounds={jest.fn()}
  //         places={places}
  //         selectedSearch={null}
  //       />
  //     );
  
  //     const markers = screen.getAllByTestId('marker');
  //     expect(markers).toHaveLength(places.length);
  //   });
  
  //   it('displays info window when marker is clicked', () => {
  //     const places = [
  //       { name: 'Place 1', latitude: 52.52477179506519, longitude: 13.397221820955055 },
  //       { name: 'Place 2', latitude: 52.52477179506519, longitude: 13.397221820955056 },
  //     ];
  
  //     render(
  //       <Map
  //         setCoordinates={jest.fn()}
  //         setBounds={jest.fn()}
  //         places={places}
  //         selectedSearch={null}
  //       />
  //     );
  
  //     const marker = screen.getAllByTestId('marker')[0];
  //     fireEvent.click(marker);
  
  //     const infoWindow = screen.getByText('Place 1');
  //     expect(infoWindow).toBeInTheDocument();
  //   });
  // });

