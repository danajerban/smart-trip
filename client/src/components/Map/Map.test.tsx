import { render, screen, waitFor } from '@testing-library/react';
import Map from './Map';
import { mockPlaces } from '../../mockPlaces';
import '@testing-library/jest-dom'

const places = mockPlaces;

// describe('Map', () => {
//   test('renders the map component', () => {
//     render(
//       <Map
//         setCoordinates={jest.fn()}
//         setBounds={jest.fn()}
//         places={[]}
//         selectedSearch={null}
//       />
//     );

//     const googleMap = screen.getByTestId('google-map');
//     expect(googleMap).toBeInTheDocument();
//   });

//   test('renders markers on the map', () => {

//     render(
//       <Map
//         setCoordinates={jest.fn()}
//         setBounds={jest.fn()}
//         places={places}
//         selectedSearch={null}
//       />
//     );

//     const markers = screen.getAllByTestId('marker');
//     expect(markers.length).toBe(places.length);
//   });

//   test('displays info window when a marker is clicked', async () => {

//     render(
//       <Map
//         setCoordinates={jest.fn()}
//         setBounds={jest.fn()}
//         places={places}
//         selectedSearch={null}
//       />
//     );

//     expect(screen.queryByText(places[0].name)).not.toBeInTheDocument();

//     const marker = screen.getByTestId('marker');
//     marker.click();

//     await waitFor(() => {
//       expect(screen.getByText(places[0].name)).toBeInTheDocument();
//       expect(screen.getByText(places[0].address)).toBeInTheDocument();
//     });
//   });
// });
