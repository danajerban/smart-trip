import { render, screen, fireEvent } from '@testing-library/react';
import Map from './Map';
import React from 'react';
import { mockPlaces } from '@/src/mockPlaces';

jest.mock('@react-google-maps/api', () => ({
  GoogleMap: jest.fn(({ children }) => <div>{children}</div>),
  InfoWindow: jest.fn(({ children }) => <div>{children}</div>),
  Marker: jest.fn(({ children }) => <div>{children}</div>),
  useJsApiLoader: jest.fn(),
}));

describe('Map', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the map component', () => {
    render(
      <Map
        setCoordinates={jest.fn()}
        setBounds={jest.fn()}
        places={[]}
        selectedSearch={null}
      />
    );

    const mapElement = screen.getByTestId('google-map');
    expect(mapElement).toBeInTheDocument();
  });

  it('renders markers for each place', () => {
    const places = mockPlaces;

    render(
      <Map
        setCoordinates={jest.fn()}
        setBounds={jest.fn()}
        places={places}
        selectedSearch={null}
      />
    );

    const markers = screen.getAllByTestId('marker');
    expect(markers).toHaveLength(places.length);
  });

  it('displays info window when marker is clicked', () => {
    const places = mockPlaces

    render(
      <Map
        setCoordinates={jest.fn()}
        setBounds={jest.fn()}
        places={places}
        selectedSearch={null}
      />
    );

    const marker = screen.getAllByTestId('marker')[0];
    fireEvent.click(marker);

    const infoWindow = screen.getByText('Cafe Couscous - Vege');
    expect(infoWindow).toBeInTheDocument();
  });

});
